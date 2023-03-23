import React, {useEffect, useState} from "react";
import {Props} from "@/router/types";
import api from "@/api";
import "./index.less";
import {Extra} from "@/views/Detail/types";
import {flushSync} from "react-dom";
import { SafeArea } from "antd-mobile";
import { FileOutline, LikeOutline, StarOutline, TravelOutline,LeftOutline} from "antd-mobile-icons";
const Detail:React.FC<Props>= (props) => {
    const { params } = props;
    const { id } = params;
    const [info,setInfo] = useState<any>('');
    const [extra,setExtra] = useState<Partial<Extra>>({});
    useEffect(() => {
        (async () => {
            //获取详情图
            const result = await api.queryNewsInfo(id ?? '');
            flushSync(() => {
                setInfo(result)
                handleStyle(result);
            })
            //保证DOM可以获取到
            handleImage(result);
        })()
    },[])
    useEffect(() => {
        (async () => {
            //获取点赞信息
            const result = await api.queryStoryExtra(id ?? '');
            setExtra(result);
        })()
    },[])
    /* 处理html的样式 */
    const handleStyle = (info:any) => {
        const { css } = info;
        if(!Array.isArray(css)) return;
        const cssLink = css[0];//获取css链接
        const linkDOM = document.createElement('link');
        linkDOM.rel = 'stylesheet';
        linkDOM.href = cssLink;
        document.head.append(linkDOM);
    }
    /* 处理大图 */
    const handleImage = (info:any) => {
        const { image } = info;
        if(!image) return;
        const picDOM = document.querySelector<HTMLElement>('.img-place-holder');
        const imgDOM = document.createElement('img');
        imgDOM.src = image;
        imgDOM.onload = () => {
            //完成加载
            imgDOM.style.cssText = 'width:100%'
            //@ts-ignore;
            picDOM.style.cssText = 'overflow:hidden';
            picDOM?.appendChild(imgDOM);
        }
        imgDOM.onerror = () => {
            //移除外层容器
            const parent = picDOM?.parentElement;
            parent?.removeChild(picDOM as any);
        }
    }
    return (
        <div className='zhihu-detail'>
            {/* 文章内容 */}
            <div className="zhihu-detail_content" dangerouslySetInnerHTML={{__html:info.body}}></div>
            {/* 底部 */}
            <div className="zhihu-detail_footer">
                <div className="zhihu-detail_footer_back"><LeftOutline /></div>
                <div className="zhihu-detail_footer_icons">
                    <div className="zhihu-detail_footer_icons_wrapper">
                        <FileOutline />
                        <div className="zhihu-detail_footer_icons_wrapper_amount">120</div>
                    </div>
                    <div className="zhihu-detail_footer_icons_wrapper">
                        <LikeOutline />
                        <div className="zhihu-detail_footer_icons_wrapper_amount">120</div>
                    </div>
                    <div className="zhihu-detail_footer_icons_wrapper">
                        <StarOutline />
                    </div>
                    <div className="zhihu-detail_footer_icons_wrapper">
                        <TravelOutline />
                    </div>
                </div>
            </div>
            <SafeArea position='bottom'/>
        </div>
    )
}

export default Detail

import React, {useEffect, useState} from "react";
import {Props} from "@/router/types";
import api from "@/api";
import "./index.less";
import {Extra} from "@/views/Detail/types";
import {flushSync} from "react-dom"
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
        if(image) return;
        const picDOM = document.querySelector('.img-place-holder');
        console.log(picDOM)
    }
    return (
        <div className='zhihu-detail'>
            {/* 文章内容 */}
            <div className="zhihu-detail_content" dangerouslySetInnerHTML={{__html:info.body}}></div>
            {/* 底部 */}
            <div className="zhihu-detail_footer"></div>
        </div>
    )
}

export default Detail

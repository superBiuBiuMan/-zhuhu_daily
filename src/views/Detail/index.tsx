import React, {useEffect, useState} from "react";
import {RouterBasicProps} from "@/router/types";
import api from "@/api";
import "./index.less";
import {Extra} from "@/views/Detail/types";
import {flushSync} from "react-dom";
import {SafeArea, Toast} from "antd-mobile";
import { FileOutline, LikeOutline, StarOutline, TravelOutline,LeftOutline} from "antd-mobile-icons";
import { useDispatch,useSelector } from "react-redux";
import {fetchUserCollectionAction, fetchUserDataAction} from "@/store/slice/base/actions";
const Detail:React.FC<RouterBasicProps>= (props) => {
    const { params } = props;
    const { id } = params;
    const [info,setInfo] = useState<any>('');
    const [extra,setExtra] = useState<Partial<Extra>>({});
    const dispatch = useDispatch();
    const isCollection = useSelector<any>((state) => {
        return state.base?.favorite?.some((item:any) => item?.news?.id === id)
    });//获取收藏列表从而计算是否已收藏
    const loginInfo = useSelector<any>(state => state.base?.info);//是否具有登录信息
    useEffect(() => {
        (async () => {
            const result = await api.queryNewsInfo(id ?? '').catch(() => ({}));//获取详情图
            flushSync(() => {
                setInfo(result)
                handleStyle(result);
            })
            //使用flushSync,保证下面操作的DOM可以获取到
            handleImage(result);
        })()
    },[])
    useEffect(() => {
        (async () => {
            //获取点赞信息
            const result = await api.queryStoryExtra(id ?? '').catch(() => ({}));
            //获取收藏列表
            dispatch(fetchUserCollectionAction() as any)
            //获取登录信息
            dispatch(fetchUserDataAction() as any)
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
    /* 点击返回 */
    const handleBack = () => {
        props.navigate(-1);
    }
    /* 用户收藏/取消收藏 */
    const handleChargeCollection = async () => {
        if(!id) {
            Toast.show({
                icon:"fail",
                content:'非法请求!'
            })
        }else{
            console.log(loginInfo)
            if(!loginInfo){
                Toast.show({
                    icon:'fail',
                    content:'请先登录',
                })
                //没有用户信息,跳转到用户信息
                props.navigate({
                    pathname:'/login',
                    search:props.location.pathname + props.location.search,
                },{replace:true})
            }else{
                //有用户信息
                const { code } = isCollection ? await api.reqRemoveCollection(id).catch(() => ({})) : await api.reqAddCollection(id).catch(() => ({}));
                if(+code !== 0){
                    Toast.show({
                        icon:'fail',
                        content:isCollection ? '收藏失败' : '取消收藏失败'
                    })
                }
                //重新dispatch,为了重新render下
                dispatch(fetchUserCollectionAction() as any);
            }
        }
    }
    return (
        <div className='zhihu-detail'>
            {/* 文章内容 */}
            <div className="zhihu-detail_content" dangerouslySetInnerHTML={{__html:info.body}}></div>
            {/* 底部 */}
            <div className="zhihu-detail_footer">
                {/* 返回Icon */}
                <div className="zhihu-detail_footer_back" onClick={handleBack}><LeftOutline /></div>
                <div className="zhihu-detail_footer_icons">
                    {/* 评论 */}
                    <div className="zhihu-detail_footer_icons_wrapper">
                        <FileOutline />
                        <div className="zhihu-detail_footer_icons_wrapper_amount">{ extra?.short_comments }</div>
                    </div>
                    {/* 点赞 */}
                    <div className="zhihu-detail_footer_icons_wrapper">
                        <LikeOutline />
                        <div className="zhihu-detail_footer_icons_wrapper_amount">{ extra?.popularity }</div>
                    </div>
                    {/* 收藏 */}
                    <div className="zhihu-detail_footer_icons_wrapper" onClick={handleChargeCollection}>
                        <StarOutline style={{color:isCollection ? '#2e9eff' : 'black'}}/>
                    </div>
                    {/* 分享 */}
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

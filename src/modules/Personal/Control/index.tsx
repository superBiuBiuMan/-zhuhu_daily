import React from 'react';
import "./index.less";
import Item from "./component/Item";
import { StarOutline,DeleteOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {BaseSliceAction} from "@/store/slice/base";
import Utils from "@/assets/js/utils";
import {Toast} from "antd-mobile";
const Control = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    /* 跳转到收藏 */
    const jumpFavorite = () => {
        navigate({pathname:'/favorite'})
    }
    /* 退出登录 */
    const exitLogin = () => {
        try {
            //1.清除redux
            dispatch(BaseSliceAction.clearAllInfo());
            //2.清除token
            Utils.storage.remove('tk');
            //3.提示
            Toast.show({
                icon:'success',
                content:'安全退出成功',
            })
            //4.跳转到首页
            navigate({pathname:'/'})
        }catch (e){
            navigate('/')
            Toast.show({
                icon:'fail',
                content:'退出失败,请重试'
            })
        }
    }
    return (
        <div className='personal-control'>
            <Item icon={<StarOutline />} title={'我的收藏'} onClick={jumpFavorite}/>
            <Item icon={<DeleteOutline /> } title={'退出登录'} onClick={exitLogin}/>
        </div>
    );
};

export default Control;

import "./index.less"
import React, {useEffect, useMemo, useState} from "react";
import { HeadProps, TimeFormat } from "./types";
import dayjs from "dayjs";
import utils from "@/assets/js/utils";
import {fetchUserDataAction} from "@/store/slice/base/actions";
import {useDispatch} from "react-redux";
import defaultImage from "@/assets/images/logo.png";
import {useNavigate} from "react-router-dom";
const Head:React.FC<HeadProps> = ({ time }) => {
    const dispatch = useDispatch();
    const [avatar,setAvatar] = useState<string>(defaultImage);
    const navigate = useNavigate();
    const timeFormat = useMemo<TimeFormat>(() => {
        let initData:TimeFormat = {
            day:'--',
            month:'--',
        }
        if(!time) return initData;
        return {
            day: dayjs(time).date() as unknown as string,
            month:utils.formatMonth(dayjs(time).month()) + '月'
        }
    },[time]);
    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(fetchUserDataAction() as any).catch(() => ({}));
            console.log(payload)
            if(payload){
                setAvatar(payload?.pic ?? defaultImage)
            }
        })()
    },[])
    return (
        <header className='home-head-box'>
            {/* 日期 */}
            <div className="home-head-box_date">
                <div className="home-head-box_date_day">{ timeFormat.day }</div>
                <div className="home-head-box_date_month">{ timeFormat.month }</div>
            </div>
            {/* 暖心提醒 */}
            <div className="home-head-box_warm">早点休息</div>
            {/* 头像 */}
            <div className="home-head-box_avatar" onClick={() => { navigate({pathname:'/personal'}) }}>
                <img className='home-head-box_avatar_pic' alt='头像' src={avatar}/>
            </div>
        </header>
    )
}

export default Head

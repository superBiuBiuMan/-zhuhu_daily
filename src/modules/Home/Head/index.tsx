import "./index.less"
import React, {useMemo} from "react";
import { HeadProps, TimeFormat } from "./types";
import dayjs from "dayjs";
import utils from "@/assets/js/utils";
const Head:React.FC<HeadProps> = ({ time }) => {
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
    },[time])
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
            <div className="home-head-box_avatar">
                <img className='home-head-box_avatar_pic' alt='头像' src='https://dreamlove.top/img/favicon.png'/>
            </div>
        </header>
    )
}

export default Head

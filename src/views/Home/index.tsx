import React, {useEffect, useState} from "react";
import {Button} from "antd-mobile";
import HomeHeader from "@/modules/Home/Head"
import { useSelector } from "react-redux";
import SwiperTop from "@/modules/Home/SwiperTop";
import api from "@/api";

const Home = () => {
    const [day,setDay] = useState<any>('');//日期时间
    const [swiperList,setSwiperList] = useState<any[]>([]);//轮播图数据
    /* 初次渲染完成,向服务器发送数据请求 */
    useEffect(() => {
        (async () => {
            const data = await api.queryNewsNewest().catch(() => ({}))
            const { date,top_stories} = data;
            setDay(date ?? '');
            setSwiperList(top_stories ?? []);
        })()
    },[])
    return (
        <div>
            {/* 顶部暖心提醒和头像   */}
            <HomeHeader time={day}/>
            {/* 轮播图 */}
            <SwiperTop list={swiperList}/>
        </div>
    )
};

export default Home as React.FunctionComponent;

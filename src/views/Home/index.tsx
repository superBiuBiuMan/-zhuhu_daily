import React, {useCallback, useEffect, useState} from "react";
//import { useSelector } from "react-redux";
//import {Button} from "antd-mobile";
import HomeHeader from "@/modules/Home/Head"
import SwiperTop from "@/modules/Home/SwiperTop";
//import SkeletonItem from "@/components/SkeletonItem";
import DayContent from "@/modules/Home/DayContent";
import LoadMore from "@/components/LoadMore";
import api from "@/api";
import dayjs from "dayjs";
const Home = () => {
    const [day,setDay] = useState<any>('');//日期时间
    const [swiperList,setSwiperList] = useState<any[]>([]);//轮播图数据
    const [newList,setNewList] = useState<{date:string,stories:any[]}[]>([]);//新闻列表
    /* 初次渲染完成,向服务器发送数据请求 */
    useEffect(() => {
        (async () => {
            const data = await api.queryNewsNewest().catch(() => ({}));//获取新闻列表
            const { date,top_stories,stories } = data;
            setDay(date ?? '');
            setSwiperList(top_stories ?? []);
            setNewList([
                {
                    date,
                    stories,
                }
            ])
        })()
    },[])
    /* 执行到底部的回调 */
    const handleOnBottom = async () => {
        const { date } = newList[newList.length-1];//获取日期
        const result  = await api.queryNewsBefore(date);
        setNewList([...newList,{
            date:result.date,
            stories:result.stories ?? [],
        }])
    }
    return (
        <div>
            {/* 顶部暖心提醒和头像   */}
            <HomeHeader time={day}/>
            {/* 轮播图 */}
            <SwiperTop list={swiperList}/>
            {/* <SkeletonItem/> */}
            <DayContent data={newList}/>
            <LoadMore style={{display:newList.length > 0 ? 'block' : 'none'}} onBottom={handleOnBottom}/>
        </div>
    )
};

export default Home as React.FunctionComponent;

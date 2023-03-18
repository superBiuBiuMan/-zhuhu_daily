import React, {useState} from "react";
import {Button} from "antd-mobile";
import HomeHeader from "@/modules/Home/Head"
import { useSelector } from "react-redux";
import SwiperTop from "@/modules/Home/SwiperTop";

const Home = () => {
    useSelector(state => {
        console.log(state)
    })
    const [day,setDay] = useState('2023/3/18')
    return (
        <div>
            {/* 顶部暖心提醒 */}
            <HomeHeader time={day}/>
            {/* 轮播图 */}
            <SwiperTop/>
        </div>
    )
};

export default Home as React.FunctionComponent;

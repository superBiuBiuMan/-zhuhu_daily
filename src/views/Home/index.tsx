import React, {useState} from "react";
import {Button} from "antd-mobile";
import HomeHeader from "@/modules/Home/Head"
import { useSelector } from "react-redux";

const Home = () => {
    useSelector(state => {
        console.log(state)
    })
    const [day,setDay] = useState('2023/3/18')
    return (
        <div>
            <HomeHeader time={day}/>
        </div>
    )
};

export default Home as React.FunctionComponent;

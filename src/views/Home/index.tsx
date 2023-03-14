import React from "react";
import {Button} from "antd-mobile";
import { useSelector } from "react-redux";

const Home = () => {
    useSelector(state => {
        console.log(state)
    })
    const test = () => {
        console.log('点击了我')
    }
    return (
        <div>
            <Button onClick={test}>你好</Button>
        </div>
    )
};

export default Home as React.FunctionComponent;

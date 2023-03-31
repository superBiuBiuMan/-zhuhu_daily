import React from 'react';
import "./index.less";
import Item from "./component/Item";
import { StarOutline,DeleteOutline } from "antd-mobile-icons";
const Control = () => {
    const test = () => {
        console.log(111)
    }
    return (
        <div className='personal-control'>
            <Item icon={<StarOutline />} title={'我的收藏'} onClick={test}/>
            <Item icon={<DeleteOutline /> } title={'退出登录'} />
        </div>
    );
};

export default Control;

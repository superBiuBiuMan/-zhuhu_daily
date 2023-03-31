import React from 'react';
import "./index.less";
import {NavBar} from "antd-mobile";
import {useNavigate} from "react-router-dom";
import {EditSOutline} from "antd-mobile-icons";
const BaseInfo:React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className='personal-base'>
            <NavBar className='personal-base_bar'  onBack={() => navigate(-1)}>个人中心</NavBar>
            <div className="personal-base_info">
                <div className="personal-base_info_avatar"><img alt='头像' src={'https://dreamlove.top/img/favicon.png'}/></div>
                <div className="personal-base_info_content">用户姓名</div>
                <div className="personal-base_info_operation"><EditSOutline /></div>
            </div>
        </div>
    );
};

export default BaseInfo;

import React from 'react';
import "./index.less";
import {useNavigate} from "react-router-dom";
import {EditSOutline} from "antd-mobile-icons";
import {useSelector} from "react-redux";
const BaseInfo:React.FC = () => {
    const navigate = useNavigate();
    const userInfo = useSelector((state:any) => state?.base?.info);
    /* 跳转到修改个人信息页面 */
    const jumpEditPersonInfo = () => {
        navigate({pathname:'/update'})
    }
    return (
        <div className='personal-base'>
            <div className="personal-base_info">
                <div className="personal-base_info_avatar"><img alt='头像' src={ userInfo?.pic }/></div>
                <div className="personal-base_info_content">{ userInfo?.name ?? '--' }</div>
                <div className="personal-base_info_operation" onClick={jumpEditPersonInfo}><EditSOutline /></div>
            </div>
        </div>
    );
};

export default BaseInfo;

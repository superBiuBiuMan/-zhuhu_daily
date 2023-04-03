import React from "react";
import {RouterBasicProps} from "@/router/types";
import BaseInfo from "@/modules/Personal/BaseInfo";
import Control from "@/modules/Personal/Control";
import "./index.less";
import {NavBar} from "antd-mobile";
const Personal:React.FC<RouterBasicProps> = (props) => {
  return (
      <div className='zhihu-personal'>
          <NavBar className='personal-base_bar'  onBack={() => props.navigate(-1)}>个人中心</NavBar>
          <BaseInfo/>
          <Control/>
      </div>
  );
};


export default Personal;

import React from "react";
import {RouterBasicProps} from "@/router/types";
import BaseInfo from "@/modules/Personal/BaseInfo";
import Control from "@/modules/Personal/Control";
import "./index.less";
const Personal:React.FC<RouterBasicProps> = (props) => {
  return (
      <div className='zhihu-personal'>
          <BaseInfo/>
          <Control/>
      </div>
  );
};


export default Personal;

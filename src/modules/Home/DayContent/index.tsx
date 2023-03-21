import React from "react";
import {Divider} from "antd-mobile";
import "./index.less";
import NewsItem from "./component/NewsItem";
import {DayContentProps,transformListData} from "./types";
const DayContent:React.FC<DayContentProps> = (props) => {
    const showList = transformListData(props.data);
    return (
        <div className='home-day-content'>
            {
                showList && showList.length > 0 ? showList.map((item,index) => (
                    <div className="home-day-content_days" key={index}>
                        {/* 日期 */}
                        { index === 0 ? null : <Divider contentPosition={'left'}>{ item.date }</Divider>}
                        <div className="home-day-content_days_item">
                            {
                                item?.list.map((project) => <NewsItem key={project.id} {...project}/>)
                            }
                        </div>
                    </div>
                )) : null
            }
        </div>
    )
}

export default DayContent;

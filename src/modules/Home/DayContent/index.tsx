import React from "react";
import {Divider} from "antd-mobile";
import "./index.less";
import NewsItem from "./component/NewsItem";
const DayContent:React.FC = () => {

    return (
        <div className='home-day-content'>
            <div className="home-day-content_days">
                {/* 日期 */}
                <Divider contentPosition={'left'}>10月23日</Divider>
                <div className="home-day-content_days_item">
                    {/* 项目 */}
                    <NewsItem/>
                    {/* 项目 */}
                    <NewsItem/>
                    {/* 项目 */}
                    <NewsItem/>
                    {/* 项目 */}
                    <NewsItem/>
                    {/* 项目 */}
                    <NewsItem/>
                </div>
            </div>
            <div className="home-day-content_days">
                {/* 日期 */}
                <Divider contentPosition={'left'}>10月24日</Divider>
                <div className="home-day-content_days_item">
                    {/* 项目 */}
                    <NewsItem/>
                    {/* 项目 */}
                    <NewsItem/>
                    {/* 项目 */}
                    <NewsItem/>
                    {/* 项目 */}
                    <NewsItem/>
                    {/* 项目 */}
                    <NewsItem/>
                </div>
            </div>
        </div>
    )
}

export default DayContent;

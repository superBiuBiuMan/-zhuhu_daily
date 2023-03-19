import React from "react";
import "./index.less";
import { Image } from "antd-mobile";

const NewsItem:React.FC = () => {

    return (
        // todo 添加路由跳转参数
        <div className='home-news-item'>
            {/* 文章标题和作者 */}
            <div className="home-news-item_left">
                {/* 标题 */}
                <div className="home-news-item_left_title">没有质量的的物质有能量吗?</div>
                {/* 作者 */}
                <div className="home-news-item_left_author">子乾坤</div>
            </div>
            {/* 图片 */}
            <Image className="home-news-item_right" lazy src='https://dreamlove.top/img/favicon.png'/>
        </div>
    )
}

export default NewsItem;

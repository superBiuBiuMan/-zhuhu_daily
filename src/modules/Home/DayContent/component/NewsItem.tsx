import React from "react";
import "./index.less";
import { Image } from "antd-mobile";
import {Link} from "react-router-dom";
import {ListItem} from "@/modules/Home/DayContent/types";
const NewsItem:React.FC<ListItem> = (props) => {
    return (
        <div className="home-news-item-wrapper">
            <Link to={{pathname:`/detail/${props.id}`,}} className={'home-news-item-wrapper'}>
                <div className='home-news-item'>
                    {/* 文章标题和作者 */}
                    <div className="home-news-item_left">
                        {/* 标题 */}
                        <div className="home-news-item_left_title">{ props.title }</div>
                        {/* 作者 */}
                        <div className="home-news-item_left_author">{ props.hint }</div>
                    </div>
                    {/* 图片 */}
                    <Image className="home-news-item_right" lazy src={props.picLink}/>
                </div>
            </Link>
        </div>
    )
}

export default NewsItem;

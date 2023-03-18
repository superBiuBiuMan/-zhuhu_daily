import React from "react";
import {Swiper} from "antd-mobile";
import "./index.less";
const SwiperTop:React.FC = () => {
    return (
        <div className='header-swiper-top'>
           <Swiper >
               <Swiper.Item>
                   <div className='header-swiper-top_item'>
                       <img className='header-swiper-top_item_pic' src='https://tdesign.gtimg.com/miniprogram/images/swiper1.png' alt='轮播'/>
                   </div>
               </Swiper.Item>
               <Swiper.Item>
                   <div className='header-swiper-top_item'>
                       <img className='header-swiper-top_item_pic' src='https://tdesign.gtimg.com/miniprogram/images/swiper1.png' alt='轮播'/>
                   </div>
               </Swiper.Item>
               <Swiper.Item>
                   <div className='header-swiper-top_item'>
                       <img className='header-swiper-top_item_pic' src='https://tdesign.gtimg.com/miniprogram/images/swiper1.png' alt='轮播'/>
                   </div>
               </Swiper.Item>
               <Swiper.Item>
                   <div className='header-swiper-top_item'>
                       <img className='header-swiper-top_item_pic' src='https://tdesign.gtimg.com/miniprogram/images/swiper1.png' alt='轮播'/>
                   </div>
               </Swiper.Item>
           </Swiper>
            <div className="header-swiper-top_info">
                <div className="header-swiper-top_info_title">
                    在未来，沙漠有可能被彻底改造为适合人类居住的环境吗?
                </div>
                <div className="header-swiper-top_info_author">作者&nbsp;/&nbsp;Peter</div>
            </div>
        </div>
    )
}

export default SwiperTop;

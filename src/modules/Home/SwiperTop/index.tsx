import React, {useMemo} from "react";
import {Image, Swiper} from "antd-mobile";
import "./index.less";
import { SwiperTopProps,transformSwiperList } from "./types";
import { useNavigate } from "react-router-dom";
const SwiperTop:React.FC<SwiperTopProps> = ({list}) => {
    const navigate = useNavigate();
    const swiperList = useMemo(() => transformSwiperList(list),[list]);
    /* 跳转到详情页 */
    const jumpDetail = (id:string) => {
        navigate({pathname:`/detail/${id}`,})
    }
    return (
        <div className='header-swiper-top'>
            {
                swiperList && swiperList.length > 0 && (
                    <>
                        <Swiper autoplay autoplayInterval={6000}>
                            {
                                swiperList?.map(item => (
                                    <Swiper.Item key={item.id} onClick={() => jumpDetail(item.id)}>
                                        <div className='header-swiper-top_item'>
                                            <Image className='header-swiper-top_item_pic' src={item.imgLink} alt='轮播' lazy />
                                        </div>
                                        <div className="header-swiper-top_info">
                                            <div className="header-swiper-top_info_title"> { item.title } </div>
                                            <div className="header-swiper-top_info_author">{ item.author }</div>
                                        </div>
                                    </Swiper.Item>
                                )) ?? null
                            }
                        </Swiper>
                    </>
                )
            }
        </div>
    )
}

export default SwiperTop;



export interface SwiperTopProps {
    list:any[],
}

export interface SwiperList {
    id:string
    title:string,//文章标题
    author:string,//作者
    imgLink:string,//图片链接
}

export type TransformSwiperList = (list:any) => SwiperList[];


export const transformSwiperList:TransformSwiperList = (list) => {
    if(!(list && list.length)) return [];
    return list.map((item:any) => ({
        id:item?.id,
        title:item?.title ?? '--',
        author:item?.hint ?? '--',
        imgLink:item?.image ?? '',
    }))
}

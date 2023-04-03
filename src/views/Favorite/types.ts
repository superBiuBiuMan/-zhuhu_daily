import {ListItem} from "@/modules/Home/DayContent/types";

export interface FavoriteList  extends ListItem {
    itemId:number,
}

export const transformList = (list:any):FavoriteList[]  => {
    if(!list || list?.length === 0) return [];
    return list?.map((item:any) => ({
        itemId:item?.id,//用于删除使用
        id:item?.news?.id,//查看详情
        title:item?.news?.title ?? '--',//标题
        picLink:item?.news?.image,//图片链接
    })) ?? [];
}

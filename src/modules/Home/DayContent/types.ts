import dayjs from "dayjs";
export interface DayContentProps {
    data:any,
}
export interface ListItem {
    id:string,
    title:string,
    hint:string,//作者
    picLink:string,//图片链接
}
export interface ShowList {
    date:string,//日期
    list:ListItem[],//列表数据
}

export type TransformListData = (list:{date:string,stories:any[]}[]) => ShowList[];

/* 转换列表数据 */
export const transformListData:TransformListData = (list) => {
    if(!(list && list.length)) return [];
    return list.map(item => {
        const { date,stories  } = item;
        return {
            date:date ? dayjs(date).format('M月DD日') : '--',
            list:stories?.map((item:any) => ({
                    id:item.id,
                    title:item?.title ?? '--',
                    hint:item?.hint ?? '--',
                    picLink:item?.images[0] ?? '',
            })) ?? []
        }
    })
}

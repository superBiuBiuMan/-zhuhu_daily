import React from "react";

export interface ItemProps {
    icon:JSX.Element,//图标
    title:string,
    preview?:JSX.Element,
    onClick?:(event:React.MouseEvent) => void,//点击回调
}

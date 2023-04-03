import React from 'react';
import classes from "./index.module.less";
import { ItemProps } from "./types";
import { RightOutline } from "antd-mobile-icons";

const Item:React.FC<ItemProps> = (props) => {
    return (
        <div className={classes.item} onClick={(e) => props.onClick && props.onClick(e)}>
            {/* 图标 */}
            <div className={classes.item_icon}>{ props.icon }</div>

            {/* 操作一栏名称 */}
            <div className={classes.item_title}>{ props.title }</div>

            {/* 预览(可能没有) */}
            {
                props.preview && <div className={classes.item_preview}>{ props.preview }</div>
            }
            {/* 进入操作 */}
            <div className={classes.item_enter} >
                <RightOutline />
            </div>
            {/* 自定义虚线 */}
            <div className={classes.item_dashed}></div>
        </div>
    );
};

export default Item;

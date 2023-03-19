import classes from "./index.module.less";
import React from "react";
import { Skeleton } from "antd-mobile";

const SkeletonItem:React.FC = () => {
    return (
        <div className={classes.skeletonItem}>
            <div className={classes.skeletonItem_info}>
                <Skeleton.Title animated className={classes.skeletonItem_info_title}/>
                <Skeleton.Title animated className={classes.skeletonItem_info_title}/>
                <Skeleton.Title animated className={classes.skeletonItem_info_title}/>
            </div>
            <Skeleton.Title animated className={classes.skeletonItem_pic} />
        </div>
    )
}

export default SkeletonItem;

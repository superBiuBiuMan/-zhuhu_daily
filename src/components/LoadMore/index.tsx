import React from 'react';
import classes from "./index.module.less";
import {DotLoading} from "antd-mobile";
const LoadMore = () => {
    return (
        <div className={classes.loadMore}>
            加载中<DotLoading/>
        </div>
    );
};

export default LoadMore;

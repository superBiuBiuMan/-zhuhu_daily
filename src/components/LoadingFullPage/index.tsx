import classes from "./index.module.less";
import { DotLoading } from "antd-mobile";
import {Props} from "./types";
import React from "react";

const LoadingFullPage:React.FunctionComponent<Props> = (props) => {
    const { title,style } = props;
    return (
        <div className={classes.loading} style={style ? style : {}}>
            <DotLoading color={'primary'} {...props}/>
            { title ? <span className={classes.loading_text}>{ title } </span> : <span className={classes.loading_text}>加载中</span> }
        </div>
    )
}

export default LoadingFullPage;

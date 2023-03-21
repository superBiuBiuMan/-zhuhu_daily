import React, {useEffect, useRef} from 'react';
import classes from "./index.module.less";
import {DotLoading} from "antd-mobile";
import { LoadMoreProps } from "@/components/LoadMore/types";

const LoadMore:React.FC<Partial<LoadMoreProps>> = (props) => {
    const { onBottom,options,style } = props;
    const loadRef = useRef<any>();

    useEffect(() => {
        const loadRefCurrent = loadRef.current;
        const observer = new IntersectionObserver((change) => {
            const {isIntersecting} = change[0];
            if(isIntersecting){
                onBottom && onBottom();
            }
        },options ?? {});
        observer.observe(loadRef.current);
        return () => {
            //移除监听
            observer.unobserve(loadRefCurrent);
        }
    },[onBottom,options,style])
    return (
        <div className={classes.loadMore} style={style} ref={loadRef}>
            加载中<DotLoading/>
        </div>
    );
};

export default LoadMore;

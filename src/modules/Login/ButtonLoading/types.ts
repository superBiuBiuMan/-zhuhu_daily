import React, {useCallback, useState} from "react";
import {ButtonProps,Toast} from "antd-mobile";

export type Delay = () => Promise<any>;
export type HandleClick = () => void;
export type OnClick = () => Promise<Function>;


export interface ButtonLoadingProps extends ButtonProps{
    time?:number,//延迟时间(单位秒),
    onClick:OnClick,
    children:React.ReactNode,
}
export type UseButtonLoading = (props:ButtonLoadingProps) => {
    loading:boolean,//是否正在加载
    content:string,//等待时候的内容
    delay:Delay,//等待函数
    btnProps:ButtonProps,
    handleClick:HandleClick,
}
export const Default_Content = '获取验证码';
export const Default_time = 60;
export const useButtonLoading:UseButtonLoading = (props:ButtonLoadingProps) => {
    const {time:timeOrigin,children,onClick,...btnProps } = props;
    const [loading,setLoading] = useState<boolean>(false)
    const [content,setContent] = useState<string>(Default_Content)
    /* 等待函数 */
    const delay = useCallback(() => {
        let time = timeOrigin ?? Default_time;
        let timer:any;
        return new Promise((resolve) => {
            timer = setInterval(() => {
                if(time >= 1){
                    //未结束
                    time--;
                    setContent(`${time}秒再获取`);
                }else {
                    //倒计时结束
                    clearInterval(timer)
                    setContent(Default_Content)
                    resolve('');
                }
            },1000)
        })
    },[timeOrigin])
    /* 点击回调 */
    const handleClick = useCallback(async () => {
        if(onClick){
            onClick().then(async(callback) => {
                setLoading(true);
                callback && callback();//执行回调
                try {
                    //开启定时器
                    await delay()
                }catch (_){
                }
                setLoading(false);
            }).catch((error:any) => {
                console.error(error);
            })
        }else{
            console.error('未传入onClick执行函数')
        }
    },[onClick,delay])

    return {
        loading,
        content,
        delay,
        handleClick,
        btnProps,
    }
}

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchUserDataAction} from "@/store/slice/base/actions";
import {Toast} from "antd-mobile";
import {v4 as uuidv4} from "uuid";
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";
//需要认证的列表
export const needAuthPath = [
    '/personal', '/favorite',
    '/update'
];

/* 路由校验-判断是否需要登录 */
export const useCheckNeedAuth = (path:string) => {
    const [,setRandomValue] = useState<string>('');
    const { info }: any = useSelector<any>((state) => state.base);
    const needAuth = !info && needAuthPath.includes(path)//登录信息不存在,并且访问的路径在需要认证的路由路径就需要认证;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        (async () => {
            //不需要校验,直接返回
            if(!needAuth) return;
            //需要校验,请求获取用户信息(因为redux刷新后状态就没有了,需要重新请求)
            const {payload:info} = await dispatch(fetchUserDataAction() as any).catch(() => {})
            if(!info){
                Toast.show({
                    icon:'fail',
                    content:'请先登录'
                })
                //console.log('执行跳转');
                navigate({
                    pathname:'/login',
                    search:`redirect=${location.pathname}`,
                })
                return;
            }
            //console.log('获取到了信息')
            //这里采用的方法就是更新一个值,从而去触发重新渲染,老师用的是时间戳,我这里就用uuid
            setRandomValue(uuidv4());
        })();
    })
    return [
        needAuth,
    ]
}

import React, {Suspense, useState} from "react";
import routes from "./routes";
import {RoutesType} from "./types";
import { Routes,Route } from "react-router";
import { useParams,useLocation,useSearchParams,useNavigate } from "react-router-dom";
import LoadingFullPage from "@/components/LoadingFullPage";
import {useCheckNeedAuth} from "@/router/methods";
export const Element = (props:RoutesType):JSX.Element => {
    const { meta,component:Component }= props;
    const { title = '知乎日报-WebApp' } = meta || {};//获取标题和是否缓存
    document.title = title;//设置网页标题
    const navigate = useNavigate();
    /* 获取路由信息 */
    const params = useParams();
    const location = useLocation();
    const { pathname } = location;//获取路径名
    const [searchParams] = useSearchParams();
    const [needAuth] = useCheckNeedAuth(pathname)

    return needAuth
        ? <LoadingFullPage/>
        : (
                <Component location={location} params={params} searchParams={searchParams} navigate={navigate}/>
        )
        //?
        //<LoadingFullPage/>
        //:
        //<LoadingFullPage/>
}

const RouterView = () => {
    return (
        <Suspense fallback={<LoadingFullPage/>}>
            <Routes>
                {
                    routes.map(item => {
                        return <Route key={item.name} path={item.path} element={
                                <Element {...item}/>
                        }/>
                    })
                }
            </Routes>
        </Suspense>
    )
}

export default RouterView;

import routes from "./routes";
import {RoutesType} from "./types";
import { Routes,Route } from "react-router";
import React from "react";
import { useParams,useLocation,useSearchParams,useNavigate } from "react-router-dom";
export const Element = (props:RoutesType):JSX.Element => {
    const { meta,component:Component }= props;
    const { title = '知乎日报-WebApp' } = meta || {};//获取标题
    document.title = title;//设置网页标题

    const navigate = useNavigate();
    /* 获取路由信息 */
    const params = useParams();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    return <Component location={location} params={params} searchParams={searchParams} navigate={navigate}/>

}

const RouterView = () => {
    return (
        <Routes>
            {
                routes.map(item => {
                    return <Route key={item.name} path={item.path} element={<Element {...item}/>}/>
                })
            }
        </Routes>
    )
}

export default RouterView;

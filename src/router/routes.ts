import {lazy} from "react";
import Home from "@/views/Home";
import {RoutesType} from "./types";

const routes:RoutesType[] = [
    {
        path:"/",
        name:'home',
        component:Home,
        meta:{
            title:"知乎日报-WebApp"
        }
    },
    {
        path:'/login',
        name:'login',
        component:lazy(() => import("@/views/Login")),
        meta:{
            title: "登录/注册-知乎日报"
        }
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:lazy(() => import("@/views/Detail")),
        meta:{
            title: "详情页面-知乎日报"
        }
    },
    {
        path:'/personal',
        name:'personal',
        component:lazy(() =>import("@/views/Personal")),
        meta:{
            title: "个人中心-知乎日报"
        }
    },
    {
        path:'/favorite',
        name:'favorite',
        component:lazy(() => import("@/views/Favorite")),
        meta:{
            title: "收藏夹-知乎日报"
        }
    },
    {
        path:'/update',
        name:'update',
        component: lazy(() => import("@/views/Update")),
        meta:{
            title: "修改个人信息-知乎日报",
        }
    },
    {
        path:'*',
        name:'404',
        component: lazy(() => import("@/views/404")),
        meta:{
            title: "找不到页面-知乎日报"
        }
    }
]

export default routes

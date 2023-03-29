import * as React from "react";
import {Location} from "@remix-run/router";
import {Params} from "react-router-dom";
import {NavigateFunction} from "react-router/dist/lib/hooks";
export interface Meta {
    title:string,//标题
}
export interface RouterBasicProps {
    location:Location,
    params:Params,
    searchParams:URLSearchParams,
    navigate:NavigateFunction,
}
export interface RoutesType {
    path:string,
    name:string,
    component:React.FC<RouterBasicProps>
    meta?:Meta,
}
export type CheckNeedAuth = () => [
    boolean,
];

import {DotLoadingProps} from "antd-mobile/es/components/dot-loading/dot-loading";
import React from "react";
export interface Props extends DotLoadingProps {
    children?:JSX.Element,
    title?:string,
    style?:React.CSSProperties
}

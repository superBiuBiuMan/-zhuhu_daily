import {DotLoadingProps} from "antd-mobile/es/components/dot-loading/dot-loading";

export interface Props extends DotLoadingProps {
    children?:JSX.Element,
    title?:string,
}

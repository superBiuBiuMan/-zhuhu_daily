import React, {useMemo} from "react";
import { UserOutline,MailOutline } from "antd-mobile-icons";
export type Icons = 'phone' | 'code'
export type UseLogin = () => {
    icons:Record<Icons, JSX.Element>,
}
export const useLogin:UseLogin = () => {

    const icons = useMemo<Record<string, JSX.Element>>(() => {
        return {
            phone:<UserOutline className={'zhuhu-login_wrapper_form_form_label'} />,
            code:<MailOutline className={'zhuhu-login_wrapper_form_form_label'}/>,
        }
    },[])

    return {
        icons,
    }
}

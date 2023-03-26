import React, {useCallback, useMemo, useState} from "react";
import { UserOutline,MailOutline } from "antd-mobile-icons";
import {Rule} from "rc-field-form/lib/interface";
import api from "@/api";
import {Toast} from "antd-mobile";
import utils from "@/assets/js/utils";
export type Icons = 'phone' | 'code'
export type OnSubmit = () => void;
export type GetCode = () => Promise<any>;
export type UseLogin = (formInstance:any) => {
    icons:Record<Icons, JSX.Element>,
    rules:Record<string, Rule[]>,
    onSubmit:OnSubmit,
    getCode:GetCode,
}
export const useLogin:UseLogin = (formInstance:any) => {
    /* 校验规则 */
    const [rules] = useState<Record<string, Rule[]>>({
        phone:[
            {validator:(_,value) => {
                value = value?.trim();
                return new Promise((resolve, reject) => {
                    if(!value) return reject('请输入手机号');
                    const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
                    if(reg.test(value)) return resolve('');
                    else return reject('输入的手机号不合法')
                })
            }}
        ],
        code:[
            {validator:(_,value) => {
                value = value?.trim();
                return new Promise((resolve, reject) => {
                    if(!value) return reject('请输入验证码');
                    else resolve('');
                })
            }}
        ],
    })
    const icons = useMemo<Record<string, JSX.Element>>(() => {
        return {
            phone:<UserOutline className={'zhuhu-login_wrapper_form_form_label'} />,
            code:<MailOutline className={'zhuhu-login_wrapper_form_form_label'}/>,
        }
    },[])

    /* 点击提交 */
    const onSubmit:OnSubmit = useCallback(() => {
        formInstance.validateFields().then(async () => {
            const values = formInstance.getFieldsValue();
            const { code,token } = await api.userLogin(values).catch(() => ({}))
            if(+code !== 0){
                Toast.show({
                    icon:'fail',
                    content:'验证码错误'
                });
            }else{
                utils.storage.set('tk',token);
                Toast.show({
                    icon:'success',
                    content:'登录成功'
                })
            }
        }).catch((res:any) => {
            return ;
        })
    },[formInstance])

    /* 获取验证码 */
    const getCode:GetCode = useCallback(() => {
        return new Promise((resolve, reject) => {
            formInstance.validateFields(['phone']).then((res:any) => {
                const { phone } = res;
                resolve(async () => {
                  const { code } =  await api.getPhoneCode(phone);
                  if(+code !== 0){
                      Toast.show({
                          icon:'fail',
                          content:'获取验证码失败'
                      })
                  }
                });
            }).catch((res:any) => {
                console.log(res)
                reject();
            })
        })
    },[formInstance])
    return {
        icons,
        rules,
        onSubmit,
        getCode
    }
}

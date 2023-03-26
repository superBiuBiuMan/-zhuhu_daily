import React from "react";
import {Button, Form, Input} from "antd-mobile";
import "./index.less";
import {useLogin} from "@/views/Login/types";
import LoginBg from "@/assets/images/svg/loginBg.svg"
import ButtonLoading from "@/modules/Login/ButtonLoading";
const Login = () => {
    const [formInstance] = Form.useForm();
    const { icons,rules,onSubmit,getCode } = useLogin(formInstance);
    return (
     <div className='zhuhu-login'>
         {/* 登录外框 */}
         <div className="zhuhu-login_wrapper">
             {/* 按钮操作 */}
             <div className="zhuhu-login_wrapper_btn">
                 <div className="zhuhu-login_wrapper_btn_detail" ><span className={'zhuhu-login_wrapper_btn_detail_title'}>了解详情</span></div>
                 <div className="zhuhu-login_wrapper_btn_operation">
                     <Button size='large' shape='rounded'>登录</Button>
                     <Button size='large' shape='rounded'>注册</Button>
                 </div>
                 <img  className="zhuhu-login_wrapper_btn_img" alt='背景图' src={LoginBg}/>
             </div>
             <div className="zhuhu-login_wrapper_form">
                 <Form layout={'horizontal'}
                       className={'zhuhu-login_wrapper_form_form'}
                       mode={'card'}
                       form={formInstance}>
                     <Form.Item label={ icons.phone } name={'phone'} rules={rules.phone}>
                         <Input placeholder='请输入手机号'/>
                     </Form.Item>
                     <Form.Item label={ icons.code } name={'code'} rules={rules.code}
                                extra={
                                    <ButtonLoading  color={'primary'} shape={'rounded'} onClick={getCode}>获取验证码</ButtonLoading>
                                }>
                         <Input placeholder='请输入验证码' />
                     </Form.Item>
                     <Form.Item >
                         <div className={'zhuhu-login_wrapper_form_form_login'}>
                             <Button type={'submit'} onClick={onSubmit} className={'zhuhu-login_wrapper_form_form_login_btn'} color={'primary'}>登录</Button>
                         </div>
                     </Form.Item>
                 </Form>
             </div>
         </div>
     </div>
  )
};


export default Login

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from "antd-mobile";
import { Provider } from "react-redux";
import store from "@/store";
import './index.less';
/* 重置样式表 */
import "@/assets/css/reset.css";
/* 覆盖antdMobile样式 */
import "@/assets/css/antdMobile.less"
/* REM */
import "amfe-flexible"
import App from './App';

/* 国际化 */
import zhCN from "antd-mobile/es/locales/zh-CN";

/* 最大宽度处理 */
(() => {
    const handleMax = () => {
        const html = document.documentElement;
        const root = document.getElementById('root') as HTMLElement;
        const size = parseInt(html.style.fontSize);//获取size大小
        root.style.maxWidth = '750px';
        if(size > 75) {
            html.style.fontSize = '75px'
        }
    }
    handleMax();
    window.addEventListener('resize',handleMax);
})();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
        <ConfigProvider locale={zhCN}>
            <Provider store={store}>
                <App />
            </Provider>
        </ConfigProvider>
);

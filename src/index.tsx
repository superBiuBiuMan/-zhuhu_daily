import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from "antd-mobile";

import './index.less';
/* 重置样式表 */
import "../src/assets/css/reset.css";
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
        <App />
    </ConfigProvider>
);

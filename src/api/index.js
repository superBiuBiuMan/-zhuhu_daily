import http from "@/api/http";

/* 获取最新新闻  */
const queryNewsNewest = () => http.get('/api/news_latest');

/**
 * 获取以往新闻
 * @param time 20211022  传递今天日期则获取昨日新闻(不传则默认是今天日期)
 */
const queryNewsBefore = (time) => {
    return http.get('/api/news_before',{
        params:{
            time,
        }
    })
}

/**
 * 获取新闻详细信息
 * @param id 新闻ID
 */
const queryNewsInfo = (id) => {
    return http.get('/api/news_info',{
        params:{
            id,
        }
    })
}

/**
 * 获取新闻点赞信息
 * @param id {string | number} 新闻ID
 */
export const queryStoryExtra = (id) => {
    return http.get('/api/story_extra',{
        params:{
            id,
        }
    })
}
/**
 * 获取验证码信息
 * @param phone {string}手机号
 */
export const getPhoneCode = (phone) => {
    return http.post('/api/phone_code',{
        phone,
    })
}
/**
 * 用户登录
 * @param params {phone & code}
 */
const userLogin = (params) => {
    return http.post('/api/login',{
        ...params,
    })
}
/**
 * 获取用户信息
 * @returns {*}
 */
const queryUserInfo = () => {
    return http.get('/api/user_info');
}

/**
 * 添加收藏
 * @param newsId {string | number}
 */
const reqAddCollection = (newsId) => {
    return http.post('/api/store',{
        newsId
    })
}
/**
 * 移除收藏
 * @param id {string | number} 要移除的id信息
 * @returns {*}
 */
const reqRemoveCollection = (id) => {
    return http.get('/api/store_remove', {
        params: {
            id
        }
    });
}

/**
 * 获取登陆者收藏夹列表
 * @returns {*}
 */
const queryCollection = () => {
    return http.get('/api/store_list');
}

/**
 * 上传图片
 * @param file 图片文件
 */
const upload = (file) => {
    let fm = new FormData();
    fm.append('file',file);
    return http.post('/api/upload',fm);
}

/**
 * 修改用户信息
 * @param info { { username:string,pic:string } }
 */
const reqChangeData = (info) => {
    return http.post('/api/user_update',{
        ...info,
    })
}

const api = {
    queryNewsNewest,
    queryNewsBefore,
    queryNewsInfo,
    queryStoryExtra,
    getPhoneCode,
    queryUserInfo,
    userLogin,
    reqAddCollection,
    reqRemoveCollection,
    queryCollection,
    upload,
    reqChangeData,
}
export default api;

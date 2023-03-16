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
 * @param id 新闻ID
 */
const queryStoryExtra = (id) => {
    return http.get('/api/story_extra',{
        params:{
            id,
        }
    })
}

const api = {
    queryNewsNewest,
    queryNewsBefore,
    queryNewsInfo,
    queryStoryExtra,
}
export default api;

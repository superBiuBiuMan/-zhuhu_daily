import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "@/api";
/* 获取用户信息 */
export const fetchUserDataAction = createAsyncThunk('fetch/fetchUserDataAction',async () => {
    const result = await api.queryUserInfo().catch(() => ({}))
    const { data } = result;
    //将作为payload值
    return data;
})
/* 获取收藏夹列表 */
export const fetchUserCollectionAction = createAsyncThunk('fetch/fetchUserCollectionAction',async() => {
    const result = await api.queryCollection().catch(() => ({}))
    const { data } = result;
    //将作为payload值
    return data;
})

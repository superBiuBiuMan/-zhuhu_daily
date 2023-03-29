import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "@/api";
export const fetchUserDataAction = createAsyncThunk('fetch/fetchUserDataAction',async () => {
    console.log(2)
    const result = await api.queryUserInfo().catch(() => ({}))
    const { data } = result;
    //将作为payload值
    return data;
})

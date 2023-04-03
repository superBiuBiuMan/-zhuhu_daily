import { createSlice} from "@reduxjs/toolkit";
import {
    fetchUserDataAction,
    fetchUserCollectionAction,
} from "./actions";
export const Info = {
    info:null,//用户信息
    favorite:null,//用户收藏夹的列表(用于计算收藏状态)

    //测试用例
    other:{
        name:'你好,测试'
    }
}

export const Base = createSlice({
    name:'base',
    initialState:() => {
        return Info;
    },
    reducers:{
        //测试用例
        userInfo: (state, action) => {
            console.log(state,action)
            state.other = {
                name:'我是新名称'
            }
        },
        //清空数据(用户信息和收藏夹列表)
        clearAllInfo: (state) => {
            state.info = null;
            state.favorite = null;
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchUserDataAction.fulfilled,(state, action) => {
                state.info = action?.payload ?? null;//存储用户信息
            })
            .addCase(fetchUserCollectionAction.fulfilled,(state,action) => {
                state.favorite = action?.payload ?? null;
            })
    }
})

export const BaseSliceAction = Base.actions;
export const BaseSliceReducer = Base.reducer;

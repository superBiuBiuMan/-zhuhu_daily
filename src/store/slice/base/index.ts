import { createSlice} from "@reduxjs/toolkit";
import {fetchUserDataAction} from "./actions";
export const Info = {
    info:null,
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
        //测试使用
        userInfo: (state, action) => {
            console.log(state,action)
            state.other = {
                name:'我是新名称'
            }
        }
    },
    extraReducers(builder){
        builder
            .addCase(fetchUserDataAction.fulfilled,(state, action) => {
                state.info = action?.payload ?? {};//存储用户信息
            })
    }
})

export const BaseSliceAction = Base.actions;
export const BaseSliceReducer = Base.reducer;

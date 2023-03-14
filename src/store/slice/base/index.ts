import { createSlice } from "@reduxjs/toolkit";

export const Info = {
    info:null,
}

export const Base = createSlice({
    name:'base',
    initialState:() => {
        return Info;
    },
    reducers:{

    }
})

export const BaseSliceAction = Base.actions;
export const BaseSliceReducer = Base.reducer;

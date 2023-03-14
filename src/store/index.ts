import { configureStore } from "@reduxjs/toolkit";
import { BaseSliceReducer } from "@/store/slice/base";

const Store = configureStore({
    reducer:{
        base:BaseSliceReducer,
    }
})

export default Store;

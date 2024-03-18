import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";


export let store = configureStore({
    reducer:{
        app:user
    }
})
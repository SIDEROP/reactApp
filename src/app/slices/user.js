import { createSlice,createAsyncThunk,nanoid } from "@reduxjs/toolkit";



export let userPost = createAsyncThunk("userPost",async(data,{rejectWithValue})=>{
    let res = await fetch("http://localhost:4000/v1/check",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })

    try {
        let newR = await res.JSON()
        return newR
    } catch (error) {
        return rejectWithValue(error)
    }
})


let user = createSlice({
    name:"user",
    initialState:{
        user:false,
        login:false,
        userData:[]
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(userPost.fulfilled, (state, action) => {
            if (action.payload) {
                state.user =  false
            }
        })
        .addCase(userPost.rejected,(state,action)=>{
           if (action.payload) {
            state.user = true
           }
        })
    }
})


export default user.reducer
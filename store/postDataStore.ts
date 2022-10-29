import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostDate } from "../utils/customDate";
import type { RootState } from "./store";

export type PostData = {
    title:string;
    date:Date;
    url:string;
    summary:string;
    readingTime:string;
    text:string;
    id:number | string
}

export type PostDataState = {
    data: PostData[]
}

const initialState = {
    data :[] as unknown as PostData[]
}

export const postDateSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        setData : (state,action: PayloadAction<PostData[]>)=>{
            state.data = action.payload
        }
    }
})

export const {setData} = postDateSlice.actions;

export const postData = (state:RootState) => state.posts.data;

export default postDateSlice.reducer
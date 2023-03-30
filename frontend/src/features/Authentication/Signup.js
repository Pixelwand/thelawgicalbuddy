import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: "Name", content: "Hello" },
    {id:'2', title:"Yes", content:"trues"}
]

const signupSlice = createSlice({
    name: "posts",
    initialState,
    reducer:{}
})

export default signupSlice.reducer;
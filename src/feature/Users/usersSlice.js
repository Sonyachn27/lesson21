import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id: '0', name: "Anakin Skywalker", nickname: "@dart_vader", photo:"https://i.pinimg.com/736x/eb/c3/48/ebc348d81886de5912ac88c4c8dd6725.jpg", },
    {id: '1', name: "Leia Skywalker", nickname: "@leia_skywalker", photo: "https://images.photowall.com/products/62286/princess-leia-carrie-fisher.jpg?h=699&q=85",},
    {id: '2', name: "Han Solo", nickname: "@han_solo", photo:  "https://assets.gq.ru/photos/5d9f5df24cebd3000809e6d7/16:9/w_2560%2Cc_limit/anons.jpg"},

]
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer
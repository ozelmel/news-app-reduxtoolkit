import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "",
};

//? createSlice, redux state logic kısmını kısa yoldan tanımlamak için kullanılan bir metoddur.
//? slice: ismi, state'lerin başlangıç değerleri ve reducer'lar key-value yapısı şeklinde tanımlar.
//? reducer, state'i degistiren fonksiyonların yanında otomatik olarak action type'ların tanimlanmasini da sağlar.

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = "";
        },
    },
})


export const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer;
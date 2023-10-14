import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoginning: false,
    token: ''
}

const slice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token
            state.isLoginning = true
        }
    }
})

export const { loginSuccess } = slice.actions;
export default slice.reducer
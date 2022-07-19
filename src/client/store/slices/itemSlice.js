import { createSlice } from "@reduxjs/toolkit"
import { CreateItem, getAllItems, getItems } from "./itemActions"



const initialState = {
    items: [],
    success: false,
    loading: false
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
    extraReducers: {

        [CreateItem.fulfilled]: (state) => {
            state.success = true
        },
        [getItems.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.categories = payload
        },
        [getAllItems.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.categories = payload
        },
    },
})

export default itemSlice.reducer
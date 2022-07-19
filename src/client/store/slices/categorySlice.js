import { createSlice } from "@reduxjs/toolkit"
import { CreateCategory, getCategories } from "./categoryActions"



const initialState = {
    categories: [],
    success: false,
    loading: false
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: {

        [CreateCategory.fulfilled]: (state) => {
            state.success = true
        },
        [getCategories.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.categories = payload
        },
    },
})

export default categorySlice.reducer
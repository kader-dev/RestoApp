import { createSlice } from "@reduxjs/toolkit"
import { CreateNewCategory, getCategories } from "./categoryActions"



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

        [CreateNewCategory.fulfilled]: (state) => {
            state.success = true
        },
        [getCategories.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.categories = payload
        },
    },
})

export default categorySlice.reducer
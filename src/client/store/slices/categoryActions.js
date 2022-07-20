import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const CreateNewCategory = createAsyncThunk(
    'cat/create',
    async ({ name, user }, { rejectWithValue }) => {
        try {
            // const { userData } = getState()
            // const user = userData.userInfo._id
            console.log("ddd" + user._id)
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            await axios.post(
                'http://localhost:3000/category',
                { name, user },
                config
            )
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const getCategories = createAsyncThunk(
    'categories/all',
    async (userId, { getState, rejectWithValue }) => {
        try {
            const { user } = getState()
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(`http://localhost:3000/category/user/` + userId, {}, config)
            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
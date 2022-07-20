import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const CreateNewItem = createAsyncThunk(
    'item/create',
    async ({ name, description, price, category }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            await axios.post(
                'http://localhost:3000/item',
                { name, description, price, category },
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

export const getItems = createAsyncThunk(
    'items/all',
    async (catId, { getState, rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(`http://localhost:3000/item/cat/` + catId, {}, config)
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
export const getAllItems = createAsyncThunk(
    'items/all',
    async (catId, { getState, rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(`http://localhost:3000/item/all`, {}, config)
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
import { AppThunk, AppState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const ProductSlice = createSlice({
    name: 'product',

    initialState: {
        name: null
    },

    reducers: {
        setProductData: (state, action) => {
            state.name = action.payload.name;
        }
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', action.payload);

            if (!action.payload.product.name) {
                return state;
            }

            state.name = action.payload.product.name;
        }
    }
});

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/dummy')
    const dummy = await res.json()
    return dummy;
}

export const selectProduct = (state: AppState) => state.product;
export const fetchProduct =
    (): AppThunk =>
        async dispatch => {
            const timeoutPromise = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

            await timeoutPromise(1000);
            const res = await fetch('http://localhost:3000/api/dummy')
            const dummy = await res.json()
            dispatch(

                setProductData(dummy)
            );
        };
export const { setProductData } = ProductSlice.actions;
export default ProductSlice.reducer;
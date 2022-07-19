import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Action } from 'redux';
import productReducer from './slices/product';
import userReducer from './slices/userSlice';
import categoryReducer from './slices/categorySlice';
import itemReducer from './slices/itemSlice';

const makeStore = () => configureStore({
    reducer: {
        product: productReducer,
        user: userReducer,
        category: categoryReducer,
        item: itemReducer
    },
    devTools: true
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
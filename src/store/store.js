import { configureStore } from '@reduxjs/toolkit';
import {  applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

import cartReducer  from '../reducers/cartReducer/cartReducer'

export default configureStore({
    reducer: {
        cart: cartReducer
    }
})
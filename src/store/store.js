import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from '../reducers/cartReducer/cartReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
console.log(composedEnhancer , "composedEnhancer")
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from '../reducers/cartReducer/cartReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});

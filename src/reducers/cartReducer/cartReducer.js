import { createSlice } from '@reduxjs/toolkit';


export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        products:[],
        totalInCart:{}
       
    },
    reducers: {
        increment: (state,action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.cartItems =action.payload
        },
        removeitem: (state,action) => {
            return state
        },
        setCartInfo: (state, action) => {
            state.cartItems = action.payload
        },
        productsfetch: (state, action)=>{
            state.products = action.payload
        },
        totalInCartItems: (state, action) => {
            state.totalInCart = action.payload
        }
    }
})

export const { increment, removeitem, setCartInfo } = CartSlice.actions

export default CartSlice.reducer
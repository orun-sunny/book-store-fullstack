import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    cartItems: [],

}
const cartSlice = createSlice({


    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if (!existingItem) {
                state.cartItems.push(action.payload);
                alert('Item added to cart');
            } else (
                alert('Item already in cart')
            )
        }

    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

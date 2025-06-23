import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            let newCart = [...state.items];
            let itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                newCart.splice(itemIndex, 1);
            } else {
                console.log(`Can't remove product (id: ${action.payload.id}) as its not in the cart!`)
            }
            state.items = newCart;
        },
        emptyCart: (state) => {
            state.items = [];
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, emptyCart, removeFromCart } = cartSlice.actions
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsById = (state, id) => state.cart.items.find(item => item.id === id);
export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total = total + item.price, 0);
export default cartSlice.reducer
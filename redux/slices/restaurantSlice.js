import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurants: null,
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurants = action.payload.restaurants
        },
    },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions
export const selectRestaurant = (state) => state.restaurant.restaurants
export default restaurantSlice.reducer
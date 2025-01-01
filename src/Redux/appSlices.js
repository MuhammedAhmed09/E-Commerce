import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: [],

}

export const appSlices = createSlice({
    name : "App",
    initialState,


    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if(!item){
                state.products.push(action.payload);
            } else {
                item.quantity += action.payload.quantity
            }
        },

        inCrement: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            item.quantity++
        },

        deCrement: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload);
            {item.quantity === 1  ? item.quantity = 1 : item.quantity--}
        },

        Removeitem: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
    }

})

export const { addToCart, inCrement, deCrement, Removeitem} = appSlices.actions;
export default appSlices.reducer;
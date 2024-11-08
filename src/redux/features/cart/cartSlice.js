import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    cartItems:[]
} 
  
 const cartSlice = createSlice({
    name: 'cart',
    initialState:initialState,
    reducers:{
addToCart:(state,action)=>{

const existingItem=state.cartItems.find(item=>item._id === action.payload._id)

if(!existingItem){
    state.cartItems.push(action.payload)
    alert(`${action.payload.title} added to the cart`)
}
else{
    return alert(`${action.payload.title} already in the cart`)
}

},

removeCart: (state, action) => {
    state.cartItems =  state.cartItems.filter(item => item._id !== action.payload._id)
},
clearCart: (state) => {
    state.cartItems = []
},
    }

})


export const {addToCart,clearCart,removeCart }=cartSlice.actions;
export default cartSlice.reducer;
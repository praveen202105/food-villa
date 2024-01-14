import { createSlice } from "@reduxjs/toolkit"
// import rating from "../utils/"
const findsum =()=>{
  return 1000;
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:[],
  },
  reducers:{
    addItem:(state,action) =>{
        state.items.push(action.payload);
    },
    clearCart:(state)=>{
        state.items=[];   
    },
    removeItem:(state,action)=>{
      // console.log(action.payload)
      // console.log(state.items.findIndex((obj)=>obj.id === action.payload));
        state.items.splice(state.items.findIndex((obj)=>obj.id === action.payload), 1);
        // state.items.pop();)
    },
    getCount:(state,action)=>{
       state.items.getCount(state.items.findIndex((obj)=>obj.id === action.payload))
    }
  },

});

export const {addItem,clearCart,removeItem}=cartSlice.actions; 
 
export default cartSlice.reducer;
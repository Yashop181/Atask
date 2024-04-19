import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    cart:[],
}

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:initialState,
    reducers:{
        addtocart:(state, action)=>{
            var myitem = state.cart.filter((key)=>key.id===action.payload.id);
            if(myitem.length>=1)
            {
                alert("Already in cart");
            }
            else{
                state.cart.push(action.payload);
            }
        },
        qtyIncrease:(state,action)=>{
            for(var i=0;i<state.cart.length;i++)
            {
                if(state.cart[i].id===action.payload.id)
                {
                    state.cart[i].quantity++;
                }
            }
        },



    }

})

export const {addtocart,qtyIncrease } = cartSlice.actions;
export default cartSlice.reducer;

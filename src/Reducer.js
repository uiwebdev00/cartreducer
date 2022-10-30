import React from 'react'
import { useReducer } from 'react'
import { CartState } from './App';

export const ACTION = {

    ADDTOCART: 'add',
    REMOVEFROMCART: 'remove',
    CHANGECARTQUANTITY: 'changequantity'
}

// console.log(CartState())
export default function reduce(total, action) {
    
    switch (action.type) {
        case ACTION.ADDTOCART: return ( [...total,{product:action.payload.product,quantity:action.payload.quantity}])
        case ACTION.REMOVEFROMCART : return (total.filter(item=>item.product.id !== action.payload.product.id))
        case ACTION.CHANGECARTQUANTITY :return(total.map(cart => {
            if(cart.product.id ===action.payload.product.id){
                console.log("cart=>",cart)
                return {...cart,quantity:action.payload.quantity }

            }
            return cart
        }))
    }

}



import React, { useReducer } from 'react';

//Reducer Function
const cartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                items:[...state.items,action.payload],
                total:state.total+action.payload.price
            }
        case 'REMOVE_FROM_CART':
            const removeItem=state.items[action.payload];
            return {
                items:state.items.filter((item,index)=>index!=action.payload),
                total:state.total-removeItem.price
            }
        default:
            return state;
    }
}
function ShoppingCart() {
    const [cart,dispatch]= useReducer(cartReducer,{items:[],total:0});
    return ( <div>
        <h2>Shopping Cart</h2>
        <ul>
            {
                cart.items.map((item,index)=>(
                    <li key={index}>
                        {item.name}-{item.price}
                        <button onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:index})}>
                            remove
                        </button>
                    </li>
                ))
            }
        </ul>
        <p>Total:{cart.total}</p>
        <button onClick={()=>dispatch({type:'ADD_TO_CART',payload:{name:'LENOVO ThinkPad',price:76543}})}>
            LENOVO THINKPad
        </button>
        <button onClick={()=>dispatch({type:'ADD_TO_CART',payload:{name:'i phone 15',price:123900}})}>
           I Phone 15 Pro
        </button>
        <button onClick={()=>dispatch({type:'ADD_TO_CART',payload:{name:'Boat EarPods',price:4356}})}>
           Boat EarPods
        </button>
    </div> );
}

export default ShoppingCart;
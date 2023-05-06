import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style.css";

export default function Cart() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const cartProducts = selector.cartProducts;

    function incrementProducts(id) {
        dispatch({type:"INCREMENT_PRODUCT",payload:{id,increment:1}}
        )
    } 

    function removeItem (id){
        dispatch({type:"REMOVE_FROM_CART", payload: id})
    }

    function decrementProducts(id,incart) {
        incart <= 1 ? removeItem(id) : dispatch({type:"DECREMENT_PRODUCT",payload:{id, increment: 1}})
    }

    return(
        <div className="cart">
            {cartProducts.length > 0 ? cartProducts.map(item => 
                <div className="cartItem">
                    <div className="cartItemImg">
                        <img src={item.image} alt=""/>
                    </div> 

                    <div className="cartItemInfo">
                        <h1>{item.name}</h1>
                        <span>Color: {item.color}</span>
                    </div>

                    <div className="cartItemQuantity"> 
                        <button onClick={() => incrementProducts(item.id)}>+</button>
                        <span>{item.incart}</span>
                        <button onClick={() => decrementProducts(item.id,item.incart)}>-</button>
                    </div> 

                    <div className="cartItemPrice">
                        <h3>{item.price}$</h3>
                        <span>Total: {item.price * item.incart}$</span>
                    </div>

                     <div className="removeCartItem">
                        <button onClick={() => removeItem(item.id)}>
                        <img src="https://img.icons8.com/color/48/000000/delete-forever.png"/>
                        </button>
                    </div>
                </div>
            ): <h2>Cart Is Empty</h2>}
        </div>
        
    )
}
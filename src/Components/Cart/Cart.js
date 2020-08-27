import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,crs)=>total + crs.price,0);
    return (
        <div>
            <div className="card">
                <div className="card-header text-center">
                    <h3>Order Summery</h3>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Course: {cart.length}</li>
                    <li className="list-group-item">price: ${total}</li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;
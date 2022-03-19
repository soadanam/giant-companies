import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log('Cart Props:', props);

    const revenueReducer = (previous, current) => previous + current.revenue;
    const total = props.cart.reduce(revenueReducer, 0);
    
    // const randomNumber2 = () => Math.random();

    return (
        <div className='cart-main-div'>
            <h3>Calculation!</h3>
            <p> <i className="fa-solid fa-building-circle-check"></i> Companies: {props.cart.length} </p>
            <p>Stock Price: ${props.stock.toFixed(2)} </p>
            <p>Total revenue: {total.toFixed(2)} (billion USD) </p>

            {/* {
                props.cart.map(x => <img src={x.imgURL} key={randomNumber2()} className='cart-image' alt=''/>)
            } */}
        </div>
    );
};

export default Cart;
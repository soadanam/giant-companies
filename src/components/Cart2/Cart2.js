import React, { useState } from 'react';
import './Cart2.css'

const Cart2 = (props) => {
    // console.log('cart2 props:', props.cartKeys);

    const objects = props.cartKeys;

    let revenueSum = 0;
    let stockSum = 0;
    let counter = 0;
    let imgUrl;
    let allUrl = [];

    for (let x in objects) {
        const revenue = objects[x].revenue;
        revenueSum = revenueSum + revenue;

        const stock = objects[x].stockPrice;
        stockSum += stock;

        imgUrl = objects[x].imgURL;
        allUrl.push(imgUrl);

        counter++;
    };

    const randomNumber = () => Math.random();

    return (
        <div className='cart2-container'>
            <p>Companies: {counter}</p>
            <p>Stock Price: {stockSum.toFixed(2)}</p>
            <p>Total Revenue: {revenueSum.toFixed(2)} </p>

            <h6>Previously added:</h6>
            
            <div className="image-div">
                {
                    allUrl.map(x => <img src={x} alt="" className='cart2-image' key={randomNumber()} />)
                }
            </div>
        </div>
    );
};

export default Cart2;
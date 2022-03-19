import React from 'react';
import './CartImage.css'

const CartImage = (props) => {
    // console.log('CartImage Props:', props);

    const { imgURL, name } = props.cart;

    return (
        <div className='cartImage-container'>
            <div className='cart-image'>
                <img src={imgURL} alt="" />
            </div>
            <div className='cart-name'>
                <h6>{name}</h6>
                <button onClick={()=>props.handleCross(props.cart)} className='cross-button'><i className="fa-solid fa-square-xmark"></i></button>
            </div>
            

            {/*  <div className='cart-image'>
                    {
                        props.cart.map(x => <img src={x.imgURL} alt='' />)
                    }
                </div>
            </div> */}
        </div>
    );
};

export default CartImage;
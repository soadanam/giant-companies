import React, { useState } from 'react';
import './Companies.css'
const Companies = (props) => {
    // console.log('Companies Props:', props);

    const { name, founder, CEO, about, stockPrice, revenue, imgURL, headquarters } = props.company;

    //to disable buttons after clicking once
    const [disable, setDisable] = React.useState(false);

    return (
        <div className='company'>
            <div className='image-section'>
                <img src={imgURL} alt="" />
                <div className='first-letter'>
                    <h1>{about.slice(0, 1)}</h1>
                </div>
            </div>
            <div className='info-section'>
                <h2 className='name'>{name}</h2>
                <p className='about'>{about.slice(0, 144)}</p>
                <div>
                    <h5 className='founder'>Founder: {founder}</h5>
                </div>
                <h6 className='stock'>Stock Price: ${stockPrice}</h6>
                <h6>Revenue: {revenue} billion USD </h6>
                <h6 className='headquarters'>Headquarters: {headquarters}</h6>

                {/* <button onClick={() => {props.handleAddButton(props.company); setDisable(true); props.addToLocalStorageCart(props.company); }} disabled={disable} className='btn btn-secondary common-add-button'> <i className="fa-solid fa-calculator"></i> Add To Calculate</button> */}

                <button onClick={() => {
                    props.handleAddButton(props.company); setDisable(true); props.setLocalKeys(props.company); }} disabled={disable} className='btn btn-secondary common-add-button'> <i className="fa-solid fa-calculator"></i> Add To Calculate</button>

                <div className='icons'>
                    <a href="https://www.facebook.com/">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.programming-hero.com/">
                        <i className="fa-solid fa-globe"></i>
                    </a>
                    <a href="https://twitter.com/?lang=en">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Companies;
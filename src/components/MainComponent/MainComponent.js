import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainComponent.css';
import Companies from '../Companies/Companies';
import Cart from '../Cart/Cart';
import CartImage from '../CartImage/CartImage';
import Cart2 from '../Cart2/Cart2';


const MainComponent = () => {

    ///////main "useState" & "useEffect" to collect all the data/////
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        fetch('./realData.json')
            .then(res => res.json())
            .then(data => {
                setCompanies(data)
                setDisplayCompanies(data)
                setTimeout(setLocalKeys, 2000)
            })
    }, []);


    ///////sending array of objects to the "Cart" & "CartImage" Components with the help of those functions and hook//////
    const [cart, setCart] = useState([]);
    // console.log('Cart is:', cart);
    const handleAddButton = (props) => {
        // console.log('handleButton:',props);
        const newObject = [...cart, props];
        // console.log('NEWObj', newObject);
        setCart(newObject);
    };
    ////to remove the clicked element from the cart
    const handleCross = (props) => {
        const remaining = cart.filter(x => x.id !== props.id);
        setCart(remaining);
    };


    ////to generate UNIQUE values for the 'key' of Components////
    const randomNumber = () => Math.random();
    // console.log('ranNum:', randomNumber())

    ///simple Stock calculation by 'reduce'//
    const stockReducer = (previous, current) => previous + current.stockPrice;
    const totalStock = cart.reduce(stockReducer, 0);


    ///////// Search functionality Implementation (within results)//////////
    const [displayCompanies, setDisplayCompanies] = useState([]);

    const handleFilteredInput = (e) => {
        const inputText = e.target.value;
        // console.log('Input Value:', inputText);

        const matchedCompany = companies.filter(x => x.name.toLowerCase().includes(inputText.toLowerCase()));
        // console.log('Matched?:', matchedCompany);
        setDisplayCompanies(matchedCompany);

        // e.target.value = ''; // no use of 'onChange', but 'onClick'!
    };



    ///////getting data from localStorage//////
    const getLocalKeys = () => {
        const keys = localStorage.getItem('companyKey');
        // console.log('keys:', keys);

        let localKeys;
        if (keys) {
            localKeys = JSON.parse(keys);
        }
        else {
            localKeys = {};
        };

        return localKeys;
    };
    ////getting data from getLocalKeys and putting them in a state//// 
    const [cartKeys, setCartKeys] = useState([]);
    // console.log('cartKeys:', cartKeys);
    const loadLocalKeys = () => {
        const keys = getLocalKeys();
        setCartKeys(keys);
        // console.log('load keys:', keys);
    };
    /////setting data if any item is clicked/////
    const setLocalKeys = (props) => {
        // console.log('setLocalKeys props', props);
        const keys = getLocalKeys();

        if (props) {
            keys[props.name] = props;
            const keysStringified = JSON.stringify(keys);
            localStorage.setItem('companyKey', keysStringified);
        }
        else {
        }

        loadLocalKeys();
    };
    // setLocalKeys();
    // setTimeout(setLocalKeys, 5000);
    // clearTimeout(mySetTimeOut);

    //////conditional function call //////
    
    //2//  
    // const localData = getLocalKeys();
    // console.log('local::', localData);
   /*  if(localData){
        setTimeout(setLocalKeys, 5000);
    }
    */

    //2//
    // localData && setTimeout(setLocalKeys, 5000);


    //const localData = cartKeys;
    console.log('local::', cartKeys);
    // let stop;
    // if(cartKeys.length === 0){
    //     stop = setTimeout(setLocalKeys, 1000);
    // }
    // else if(cartKeys.length !== 0){
    //     clearTimeout(stop);
    // }




    return (
        <div className='main-container'>

            <div className='search-div'>
                <div className='input-group container inputButtonDiv'>
                    <input onChange={handleFilteredInput} className="form-control inputButton" type="text" placeholder='Search company..' />
                    <button className="btn btn-outline-secondary button" type="button">Search</button>
                </div>
            </div>
            <div className='budget-section'>
                <div>
                    <h2>Buy any Company..</h2>
                    <p>As you're the richest person in the world who can afford anything!</p>
                    <h2>Total Budget: 1 Trillion</h2>
                </div>
            </div>

            <div className='main-component'>
                <div className='container companies'>
                    {
                        displayCompanies.map(company => <Companies company={company} key={company.id} handleAddButton={handleAddButton} setLocalKeys={setLocalKeys}></Companies>)
                    }
                </div>
                <div className='cart-container'>
                    <div className='cart-section'>
                        <Cart cart={cart} stock={totalStock}></Cart>
                        <h5 className='added'>Added:</h5>
                        {
                            cart.map(cart => <CartImage cart={cart} key={randomNumber()} handleCross={handleCross}></CartImage>)
                        }
                    </div>
                </div>
                <div className="cart2-container">
                    <Cart2 cartKeys={cartKeys}></Cart2>
                </div>
            </div>
            <div className="footer-div">
                <h2 className='footer'>Footer</h2>
                <p className='copy'>&copy; Soad Aanm Sun</p>
            </div>
        </div>
    );
};

export default MainComponent;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// import { commerce } from '../commerce'

import logo from '../images/logo.png'

const Navigation = () => {
    // const [productsList, setProductsList] = useState([])
    // const [shoppingCartList, setShoppingcartList] = useState({})

    // useEffect(() => {
    //     commerce.products.list().then((products) => {
    //         setProductsList(products.data)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    
    //     commerce.cart.retrieve().then((cart) => {
    //         setShoppingcartList(cart)
    //     })

    //     console.log('change happened')
    // }, [])

    function log(e) {
        console.log(e)
    }

    return (
        <React.Fragment>
            <nav className="navigation-bar">
                <div className="logo-container">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <img src={logo} alt="gitMusic Logo" />
                    </Link>
                </div>
                <div className="navigation-links-container">
                    <div className="navigation-bar-left">
                        <Link to='/shopall' style={{ textDecoration: 'none' }} onClick={e => log(e)}>
                            <h3 className="navigation-link">Shop All</h3>
                        </Link>
                        <Link to='/hiphop' style={{ textDecoration: 'none' }}>
                            <h3 className="navigation-link">Hip-Hop</h3>
                        </Link>
                        <Link to='/pop' style={{ textDecoration: 'none' }}>
                            <h3 className="navigation-link">Pop</h3>
                        </Link>
                        <Link to='/rock' style={{ textDecoration: 'none' }}>
                            <h3 className="navigation-link">Rock</h3>
                        </Link>
                        <Link to='/jazz' style={{ textDecoration: 'none' }}>
                            <h3 className="navigation-link">Jazz</h3>
                        </Link>
                    </div>
                    <div className="navigation-bar-right">
                        <div className='cart-container'>
                            <Link to='/cart' style={{ color: 'black' }}>
                                <i className="fas fa-shopping-cart fa-2x"></i>
                            </Link>
                            <span className='cart-amount'> 0</span>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navigation
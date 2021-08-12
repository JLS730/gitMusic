import React from 'react'

import shopNowImage from '../../images/homepage-1.jpeg'

const ShopNow = () => {
    console.log(window.innerWidth)

    return (
        <main className="shop-now-section">
            <div className="shop-now-container">
                <img src={shopNowImage} alt="Stack of records" className='shop-now-image' />
                <div className="shop-now-text-container">
                    <h2 className="shop-now-main-text">MUSIC TO YOUR EARS</h2>
                    <h3 className="shop-now-secondary-text">Browse through our collection.</h3>
                    <button className="shop-now-button">Shop Now</button>
                </div>
            </div>
        </main>
    )
}

export default ShopNow
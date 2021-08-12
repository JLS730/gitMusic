import React from 'react'
import { Link } from 'react-router-dom'

import ourPicksImage0 from '../../images/album-art/album0.jpg'
import ourPicksImage1 from '../../images/album-art/album1.jpg'
import ourPicksImage2 from '../../images/album-art/album2.jpg'
import ourPicksImage3 from '../../images/album-art/album3.jpg'

const OurPicks = () => {
    return (
        <section className="our-picks-section">
            <div className="our-picks-container">
                <h2 className="our-picks-main-text">POP PICKS</h2>
                <div className="our-picks-grid-container">
                    <div className="grid-info-1">
                        <h3 className="grid-info-1-artist">Michael Jackson</h3>
                        <h2 className="grid-info-1-artist">Thriller</h2>
                        <Link to='/pop'>
                            <button className="grid-info-1-buy-now-button">Buy Now</button>
                        </Link>
                    </div>
                    <img src={ourPicksImage0} alt="" className='our-picks-grid-image'/>
                    <div className="our-picks-grid-image-container">
                        <img src={ourPicksImage2} alt="" className='our-picks-image-stack stack-image-1'/>
                        <img src={ourPicksImage3} alt="" className='our-picks-image-stack stack-image-2'/>
                        <img src={ourPicksImage1} alt="" className='our-picks-image-stack stack-image-3'/>
                    </div>
                    <div className="grid-info-2">
                        <h3 className="grid-info-1-artist">We Have What You Need</h3>
                        <h2 className="grid-info-1-artist">And More</h2>
                        <Link to='/shopall'>
                            <button className="grid-info-1-buy-now-button">Shop All</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPicks
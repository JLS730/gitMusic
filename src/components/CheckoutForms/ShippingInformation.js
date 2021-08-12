import React, { useRef } from 'react'

import { useHistory } from 'react-router'

import Footer from '../Homepage/Footer'

const ShippingInformation = () => {
    const nameRef = useRef(null)
    const addressRef = useRef(null)
    const cityRef = useRef(null)
    const zipRef = useRef(null)

    let history = useHistory()

    function handlePurchase(e) {
        e.preventDefault()

        if(nameRef.current.value === '' ||
            addressRef.current.value === '' ||
            cityRef.current.value === '' ||
            zipRef.current.value === ''
        ) {
            if(nameRef.current.value === '') {
                nameRef.current.nextElementSibling.style.visibility = 'visible'
            } else {
                nameRef.current.nextElementSibling.style.visibility = 'hidden'
            }

            if(addressRef.current.value === '') {
                addressRef.current.nextElementSibling.style.visibility = 'visible'
            } else {
                addressRef.current.nextElementSibling.style.visibility = 'hidden'
            }

            if(cityRef.current.value === '') {
                cityRef.current.nextElementSibling.style.visibility = 'visible'
            } else {
                cityRef.current.nextElementSibling.style.visibility = 'hidden'
            }

            if(zipRef.current.value === '') {
                zipRef.current.nextElementSibling.style.visibility = 'visible'
            } else {
                zipRef.current.nextElementSibling.style.visibility = 'hidden'
            }
        } else {
            history.push('/confirm')
        }
    }

    return (
        <React.Fragment>
            <main className="form-section">
                <form action="" className="shipping-form">
                    <div className="form-name-container form-containers">
                        <label htmlFor="form-name">Name</label>
                        <input type="text" id="form-name" name='form-name' ref={nameRef}/>
                        <h5 className="name-empty">* Please Enter A Name</h5>
                    </div>
                    
                    <div className="form-adrress-container form-containers">
                        <label htmlFor="form-adrress">Address</label>
                        <input type="text" id="form-adrress" name='form-address' ref={addressRef}/>
                        <h5 className="address-empty">* Please Enter An Address</h5>
                    </div>

                    <div className="form-country-container form-containers">
                        <label htmlFor="form-country">Country</label>
                        <select name="form-country" id="form-country">
                            <option value="us">United States</option>
                        </select>
                    </div>

                    <div className="form-city-container form-containers">
                        <label htmlFor="form-city">City</label>
                        <input type="text" id="form-city" name='form-city' ref={cityRef}/>
                        <h5 className="city-empty">* Please Enter A City</h5>
                    </div>

                    <div className="form-state-container form-containers">
                        <label htmlFor="form-state">State / Province / Region</label>
                        <select name="form-state" id="form-state">
                        <option value="al">Alabama</option>
                            <option value="ak">Alaska</option>
                            <option value="az">Arizona</option>
                            <option value="ar">Arkansas</option>
                            <option value="ca">California</option>
                            <option value="co">Colorado</option>
                            <option value="ct">Connecticut</option>
                            <option value="de">Delaware</option>
                            <option value="fl">Florida</option>
                            <option value="ga">Georgia</option>
                            <option value="hi">Hawaii</option>
                            <option value="id">Idaho</option>
                            <option value="il">Illinois</option>
                            <option value="in">Indiana</option>
                            <option value="ia">Iowa</option>
                            <option value="ks">Kansas</option>
                            <option value="ky">Kentucky</option>
                            <option value="la">Louisiana</option>
                            <option value="me">Maine</option>
                            <option value="md">Maryland</option>
                            <option value="ma">Massachusetts</option>
                            <option value="mi">Michagan</option>
                            <option value="mn">Minnesota</option>
                            <option value="ms">Mississippi</option>
                            <option value="mo">Misssouri</option>
                            <option value="mt">Montana</option>
                            <option value="ne">Nebraska</option>
                            <option value="nv">Nevada</option>
                            <option value="nh">New Hampshire</option>
                            <option value="nj">New Jersey</option>
                            <option value="nm">New Mexico</option>
                            <option value="ny">New York</option>
                            <option value="nc">North Carolina</option>
                            <option value="nd">North Dakota</option>
                            <option value="oh">Ohio</option>
                            <option value="ok">Oklahoma</option>
                            <option value="or">Oregon</option>
                            <option value="pa">Pennsylvania</option>
                            <option value="ri">Rhode Island</option>
                            <option value="sc">South Carolina</option>
                            <option value="sd">South Dakota</option>
                            <option value="tn">Tennessee</option>
                            <option value="tx">Texas</option>
                            <option value="ut">Utah</option>
                            <option value="vt">Vermont</option>
                            <option value="va">Virginia</option>
                            <option value="wa">Washington</option>
                            <option value="wv">West Virginia</option>
                            <option value="wi">Wisconsin</option>
                            <option value="wy">Wyoming</option>
                            <option value="dc">District of Colombia</option>
                            <option value="as">American Samoa</option>
                            <option value="gu">Guam</option>
                            <option value="mp">Nothern Mariana Islands</option>
                            <option value="pr">Puerto Rico</option>
                            <option value="um">US Minor Outlying Islands</option>
                            <option value="vi">US Virgin Islands</option>
                        </select>
                    </div>

                    <div className="form-zip-container">
                        <label htmlFor="form-zip">Zip Code</label>
                        <input type="text" id="form-zip" className='form-zip' name='form-zip' ref={zipRef}/>
                        <h5 className="zip-empty">* Please Enter A Zip-Code</h5>
                    </div>
                    
                    <button type='submit' className="purchase-button" onClick={handlePurchase}>Purchase</button>
                    
                </form>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default ShippingInformation
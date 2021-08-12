import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router'

import { commerce } from '../commerce'

import Footer from '../Homepage/Footer'

const ShoppingCart = () => {
    const [productsList, setProductsList] = useState([])
    const [shoppingCartList, setShoppingcartList] = useState({})
    const [renderSwitch, setRenderSwitch] = useState(false)
    
    const shopAllSectionRef = useRef(null)
    const mainCartNumberRef = useRef(null)
    const shoppingCartRef = useRef(null)

    let history = useHistory()

    
    useEffect(() => {
        const cartNumber = shopAllSectionRef.current.previousSibling.children[1].childNodes[1].firstChild.childNodes[1]
        
        commerce.products.list().then((products) => {
            setProductsList(products.data)
        }).catch((error) => {
            console.log(error)
        })
    
        commerce.cart.retrieve().then((cart) => {
            setShoppingcartList(cart)
        })

        if(shopAllSectionRef.current === null) {
            return
        } else {
            cartNumber.textContent = shoppingCartList.total_unique_items
            mainCartNumberRef.current.textContent = shoppingCartList.total_unique_items
        }
    }, [renderSwitch, shoppingCartList.total_unique_items])

    function removeFromCart(e) {
        switch(true) {
            case e.target.classList.contains(productsList[0].permalink):
                handleRemoveItem(shoppingCartList.line_items[e.target.classList[2]].id)
                break
            case e.target.classList.contains(productsList[1].permalink):
                handleRemoveItem(shoppingCartList.line_items[e.target.classList[2]].id)
                break
            case e.target.classList.contains(productsList[2].permalink):
                handleRemoveItem(shoppingCartList.line_items[e.target.classList[2]].id)
                break
            case e.target.classList.contains(productsList[3].permalink):
                handleRemoveItem(shoppingCartList.line_items[e.target.classList[2]].id)
                break
            case e.target.classList.contains(productsList[4].permalink):
                handleRemoveItem(shoppingCartList.line_items[e.target.classList[2]].id)
                break
            case e.target.classList.contains(productsList[5].permalink):
                handleRemoveItem(shoppingCartList.line_items[e.target.classList[2]].id)
                break
            case e.target.classList.contains(productsList[6].permalink):
                handleRemoveItem(shoppingCartList.line_items[e.target.classList[2]].id)
                break
            case e.target.classList.contains(productsList[7].permalink):
                handleRemoveItem(shoppingCartList.line_items[e.target.classList[2]].id)
                break
            case e.target.classList.contains(productsList[8].permalink):
                handleRemoveItem(shoppingCartList.line_items[e.target.classList[2]].id)
                break
            case e.target.classList.contains(productsList[9].permalink):
                handleRemoveItem(shoppingCartList.line_items[e.target.classList[2]].id)
                break
            default:
                return
        }
    }
    
    function increaseQuantity(e) {
        switch(true) {
            case e.target.classList.contains(productsList[0].permalink):
                handleIncreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity + 1
                )
                break
            case e.target.classList.contains(productsList[1].permalink):
                handleIncreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity + 1
                )
                break
            case e.target.classList.contains(productsList[2].permalink):
                handleIncreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity + 1
                )
                break
            case e.target.classList.contains(productsList[3].permalink):
                handleIncreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity + 1
                )
                break
            case e.target.classList.contains(productsList[4].permalink):
                handleIncreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity + 1
                )
                break
            case e.target.classList.contains(productsList[5].permalink):
                handleIncreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity + 1
                )
                break
            case e.target.classList.contains(productsList[6].permalink):
                handleIncreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity + 1
                )
                break
            case e.target.classList.contains(productsList[7].permalink):
                handleIncreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity + 1
                )
                break
            case e.target.classList.contains(productsList[8].permalink):
                handleIncreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity + 1
                )
                break
            case e.target.classList.contains(productsList[9].permalink):
                handleIncreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity + 1
                )
                break
            default:
                return
        }
    }
    
    function decreaseQuantity(e) {
        switch(true) {
            case e.target.classList.contains(productsList[0].permalink):
                handleDecreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity - 1
                )
                break
            case e.target.classList.contains(productsList[1].permalink):
                handleDecreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity - 1
                )
                break
            case e.target.classList.contains(productsList[2].permalink):
                handleDecreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity - 1
                )
                break
            case e.target.classList.contains(productsList[3].permalink):
                handleDecreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity - 1
                )
                break
            case e.target.classList.contains(productsList[4].permalink):
                handleDecreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity - 1
                )
                break
            case e.target.classList.contains(productsList[5].permalink):
                handleDecreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity - 1
                )
                break
            case e.target.classList.contains(productsList[6].permalink):
                handleDecreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity - 1
                )
                break
            case e.target.classList.contains(productsList[7].permalink):
                handleDecreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity - 1
                )
                break
            case e.target.classList.contains(productsList[8].permalink):
                handleDecreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity - 1
                )
                break
            case e.target.classList.contains(productsList[9].permalink):
                handleDecreaseQuantity(
                    shoppingCartList.line_items[e.target.classList[3]].id, shoppingCartList.line_items[e.target.classList[3]].quantity - 1
                )
                break
            default:
                return
        }
    }

    function handleRemoveItem(productID) {
        commerce.cart.remove(productID).then((item) => {
            setShoppingcartList({ cart: item.cart })
        }).catch((error) => {
            console.log(error)
        })

        setRenderSwitch(!renderSwitch)
    }

    function handleIncreaseQuantity(lineItemId, quantity ) {
        commerce.cart.update(lineItemId, { quantity }).then((item) => {
            setShoppingcartList({ cart: item.cart })
        }).catch((error) => {
            console.log(error)
        })
    }
    
    function handleDecreaseQuantity(lineItemId, quantity ) {
        commerce.cart.update(lineItemId, { quantity }).then((item) => {
            setShoppingcartList({ cart: item.cart })
        }).catch((error) => {
            console.log(error)
        })
    }

    function handleCheckout() {
        if(shoppingCartRef.current.childElementCount === 1) {
            alert('Shopping Cart Is Empty.')
        } else {
            history.push('/shipping')
        }
    }

    return (
        <React.Fragment>
            <main className="shopping-cart-section" ref={shopAllSectionRef}>
                <h2 className="shopping-cart-main-text">Shopping Cart ( <span className="main-cart-number" ref={mainCartNumberRef}>0</span> )</h2>
                <div className="shopping-cart" ref={shoppingCartRef}>
                    <div className="shopping-cart-header">
                        <h3 className="header-product">Product</h3>
                        <h3 className="header-title">Title</h3>
                        <h3 className="header-quantity">Quantity</h3>
                        <h3 className="header-remove">Remove</h3>
                    </div>

                    {shoppingCartList.line_items !== undefined && shoppingCartList.line_items.map((item, x) => {
                        return (
                            <div className="shopping-cart-products" key={x}>
                                <div className="shopping-cart-image-container">
                                    <img src={item.media.source} alt="" className='shopping-cart-image'/>
                                </div>
                                <h3 className='shopping-cart-title'>{item.product_name}</h3>
                                <div className="shopping-cart-quantity-container">
                                    <i className={`fas fa-arrow-circle-left ${item.permalink} ${x}`} onClick={e => decreaseQuantity(e)}></i>
                                    <h3 className="shopping-cart-quantity">{item.quantity}</h3>
                                    <i className={`fas fa-arrow-circle-right ${item.permalink} ${x}`} onClick={e => increaseQuantity(e)}></i>
                                </div>
                                <div className="shopping-cart-button-container">
                                    <button type='button' className={`shopping-cart-remove-button ${item.permalink} ${x}`} onClick={e => removeFromCart(e)}>REMOVE</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </main>
            <section className="total-section">
                <div className="total-container">
                    <h2 className="total">{shoppingCartList.subtotal !== undefined && shoppingCartList.subtotal.formatted_with_symbol}</h2>
                    <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default ShoppingCart
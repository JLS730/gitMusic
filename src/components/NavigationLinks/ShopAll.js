import React, { useRef, useState, useEffect } from 'react'

import Footer from '../Homepage/Footer'

import { albums } from '../data/albums.js'
import { commerce } from '../commerce'

const ShopAll = () => {
    const [productsList, setProductsList] = useState([])
    const [shoppingCartList, setShoppingcartList] = useState({})
    const [renderSwitch, setRenderSwitch] = useState(false)
    
    const shopAllSectionRef = useRef(null)
    const addToCartRef = useRef([])

    
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
        }
    }, [renderSwitch, shoppingCartList.total_unique_items])

    function addToCart(e) {
        switch(true) {
            case e.target.classList.contains(albums[0].tag):
                for(let i = 0; i < shoppingCartList.total_unique_items; i++) {
                    if(productsList[e.target.classList[2]].id === shoppingCartList.line_items[i].product_id) {
                        alert('Item Already In Cart')
                        return
                    }
                }
                
                handleAddToCart(productsList[0].id, 1)
                e.target.disabled = true
                break
            case e.target.classList.contains(albums[1].tag):
                for(let i = 0; i < shoppingCartList.total_unique_items; i++) {
                    if(productsList[e.target.classList[2]].id === shoppingCartList.line_items[i].product_id) {
                        alert('Item Already In Cart')
                        return
                    }
                }

                handleAddToCart(productsList[1].id, 1)
                e.target.disabled = true
                break
            case e.target.classList.contains(albums[2].tag):
                for(let i = 0; i < shoppingCartList.total_unique_items; i++) {
                    if(productsList[e.target.classList[2]].id === shoppingCartList.line_items[i].product_id) {
                        alert('Item Already In Cart')
                        return
                    }
                }
            
                handleAddToCart(productsList[2].id, 1)
                e.target.disabled = true
                break
            case e.target.classList.contains(albums[3].tag):
                for(let i = 0; i < shoppingCartList.total_unique_items; i++) {
                    if(productsList[e.target.classList[2]].id === shoppingCartList.line_items[i].product_id) {
                        alert('Item Already In Cart')
                        return
                    }
                }
            
                handleAddToCart(productsList[3].id, 1)
                e.target.disabled = true
                break
            case e.target.classList.contains(albums[4].tag):
                for(let i = 0; i < shoppingCartList.total_unique_items; i++) {
                    if(productsList[e.target.classList[2]].id === shoppingCartList.line_items[i].product_id) {
                        alert('Item Already In Cart')
                        return
                    }
                }
            
                handleAddToCart(productsList[4].id, 1)
                e.target.disabled = true
                break
            case e.target.classList.contains(albums[5].tag):
                for(let i = 0; i < shoppingCartList.total_unique_items; i++) {
                    if(productsList[e.target.classList[2]].id === shoppingCartList.line_items[i].product_id) {
                        alert('Item Already In Cart')
                        return
                    }
                }
            
                handleAddToCart(productsList[5].id, 1)
                e.target.disabled = true
                break
            case e.target.classList.contains(albums[6].tag):
                for(let i = 0; i < shoppingCartList.total_unique_items; i++) {
                    if(productsList[e.target.classList[2]].id === shoppingCartList.line_items[i].product_id) {
                        alert('Item Already In Cart')
                        return
                    }
                }
            
                handleAddToCart(productsList[6].id, 1)
                e.target.disabled = true
                break
            case e.target.classList.contains(albums[7].tag):
                for(let i = 0; i < shoppingCartList.total_unique_items; i++) {
                    if(productsList[e.target.classList[2]].id === shoppingCartList.line_items[i].product_id) {
                        alert('Item Already In Cart')
                        return
                    }
                }
            
                handleAddToCart(productsList[7].id, 1)
                e.target.disabled = true
                break
            case e.target.classList.contains(albums[8].tag):
                for(let i = 0; i < shoppingCartList.total_unique_items; i++) {
                    if(productsList[e.target.classList[2]].id === shoppingCartList.line_items[i].product_id) {
                        alert('Item Already In Cart')
                        return
                    }
                }
            
                handleAddToCart(productsList[8].id, 1)
                e.target.disabled = true
                break
            case e.target.classList.contains(albums[9].tag):
                for(let i = 0; i < shoppingCartList.total_unique_items; i++) {
                    if(productsList[e.target.classList[2]].id === shoppingCartList.line_items[i].product_id) {
                        alert('Item Already In Cart')
                        return
                    }
                }
            
                handleAddToCart(productsList[9].id, 1)
                e.target.disabled = true
                break
            default:
                return
        }
    }

    function handleAddToCart(productID, quantity) {
        commerce.cart.add(productID, quantity).then((item) => {
            setShoppingcartList({ cart: item.cart })
        }).catch((error) => {
            console.log(error)
        })

        setRenderSwitch(!renderSwitch)
    }

    return (
        <React.Fragment>
            <main className="all-sections" ref={shopAllSectionRef}>
                <h2 className="all-main-text">Shop All ( 10 )</h2>
                <div className="products-container">
                    {albums.map( (album, x) => {
                        return (
                            <div className="product" key={x}>
                                <img className="product-image" src={album.src} alt={`${album.title} album art`} />
                                <div className="product-info-container">
                                    <div className="product-info">
                                        <h3 className="product-artist">{album.artist}</h3>
                                        <h2 className="product-title">{album.title}</h2>
                                        <h3 className="product-year">{`Year Released: ${album.year}`}</h3>
                                        <h3 className="product-genre">{`Genre: ${album.genre}`}</h3>
                                    </div>
                                    <div className="product-price-cart-container">
                                        <h2 className="product-price">{`$${album.price}`}</h2>
                                        <button className={`product-add-to-cart ${album.tag} ${x}`} ref={(element) => addToCartRef.current[x] = element} onClick={e => addToCart(e)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default ShopAll
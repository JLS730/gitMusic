import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="column-1 footer-column">
                    <h2>Store</h2>
                    <h3>Hip-Hop</h3>
                    <h3>Pop</h3>
                    <h3>Rock</h3>
                    <h3>Jazz</h3>
                </div>
                <div className="column-2 footer-column">
                    <h2>Help</h2>
                    <h3>Shipping and Returns</h3>
                    <h3>Store Policy</h3>
                    <h3>Payment Methods</h3>
                    <h3>FAQ</h3>
                </div>
                <div className="column-3 footer-column">
                    <h2>Contact</h2>
                    <h3>123-456-7890</h3>
                    <h3>Lorem@ipsum.com</h3>
                    <div className="footer-social-container">
                        <i className="fab fa-instagram fa-2x"></i>
                        <i className="fab fa-facebook-f fa-2x"></i>
                        <i className="fab fa-twitter fa-2x"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
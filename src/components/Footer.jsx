import React from 'react'
import googlesvg from '../images/google.svg'
import appsvg from '../images/app.svg'

function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="footer__media">
                        <a href="" class="footer__link"><img src={googlesvg} alt="google play" /></a>
                        <a href="" class="footer__link"><img src={appsvg} alt="app store" /></a>
                    </div>
                    <p class="footer__text">© PROWEB. В целях обучения 2021</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
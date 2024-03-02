import React from 'react'
import logopng from '../images/logo.png'

function Navbar() {
    return (
        <div>
            <nav class="header__nav">
                <div class="container">
                    <a href="" class="header__logo">
                        <img src={logopng} alt="logo" />
                        <span>cinemas</span>
                    </a>
                    <ul class="header__list">
                        <li class="header__item"><a href="" class="header__link">Films</a></li>
                        <li class="header__item"><a href="" class="header__link">Serials</a></li>
                        <li class="header__item"><a href="" class="header__link">Cartoons</a></li>
                        <li class="header__item"><a href="" class="header__link">Collections</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
import { useState } from 'react';

import '../styles/header.css';

import ImgLogo from '../images/logo-bookmark.svg';
import ImgHero from '../images/illustration-hero.svg';
import ImgHamburger from '../images/icon-hamburger.svg';

function Header() {
    const [isOpenHamburger, setIsOpenHamburger] = useState(false);

    function changeHamburger(){
        setIsOpenHamburger(isOpenHamburger ? false : true);
    }

    return (
        <div className="headerContainer">
            <header>
                <div>
                    <img src={ImgLogo} alt=""/>
                </div>
                <div>
                    <ul className={isOpenHamburger ? 'hamburgerClicked' : ''}>
                        <li>FEATURES</li>
                        <li>PRICING</li>
                        <li>CONTACT</li>
                        <li className="listButton">LOGIN</li>
                    </ul>
                    <div className="hamburgerDiv" onClick={changeHamburger}>
                        <img src={ImgHamburger} alt=""/>
                    </div>
                </div>
            </header>
            <div className="heroContainer">
                <div className="heroContentContainer">
                    <h1>A Simple Bookmark Manager</h1>
                    <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="heroButtonContainer">
                        <button className="buttonChrome">
                            Get it on Chrome
                        </button>
                        <button className="buttonFirefox">
                            Get it on Firefox
                        </button>
                    </div>
                </div>
                <div className="heroImageContainer">
                    <div className="backgroundBlue"></div>
                    <img src={ImgHero} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Header;
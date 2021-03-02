import '../styles/footer.css';

import ImgLogo from '../images/logo-bookmark-footer.png';

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerTop">
                <p>35,000+ already joined</p>
                <h1>Stay up-to-date with what we’re doing</h1>
                <div className="footerForm">
                    <input type="text" placeholder="Enter you email address"/>
                    <button>Contact Us</button>
                </div>
            </div>
            <div className="footerBottom">
                <div className="navgation">
                    <img src={ImgLogo} alt=""/>
                    <ul>
                        <li>FEATURES</li>
                        <li>PRICING</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div className="redeSociais">
                    <img src="https://image.flaticon.com/icons/png/512/61/61045.png" alt=""/>
                    <img src="https://image.flaticon.com/icons/png/512/23/23931.png" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
import '../styles/download.css';

import ImgChrome from '../images/logo-chrome.svg';
import ImgFirefox from '../images/logo-firefox.svg';
import ImgOpera from '../images/logo-opera.svg';

function Download() {
    return (
        <div className="downloadContainer">
            <h2>Download the extension</h2>
            <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            <div className="downloadsOptionsContainer">
                <div className="downloadOption downloadChrome">
                    <img src={ImgChrome} alt=""/>
                    <h3>Add to Chrome</h3>
                    <p>Minimum version 62</p>
                    <div className="downloadButton">
                        <button>Add & Install Extension</button>
                    </div>
                </div>
                <div className="downloadOption downloadFirefox">
                    <img src={ImgFirefox} alt=""/>
                    <h3>Add to Firefox</h3>
                    <p>Minimum version 55</p>
                    <div className="downloadButton">
                        <button>Add & Install Extension</button>
                    </div>
                </div>
                <div className="downloadOption downloadOpera">
                    <img src={ImgOpera} alt=""/>
                    <h3>Add to Opera</h3>
                    <p>Minimum version 46</p>
                    <div className="downloadButton">
                        <button>Add & Install Extension</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Download;
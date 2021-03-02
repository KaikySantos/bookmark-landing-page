import { useState } from 'react';

import '../styles/features.css';

import ImgFeature1 from '../images/illustration-features-tab-1.svg';
import ImgFeature2 from '../images/illustration-features-tab-2.svg';
import ImgFeature3 from '../images/illustration-features-tab-3.svg';

function Features() {
    const [featureSelect, setFeatureSelect] = useState(1);

    function changeFeatureSelect(item){
        setFeatureSelect(item);
    }

    return (
        <div className="featuresContainer">
            <h2>Features</h2>
            <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <div className="featuresNavgation">
                <div 
                    className={featureSelect === 1 ? 'select' : ''}
                    onClick={() => changeFeatureSelect(1)}
                >Simple Bookmarking</div>
                <div 
                    className={featureSelect === 2 ? 'select' : ''}
                    onClick={() => changeFeatureSelect(2)}
                >Speedy Searching</div>
                <div 
                    className={featureSelect === 3 ? 'select' : ''}
                    onClick={() => changeFeatureSelect(3)}
                >Easy Sharing</div>
            </div>
            <div className="featureContainer">
                {featureSelect === 1 && (
                    <>
                    <div className="featureImageContainer">
                        <div className="backgroundBlue"></div>
                        <img src={ImgFeature1} alt=""/>
                    </div>
                    <div className="featureContent">
                        <h2>Bookmark in one click</h2>
                        <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                        <button>
                            More Info
                        </button>
                    </div>
                    </>
                )}
                {featureSelect === 2 && (
                    <>
                    <div className="featureImageContainer">
                        <div className="backgroundBlue"></div>
                        <img src={ImgFeature2} alt=""/>
                    </div>
                    <div className="featureContent">
                        <h2>Intelligent search</h2>
                        <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                        <button>
                            More Info
                        </button>
                    </div>
                    </>
                )}
                {featureSelect === 3 && (
                    <>
                    <div className="featureImageContainer">
                        <div className="backgroundBlue"></div>
                        <img src={ImgFeature3} alt=""/>
                    </div>
                    <div className="featureContent">
                        <h2>Share your bookmarks</h2>
                        <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                        <button>
                            More Info
                        </button>
                    </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Features;
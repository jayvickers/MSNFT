import React from 'react';
import './_coming-soon.less';
import bgimg from '../images/msnftbg.png'

const ComingSoon = () => {

    const bgstyle = {

        background: `url(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%"
    }
    return (
        <div style={bgstyle} className="coming-soon">
            <div className="coming-soon__text-container">
                <h1>MeanStreak NFT</h1>
                <h2>Coming soon 2021</h2>
                <p>NFT marketplace and art community, featuring New England graffiti legends. Terrance to add some more text here about what the site will be.</p>
                <p>find us on these social platforms</p>
            </div>
            <div className="coming-soon__gallery">
                <div className="gallery__row-container">
                    <div className="gallery__item"> my gallery item</div>
                    <div className="gallery__item"> my gallery item</div>
                </div>
                <div className="gallery__row-container">
                    <div className="gallery__item"> my gallery item</div>
                    <div className="gallery__item"> my gallery item</div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;

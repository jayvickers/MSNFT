import React from 'react';
import './_coming-soon.less';
import bgimg from '../images/bg5.jpg'

const ComingSoon = () => {

    const underlineStyle = {
        paddingBottom: "3px",
        boxShadow: "rgb(241 80 47 / 0%) 0px 10px 0px 0px, rgb(241 80 47) 0px -0.125em inset"
    }
    return (
        <>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                opacity: ".85",
                backgroundColor: "black"
            }} />
            <img style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: "-1"
            }} src={bgimg} />
            <div className="coming-soon">
                <div className="coming-soon__text-container">
                    <h1>MeanStreak NFT</h1>
                    <h2>Coming soon 2021</h2>
                    <p>NFT marketplace and art community. Featuring New England graffiti legends, digital commodies backed by real <span style={underlineStyle}>physical items</span>.</p>
                    <p>find us on these social platforms for exclusive community drops. custom 1/1 apparel, live events, music, and more.</p>
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
        </>
    );
};

export default ComingSoon;

import React from 'react';
import './_coming-soon.less';
import bgimg from '../images/bg5mono50.webp'
import bgimg2 from '../images/bg5mono50.jpg'

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

            <picture>
                <source srcSet={bgimg} type="image/webp" />
                <source srcSet={bgimg2} type="image/jpeg" />
                <img className="bgimg" src={bgimg} alt="background graffiti" />
            </picture>
            <div className="coming-soon">
                <div className="coming-soon__text-container">
                    <h1>MeanStreak NFT</h1>
                    <h2>Coming soon 2021</h2>
                    <p>NFT marketplace and art community - Featuring New England graffiti legends</p>
                    <p>Digital commodies backed by real <span style={underlineStyle}>physical items</span>.</p>
                    <p>Exclusive community drops, custom 1/1 apparel, live events, music, and more.</p>
                    <div className="social-container" style={{ display: "flex", justifyContent: "center" }}>
                        <span className="social-container__find-us">Find us here<i className="fas fa-arrow-right"></i></span>
                        <span className="social-container__icon-container"> <i className="fab fa-twitter"></i>
                            <i className="fab fa-discord"></i><i className="fab fa-reddit"></i>
                        </span>
                    </div>
                </div>
                {/* <div className="coming-soon__gallery">
                    <div className="gallery__row-container">
                        <div className="gallery__item"> my gallery item</div>
                        <div className="gallery__item"> my gallery item</div>
                    </div>
                    <div className="gallery__row-container">
                        <div className="gallery__item"> my gallery item</div>
                        <div className="gallery__item"> my gallery item</div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default ComingSoon;

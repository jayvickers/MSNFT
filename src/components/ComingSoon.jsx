import React from 'react';
import './_coming-soon.less';
import bgimgwebp from '../images/bg5mono50.webp'
import bgimgjpg from '../images/bg5mono50.jpg'
import paintdot from '../images/icons/paintdot.png';
import logopng from '../images/logos/logocrop.png';
import logowebp from '../images/logos/logocrop.webp';

const ComingSoon = () => {

    const underlineStyle = {
        paddingBottom: "3px",
        marginLeft: "8px",
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
                <source srcSet={bgimgwebp} type="image/webp" />
                <source srcSet={bgimgjpg} type="image/jpeg" />
                <img className="bgimg" src={bgimgwebp} alt="background graffiti" />
            </picture>
            <div className="coming-soon">
                <picture>
                    <source srcSet={logowebp} type="image/webp" />
                    <source srcSet={logopng} type="image/jpeg" />
                    <img className="coming-soon__logo" src={logowebp} alt="msnft logo" />
                </picture>

                <div className="coming-soon__text-container">
                    <h1>MeanStreak NFT</h1>
                    <h2>Coming soon 2021</h2>
                    <p className="text-container__bullet">
                        <img className="text-container__paint-dot" alt="paint dot icon" src={paintdot} />
                        NFT marketplace and art community - Featuring New England graffiti legends.
                    </p>
                    <p className="text-container__bullet">
                        <img className="text-container__paint-dot" alt="paint dot icon" src={paintdot} />
                        Digital commodies backed by real
                        <span style={underlineStyle}>physical items</span>.
                    </p>
                    <p className="text-container__bullet">
                        <img className="text-container__paint-dot" alt="paint dot icon" src={paintdot} />
                        Exclusive community drops, custom 1/1 apparel, live events, music, and more.</p>
                    <div className="social-container" style={{ display: "flex", justifyContent: "center" }}>
                        <span className="social-container__find-us">Find us here
                            <i className="fas fa-arrow-right" /></span>
                        <span className="social-container__icon-container">
                            <a href="https://twitter.com/MeanStreakNFT" rel="noreferrer" target="_blank"><i className="fab fa-twitter" /></a>
                            {/* <i className="fab fa-discord"></i>
                            <i className="fab fa-reddit"></i> */}
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

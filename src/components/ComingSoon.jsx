import React from 'react';
import './_coming-soon.less';
import bgimgwebp from '../images/bg5mono50.webp'
import bgimgjpg from '../images/bg5mono50.jpg'
import paintdot from '../images/icons/paintdot.png';
import logopng from '../images/logos/logocrop.png';
import logowebp from '../images/logos/logocrop.webp';
import TwitterLogo from '../images/svgs/twitter.svg';

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
                        <span className="social-container__find-us"><span style={{ display: "flex", margin: "auto 2rem auto auto" }}>Find us here</span> <span className="find-us__arrow"> ➔ </span>
                        </span>
                        <span className="social-container__icon-container">
                            <a href="https://twitter.com/MeanStreakNFT" rel="noreferrer" target="_blank">

                                <svg className="twitter-svg" version="1.1" viewBox="0 0 150 150">
                                    <defs>
                                    </defs>
                                    <g xmlns="http://www.w3.org/2000/svg" id="icon" >
                                        <path d="M 28.303 81.565 c 33.962 0 52.538 -28.138 52.538 -52.538 c 0 -0.799 0 -1.595 -0.054 -2.387 c 3.614 -2.614 6.733 -5.85 9.212 -9.558 c -3.37 1.493 -6.945 2.473 -10.606 2.905 c 3.855 -2.308 6.74 -5.937 8.118 -10.213 c -3.625 2.151 -7.59 3.667 -11.725 4.482 c -6.993 -7.436 -18.69 -7.795 -26.126 -0.802 c -4.796 4.51 -6.83 11.23 -5.342 17.643 C 29.473 30.352 15.64 23.34 6.264 11.804 c -4.901 8.437 -2.398 19.231 5.717 24.649 c -2.939 -0.087 -5.813 -0.88 -8.381 -2.311 c 0 0.076 0 0.155 0 0.234 c 0.002 8.79 6.198 16.36 14.814 18.101 c -2.718 0.741 -5.571 0.85 -8.338 0.317 c 2.419 7.522 9.351 12.675 17.251 12.823 c -6.539 5.139 -14.616 7.928 -22.932 7.92 C 2.926 73.534 1.459 73.445 0 73.27 c 8.444 5.419 18.27 8.293 28.303 8.28" />
                                    </g>
                                </svg></a>
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

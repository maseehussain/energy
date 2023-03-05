import React from "react";

import ImgSlider from "../components/slide";
// import headerImage from '../../assets/home/header-image.svg';
import googlePlayLogo from '../assets/home/google-play-badge.svg';
import appleStoreLogo from '../assets/home/apple-store-badge.svg';

export default function Home() {
    return (
        <div className="container-fluid p-0">
            <div className="header">
                <div className="header__slider">
                    <ImgSlider />
                </div>
                <div className="header__info">
                    <h1 className="header__title">Pay Less, Get More</h1>
                    <p className="header__sub-title">Save on your bill through our broadband and energy bundle</p>
                    <div className="header__icons">
                        <img src={googlePlayLogo} className="header__icons-img" alt="google icon" />
                        <img src={appleStoreLogo} className="header__icons-img" alt="apple icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}
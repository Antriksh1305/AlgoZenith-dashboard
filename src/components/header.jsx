import { useState } from "react";

// assets
import { images } from "../assets/images";

// styles
import '../styles/header.scss';

const Header = ({ handleMenu }) => {
    const [showLogo, setShowLogo] = useState(false);

    return (
        <header>
            <div className="left-side">
                <img
                    src={images.menu}
                    alt="menu"
                    className="menu"
                    onClick={handleMenu}
                />
                <div
                    className="logoBox"
                    onMouseEnter={() => setShowLogo(true)}
                    onMouseLeave={() => setShowLogo(false)}
                >
                    <img
                        src={images.logo}
                        alt="logo"
                        className={`logo ${showLogo ? "hover" : ""}`}
                    />
                    <img
                        src={images.logoName}
                        alt="logo name"
                        className={`logoName ${showLogo ? "hover" : ""}`}
                    />
                </div>
            </div>
            <div className="right-side">
                <span>
                    <img src={images.bell} alt="bell" className="bell-icon" />
                </span>
                <div className="profile" />
            </div>
        </header>
    );
};

export default Header;

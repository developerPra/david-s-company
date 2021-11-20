import React from 'react';
import "../styles/topBar.scss";

const TopBar = () => {
    return (
        <>
            <div className="topBar">
                <ul className="topBar-menus">
                    <li className="topBar-menu active"><i class="fal fa-user"></i><span>Trainer Profile</span></li>
                    <li className="topBar-menu"><i class="fal fa-home-alt"></i><span>Dashboard</span></li>
                    <li className="topBar-menu"><i class="fal fa-file-check"></i><span>Original Files</span> </li>
                    <li className="topBar-menu"><i class="fal fa-money-check-alt"></i><span>Payment Details</span> </li>
                    <li className="topBar-menu"><i class="fab fa-linkedin-in"></i><span>Linkedin Data</span> </li>
                </ul>
            </div>
        </>
    )
}

export default TopBar;

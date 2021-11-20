import React from 'react'
import "../styles/header.scss"

const Header = () => {

    return (
        <>
            <header className="">
                <div className="header-search">
                    <input type="search" />
                    <i class="fal fa-search pr"></i>
                    <span>Search anything</span>
                </div>

                <div className="header-actions">
                    <div className="notification"><i class="fal fa-bell"></i></div>
                    <div className="profile">
                        <img src="https://picsum.photos/50/50" alt="" />
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header;

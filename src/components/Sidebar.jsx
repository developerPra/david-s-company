import React, { useState } from 'react';
import "../styles/sidebar.scss";

const Sidebar = () => {

    const [toggleActive, setToggleActive] = useState(false);
    const handleToggle = () => {
        setToggleActive(!toggleActive);
    }

    return (
        <>
            <aside className="">
                <div className={ `aside-icon ${toggleActive ? "active" : ""}` } onClick={ handleToggle }><i class="fal fa-chevron-left"></i></div>
                <div className="aside-header">
                    <div className="profile">
                        <img src="https://picsum.photos/id/237/50/50" alt="profile image" />
                    </div>
                </div>
                <div className="aside-body">
                    <ul className="menus">

                        <li className="menu active">
                            <div className="menu-cover">
                                <i class="fal fa-home-alt"></i>
                                <div className="menu-name-count">
                                    <span className="menu-name">Dashboard</span>
                                </div>
                            </div>
                        </li>

                        <li className="menu">
                            <div className="menu-cover">
                                <i class="fal fa-user-circle"></i>
                                <div className="menu-name-count">
                                    <span className="menu-name">Audiande</span>
                                </div>
                            </div>
                        </li>

                        <li className="menu">
                            <div className="menu-cover">
                                <i class="fal fa-file-alt"></i>
                                <div className="menu-name-count">
                                    <span className="menu-name">Posts</span>
                                    <span className="menu-count">3</span>
                                </div>
                            </div>
                        </li>

                        <li className="menu">
                            <div className="menu-cover">
                                <i class="fal fa-calendar-check"></i>
                                <div className="menu-name-count">
                                    <span className="menu-name">Calendar</span>
                                    <span className="menu-count">4</span>
                                </div>
                            </div>
                        </li>

                        <li className="menu">
                            <div className="menu-cover">
                                <i class="fal fa-sack"></i>
                                <div className="menu-name-count">
                                    <span className="menu-name">Income</span>
                                    <span className="menu-count">4</span>
                                </div>
                            </div>
                            <ul className="submenus">
                                <li className="submenu">Earnings</li>
                                <li className="submenu">Refunds</li>
                                <li className="submenu">Declines</li>
                                <li className="submenu">Payout</li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <div className="aside-footer">
                    {/* future development */ }
                </div>
            </aside>
        </>
    )
}

export default Sidebar

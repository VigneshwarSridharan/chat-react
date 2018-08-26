import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-inner">
                <div className="sidebar-logo">
                    <div className="peers ai-c fxw-nw">
                        <div className="peer peer-greed">
                            <a className="sidebar-link td-n" href="index.html">
                                <div className="peers ai-c fxw-nw">
                                    <div className="peer">
                                        <div className="logo">
                                            <img src={baseurl + "assets/images/logo.png"} alt="" />
                                        </div>
                                    </div>
                                    <div className="peer peer-greed">
                                        <h5 className="lh-1 mB-0 logo-text">Adminator</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="peer">
                            <div className="mobile-toggle sidebar-toggle">
                                <a href="" className="td-n">
                                    <i className="ti-arrow-circle-left"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="sidebar-menu scrollable pos-r">
                    <li className="nav-item mT-30 active">
                        <Link className="sidebar-link" to="/">
                            <span className="icon-holder">
                                <i className="c-blue-500 ti-home"></i>
                            </span>
                            <span className="title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="sidebar-link" to="/chat">
                            <span className="icon-holder">
                                <i className="c-deep-purple-500 ti-comment-alt"></i>
                            </span>
                            <span className="title">Chat</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
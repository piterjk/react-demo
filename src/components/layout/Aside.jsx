import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faGear, faList, faDashboard, faChevronLeft, faChevronRight, faChartGantt} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


function Aside(){

    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <aside className="App-aside">
            <div className="d-flex">
                {/* 사이드바 */}
                <div className={`sidebar bg-dark text-white ${isOpen ? "w-250" : "w-75"}`} style={{ height: "100vh", transition: "width 0.3s" }}>
                    <button className="btn btn-dark w-100 text-start" onClick={toggleSidebar} style={{ textAlign: "center", padding: "10px 0" }}>
                        <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} style={{ fontSize: "1.5rem" }} />
                    </button>
                    <ul className="nav flex-column p-2">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                                <FontAwesomeIcon icon={faHome}/> {isOpen && "Home"}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link text-white">
                                <FontAwesomeIcon icon={faDashboard}/> {isOpen && "Dashboard"}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gantt-chart" className="nav-link text-white">
                                <FontAwesomeIcon icon={faChartGantt}/> {isOpen && "Gantt Chart"}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#submenu1"
                                className="nav-link text-white"
                                data-bs-toggle="collapse"
                                data-bs-target="#submenu1"
                                aria-expanded="false"
                                aria-controls="submenu1"
                            >
                                <FontAwesomeIcon icon={faList}/> {isOpen && "Submenu"}
                            </a>
                            <ul className="collapse nav flex-column ms-3" id="submenu1">
                                <li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="nav-link text-white">
                                        Submenu 1
                                    </a>
                                </li>
                                <li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="nav-link text-white">
                                        Submenu 2
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className="nav-link text-white">
                                <FontAwesomeIcon icon={faGear}/> {isOpen && "Settings"}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Aside;
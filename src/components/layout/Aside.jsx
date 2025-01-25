import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faGear, faList, faDashboard, faChevronLeft, faChevronRight, faChartGantt, faBoltLightning} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


function Aside(){

    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <aside className="App-aside bg-dark ">
            <div className="d-flex">
                {/* 사이드바 */}
                <div className={`sidebar text-white ${isOpen ? "w-250" : "w-75"}`} style={{ height: "calc(100vh - 150px)", transition: "width 0.3s" }}>
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
                                <FontAwesomeIcon icon={faList}/> {isOpen && "PLM"}
                            </a>
                            <ul className="collapse nav flex-column ms-3" id="submenu1">
                                <li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <Link to="/plm-pdm" className="nav-link text-white">
                                        제품 데이터 관리 (PDM)
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/plm-task" className="nav-link text-white">
                                        작업 관리
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/plm-eco" className="nav-link text-white">
                                        설계 변경 관리 (ECO/ECN)
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/plm-qlt" className="nav-link text-white">
                                        품질 관리 (Quality Management)
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#submenu2"
                                className="nav-link text-white"
                                data-bs-toggle="collapse"
                                data-bs-target="#submenu2"
                                aria-expanded="false"
                                aria-controls="submenu2"
                            >
                                <FontAwesomeIcon icon={faBoltLightning}/> {isOpen && "쇼케이스"}
                            </a>
                            <ul className="collapse nav flex-column ms-3" id="submenu2">
                                <li>
                                    <Link to={'showcase-dndcards'} className="nav-link text-white">
                                        드래그&드랍 카드
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'showcase-gridtable'} className="nav-link text-white">
                                        그리드 테이블(ag)
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'showcase-charts'} className="nav-link text-white">
                                        차트
                                    </Link>
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
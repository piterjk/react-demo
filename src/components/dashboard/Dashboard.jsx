import React, {useEffect, useRef} from 'react';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import Header from "../layout/Header";
import Aside from "../layout/Aside";
import Footer from "../layout/Footer";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Dashboard = () => {

    const daejeonPosition = [36.3504, 127.3845]; // 대전의 위도와 경도

    // 커스텀 마커 아이콘 (선택 사항)
    const customIcon = new L.Icon({
        iconUrl: '/maker.png', // 마커 아이콘 경로
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });

    const popupRef = useRef();

    useEffect(() => {
        // 팝업을 열기
        if (popupRef.current) {
            popupRef.current.openOn(popupRef.current._map);
        }
    }, []);

    return (
        <div className="AppMain">
            <Header/>
            <div className="App-container">
                <Aside/>
                <main className="App-main">
                    <MapContainer center={daejeonPosition} zoom={15} style={{ height: '400px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={daejeonPosition} icon={customIcon}>
                            <Popup>
                                <h3>대전광역시</h3>
                                <img src="/maker.png" // 팝업에 표시할 이미지 경로
                                    alt="Daejeon"
                                    style={{width: '100%', borderRadius: '8px'}}
                                />
                            </Popup>
                        </Marker>
                    </MapContainer>
                </main>
            </div>
            <Footer/>
        </div>
    )
};

export default Dashboard;


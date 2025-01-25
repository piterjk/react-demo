import React from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

// 스타일 가져오기
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const GridTable = () => {

    const rowData = [
        {
            make: '현대',
            model: '소나타',
            price: 72000,
            engine: '2.0L GDI',
            seats: 5,
            cylinders: 4,
            fuelType: 'Gasoline',
            transmission: 'Automatic'
        },
        {
            make: '기아',
            model: '쏘렌토',
            price: 72000,
            engine: '2.2L Diesel',
            seats: 7,
            cylinders: 4,
            fuelType: 'Diesel',
            transmission: 'Automatic'
        },
        {
            make: '도요타',
            model: 'Celica',
            price: 35000,
            engine: '1.8L VVT-i',
            seats: 4,
            cylinders: 4,
            fuelType: 'Gasoline',
            transmission: 'Manual'
        },
        {
            make: '포드',
            model: 'Mondeo',
            price: 32000,
            engine: '2.0L EcoBoost',
            seats: 5,
            cylinders: 4,
            fuelType: 'Gasoline',
            transmission: 'Automatic'
        },
        {
            make: '포르쉐',
            model: 'Boxster',
            price: 72000,
            engine: '2.5L Turbocharged Boxer',
            seats: 2,
            cylinders: 4,
            fuelType: 'Gasoline',
            transmission: 'Manual'
        },
        {
            make: '랜드로버',
            model: '디펜더',
            price: 102000,
            engine: '3.0L Inline-6',
            seats: 5,
            cylinders: 6,
            fuelType: 'Diesel',
            transmission: 'Automatic'
        },
        {
            make: 'BMW',
            model: 'X6',
            price: 92000,
            engine: '3.0L Inline-6 Turbo',
            seats: 5,
            cylinders: 6,
            fuelType: 'Gasoline',
            transmission: 'Automatic'
        },
        {
            make: '링컨',
            model: '네비게이터',
            price: 162000,
            engine: '3.5L V6 EcoBoost',
            seats: 7,
            cylinders: 6,
            fuelType: 'Gasoline',
            transmission: 'Automatic'
        },
        {
            make: '링컨1',
            model: '네비게이터',
            price: 162000,
            engine: '3.5L V6 EcoBoost',
            seats: 7,
            cylinders: 6,
            fuelType: 'Gasoline',
            transmission: 'Automatic'
        },
        {
            make: '링컨2',
            model: '네비게이터',
            price: 162000,
            engine: '3.5L V6 EcoBoost',
            seats: 7,
            cylinders: 6,
            fuelType: 'Gasoline',
            transmission: 'Automatic'
        }
    ];


    const columnDefs = [
        { field: 'make' , width: 200, pinned: "left" },
        { field: 'model' , width: 200, cellClass: "text-start"},
        { field: 'price' , width: 200, cellClass: "text-end", valueFormatter: (params) =>new Intl.NumberFormat("ko-KR").format(params.value)},
        { field: 'engine' , width: 200, cellClass: "text-start"},
        { field: 'seats' , width: 200, cellClass: "text-start"},
        { field: 'cylinders' , width: 200, cellClass: "text-start"},
        { field: 'fuelType' , width: 200, cellClass: "text-start"},
        { field: 'transmission' , width: 200, cellClass: "text-start"},
    ];

    return (
        <main className={'App-main'}>
            <div className="ag-theme-alpine" style={{height: 400, width: 800,overflowX: "scroll",overflowY: "scroll !important",boxSizing: "border-box"}}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    modules={[ClientSideRowModelModule]} // 필수 모듈 추가
                    domLayout="normal" // 스크롤 활성화를 위한 기본 레이아웃
                    defaultColDef={{
                        resizable: true, // 열 크기 조정 활성화
                    }}
                    gridOptions={{
                        suppressHorizontalScroll: false, // 가로 스크롤 활성화
                        alwaysShowVerticalScroll: true, // 세로 스크롤 활성화
                    }}
                />
            </div>
            <div className={'card mt-5'}>
                <h2>ag-grid-react</h2>
                <div className={'card-body'}>
                    npm install ag-grid-react ag-grid-community<br/>
                    npm install @ag-grid-community/client-side-row-model --save
                </div>
            </div>
        </main>
);
};

export default GridTable;

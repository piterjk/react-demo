import React, {useState} from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

// 스타일 가져오기
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './GridTable.css';

const GridTable = () => {

    const [rowData, setRowData] = useState([
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
            make: '현대',
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
            make: '링컨',
            model: '네비게이터',
            price: 162000,
            engine: '3.5L V6 EcoBoost',
            seats: 7,
            cylinders: 6,
            fuelType: 'Gasoline',
            transmission: 'Automatic'
        }
    ]);

    // 병합 크기를 계산하는 함수
    const getRowSpan = (params) => {
        const currentValue = params.data?.make;
        let rowSpan = 1;
        let nextIndex = params.node.rowIndex + 1;

        while (true) {
            const nextValue =
                params.api.getDisplayedRowAtIndex(nextIndex)?.data?.make;

            // 동일 값이 없거나 끝에 도달하면 중단
            if (nextValue !== currentValue) {
                break;
            }

            rowSpan += 1;
            nextIndex += 1;
        }
        // console.log(`rowSpan : ${rowSpan}`)
        return rowSpan;
    };

    const columnDefs = [
        {   headerName: '차량 정보', headerClass:'text-center', // 그룹 헤더
            children: [
                {
                    field: 'make' ,
                    headerName: '제조사',
                    rowSpan: (params) => {
                        const currentValue = params.data?.make;

                        // 첫 번째 행이면 항상 병합 시작
                        if (params.node.rowIndex === 0) {
                            //console.log(`rowIndex : 0`)
                            //return getRowSpan(params);
                        }

                        // 이전 행 데이터와 비교
                        const previousValue =  params.api.getDisplayedRowAtIndex(params.node.rowIndex - 1)?.data?.make;

                        const nextValue =  currentValue !== previousValue ? getRowSpan(params) : 0;
                        console.log(`currentValue : ${currentValue}`);
                        console.log(`previousValue : ${previousValue    }`);
                        console.log(`nextValue : ${nextValue}`);

                        return nextValue;
                    },
                    cellClassRules: {
                        'cell-span': 'value !== undefined', // 병합된 셀 스타일
                    },
                    width: 200, pinned: "left" ,editable: false},
                { field: 'model' , width: 200, pinned: "left" , cellClass: "text-start", editable: true},
            ]
        },
        {   headerName: '세부 정보', headerClass:'text-center', // 그룹 헤더
            children:[{ field: 'price' , width: 200, cellClass: "text-end",editable: true,
                valueFormatter: (params) =>new Intl.NumberFormat("ko-KR").format(params.value),
                valueParser: (params) => {
                    const value = Number(params.newValue); // 입력값을 숫자로 변환
                    return isNaN(value) ? params.oldValue : value; // 숫자가 아니면 이전 값 유지
                },
            },
            { field: 'engine' , width: 200, cellClass: "text-start", editable: true},
            { field: 'seats' , width: 200, cellClass: "text-center", editable: true},
            { field: 'cylinders' , width: 200, cellClass: "text-start", editable: true},
            { field: 'fuelType' , width: 200, cellClass: "text-start", editable: true},
            { field: 'transmission' , width: 200, cellClass: "text-start", editable: true},
            ]
        }
    ];

    const onCellValueChanged = (params) => {
        console.log('수정된 데이터:', params.data);
        const updatedRowData = rowData.map((row) =>
            row.make === params.data.make && row.model === params.data.model
                ? { ...params.data }
                : row
        );
        setRowData(updatedRowData); // 상태에 반영
    };


    return (
        <main className={'App-main'}>
            <div className="ag-theme-alpine" style={{height: 400, width: 880,overflowX: "scroll",overflowY: "scroll !important",boxSizing: "border-box"}}>
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
                        getRowStyle: (params) => {
                            const totalRows = params.api.getDisplayedRowCount(); // 총 행 개수
                            const zIndexValue = totalRows - params.node.rowIndex; // 역순으로 z-index 계산
                            return {
                                zIndex: zIndexValue, // z-index 동적 적용
                            };
                        },
                    }}
                    onCellValueChanged={onCellValueChanged} // 셀 값 변경 이벤트 처리
                />
            </div>
            <div className={'mt-3 text-start'}>
                * 셀 더블 클릭 시 데이터 변경가능<br/>
                * 제조사 셀 병합 처리
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

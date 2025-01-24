import React from 'react';
import QualitySummary from './QualitySummary';
import InspectionList from './InspectionList';
import QualityIssues from './QualityIssues';
import QualityCharts from './QualityCharts';

const QualityMain = () => {
    const summaryData = [
        { title: '불량률', value: '5%', description: '월간 불량률' },
        { title: '검사 통과율', value: '95%', description: '검사 항목 기준' },
        { title: '검사 완료 수', value: '120', description: '총 검사 항목 수' },
    ];

    const inspections = [
        { item: '제품 A', inspector: '홍길동', result: '합격', date: '2025-01-24' },
        { item: '제품 B', inspector: '김철수', result: '불합격', date: '2025-01-23' },
    ];

    const issues = [
        { title: '제품 A 불량', description: 'A 부품 결함으로 불량 발생', status: '진행 중' },
        { title: '제품 B 품질 이슈', description: 'B 부품 치수 초과', status: '해결됨' },
    ];

    return (
        <main className={'App-main'}>
            <QualitySummary data={summaryData} />
            <div className="mt-4 text-start">
                <InspectionList inspections={inspections} />
            </div>
            <div className="mt-4 text-start">
                <QualityIssues issues={issues} />
            </div>
            <div className="mt-4">
                <QualityCharts />
            </div>
        </main>
    );
};

export default QualityMain;

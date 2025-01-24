import React from 'react';
import Tree from 'react-d3-tree';

const BomTree = () => {

    const renderCustomNode = ({ nodeDatum }) => (
        <g>
            <circle r={15} fill="blue" />
            <text fill="white" x="20">
                {nodeDatum.name}
            </text>
        </g>
    );


    const bomData = {
        name: '제품 A',
        children: [
            {
                name: '부품 A1',
                children: [
                    { name: '부품 A1-1' },
                    { name: '부품 A1-2' },
                ],
            },
            { name: '부품 A2' },
        ],
    };

    const handleNodeClick = (nodeData) => {
        console.log('Clicked node:', nodeData);
    };

    return (
        <div className="mt-3">
            <div style={{ height: 'calc(100vh - 320px)' }}>
                <Tree data={bomData} orientation="vertical"
                      onNodeClick={(nodeData) => handleNodeClick(nodeData)}
                      translate={{ x: 300, y: 100 }}
                      styles={{
                          links: { stroke: 'blue', strokeWidth: 2 },
                          nodes: {
                              node: { circle: { stroke: 'red', strokeWidth: 3 } },
                              leafNode: { circle: { stroke: 'green', strokeWidth: 2 } },
                          },
                      }}
                />
            </div>
        </div>
    );
};

export default BomTree;

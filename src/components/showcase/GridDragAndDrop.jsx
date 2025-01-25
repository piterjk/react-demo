import React, {useState} from "react";
import {
    DndContext,
    DragOverlay,
    useSensor,
    useSensors,
    PointerSensor,
    closestCenter,
} from "@dnd-kit/core";
import {
    SortableContext,
    useSortable,
    arrayMove,
    rectSortingStrategy,
} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

function SortableItem({id, content, backgroundColor}) {
    const {attributes, listeners, setNodeRef, transform, transition, isDragging} =
        useSortable({id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        padding: "16px",
        backgroundColor: isDragging ? "#f0f0f0" : backgroundColor, // 드래그 중 색상 변경
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        userSelect: "none",
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {content}
        </div>
    );
}

const GridDragAndDrop = () => {
    const [items, setItems] = useState([
        { id: "1", content: "Card 1", color: "#FFDDC1" },
        { id: "2", content: "Card 2", color: "#FFABAB" },
        { id: "3", content: "Card 3", color: "#FFC3A0" },
        { id: "4", content: "Card 4", color: "#D5AAFF" },
        { id: "5", content: "Card 5", color: "#85E3FF" },
        { id: "6", content: "Card 6", color: "#B9FBC0" },
        { id: "7", content: "Card 7", color: "#FBE7C6" },
        { id: "8", content: "Card 8", color: "#A0E7E5" },
    ]);
    const [activeId, setActiveId] = useState(null);

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragStart = (event) => {
        setActiveId(event.active.id); // 드래그 시작 시 활성 ID 설정
    };

    const handleDragEnd = (event) => {
        const {active, over} = event;
        console.log('active : ' + active.id)
        console.log('over : ' + over.id)
        if (over && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
        setActiveId(null); // 드래그 종료 시 초기화
    };

    return (
        <main className="App-main">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <SortableContext items={items} strategy={rectSortingStrategy}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                            gap: "16px",
                            padding: "20px",
                            maxWidth: "1000px", // 드래그 영역 제한
                            margin: "0 auto",
                            backgroundColor: "#f9f9f9",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                        }}
                    >
                        {items.map((item) => (
                            <SortableItem key={item.id}
                                          id={item.id}
                                          content={item.content}
                                          backgroundColor={item.color} // 배경색 전달
                            />
                        ))}
                    </div>
                </SortableContext>

                {/* 드래그 중 임시 표시 */}
                <DragOverlay>
                    {activeId ? (
                        <div
                            style={{
                                padding: "16px",
                                backgroundColor: "#e0e0e0",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                                textAlign: "center",
                            }}
                        >
                            {items.find((item)=>item.id === activeId).content }
                        </div>
                    ) : null}
                </DragOverlay>
            </DndContext>

            <div id="console" className={'mt-5 bg-light text-muted rounded border p-3 text-start'}>
                {items.map((item,index) => (<div><span style={{width:'20px',display:'inline-block'}}>{index}</span>: {item.content}</div>))}
            </div>

            <div className={'card mt-5'}>
                <h2>dnd-kit</h2>
                <div className={'card-body'}>
                npm install @dnd-kit/core @dnd-kit/sortable
                </div>
            </div>
        </main>
    );
}

export default GridDragAndDrop;

import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./features/Column";

const initialData = {
  answers: {
    "answer-1": { id: "answer-1", content: "This is an answer 1." },
    "answer-2": { id: "answer-2", content: "This is an answer 2." },
    "answer-3": { id: "answer-3", content: "This is an answer 3." },
    "answer-4": { id: "answer-4", content: "This is an answer 4." },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Options 1",
      answerIds: ["answer-1", "answer-2", "answer-3", "answer-4"],
    },
    "column-2": {
      id: "column-2",
      title: "Options 2",
      answerIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Options 3",
      answerIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
const Quiz3 = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = result => {
    const element = document.querySelector(`[data-rbd-draggable-id=${result.draggableId}]`);
    element.classList.remove("text-pink-500");
    // element.style.color = "inherit";
    const { destination, draggableId, source } = result;
    console.log(destination);
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const column = data.columns[source.droppableId];
    const newOrder = Array.from(column.answerIds);
    newOrder.splice(source.index, 1);
    newOrder.splice(destination.index, 0, draggableId);
    const newColumn = { ...column, answerIds: newOrder };
    setData(prev => ({ ...prev, columns: { ...prev.columns, [newColumn.id]: newColumn } }));
  };

  const onDragStart = result => {
    const element = document.querySelector(`[data-rbd-draggable-id=${result.draggableId}]`);
    // element.style.color = "fuchsia";
    element.classList.add("text-pink-500");
  };
  const onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? Math.round(((destination.index / Object.keys(data.answers).length) * 1000) / 100) * 100
      : 0;
    const container = document.querySelector("#quiz3-container").parentElement;
    // container.classList.add(`bg-blue-${opacity}`);
    // document.body.classList.add(`opacity-25`);
    // document.body.classList.add(`opacity-{${opacity}}`);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart} onDragUpdate={onDragUpdate}>
      <div id="quiz3-container" className="flex">
        {data.columnOrder.map(column => {
          return <Column key={data.columns[column].id} {...data.columns[column]} answers={data.answers} />;
        })}
      </div>
    </DragDropContext>
  );
};

export default Quiz3;

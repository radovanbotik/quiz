import React from "react";
import Answer from "./Answer";
import { Droppable } from "react-beautiful-dnd";

const Column = props => {
  const { id, title, answerIds, answers } = props;
  console.log(answers["answer-1"].id);
  return (
    <div className="flex flex-1 flex-col border-2 border-solid border-black p-4">
      <div className="mb-4 bg-white">
        <h5>{title}</h5>
      </div>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`${snapshot.isDraggingOver ? "bg-slate-800" : "bg-white"} flex-1 transition-colors`}
            >
              {answerIds.map((ans, index) => {
                return <Answer key={answers[ans].id} {...answers[ans]} index={index} />;
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Column;

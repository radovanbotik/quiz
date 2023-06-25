/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Answer from "./Answer";
import { Droppable } from "react-beautiful-dnd";

const Column = props => {
  const { id, title, answerIds, answers } = props;
  return (
    <div className="flex min-h-max flex-1 flex-col gap-4 bg-zinc-200 p-4">
      <h4>{title}</h4>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={`${
                snapshot.isDraggingOver ? "bg-zinc-300" : "bg-zinc-200"
              } flex-1 rounded-lg transition-colors`}
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

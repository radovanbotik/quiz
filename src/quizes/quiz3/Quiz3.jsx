import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./features/Column";
import Dialog from "./features/Dialog";

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
      title: "Statements:",
      answerIds: ["answer-1", "answer-2", "answer-3", "answer-4"],
    },
    "column-2": {
      id: "column-2",
      title: "✅True",
      answerIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "⛔False",
      answerIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

const key = {
  trueStatements: ["answer-1", "answer-3"],
  falseStatements: ["answer-2", "asnwer-4"],
};

const Quiz3 = () => {
  const [data, setData] = useState(initialData);
  const [dialogData, setDialogData] = useState({ headline: "", content: "", status: "inProgress" });

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
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newOrder = Array.from(start.answerIds);
      newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, draggableId);
      const newColumn = { ...start, answerIds: newOrder };
      setData(prev => ({ ...prev, columns: { ...prev.columns, [newColumn.id]: newColumn } }));
      return;
    }

    //move items between lists
    // 1. cut from previous column
    const startAnswerIds = Array.from(start.answerIds);
    startAnswerIds.splice(source.index, 1);
    const newStart = {
      ...start,
      answerIds: startAnswerIds,
    };
    const finishAnswerIds = Array.from(finish.answerIds);
    finishAnswerIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      answerIds: finishAnswerIds,
    };
    setData(prev => ({ ...prev, columns: { ...prev.columns, [newStart.id]: newStart, [newFinish.id]: newFinish } }));
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

  const onSubmit = () => {
    const statementsLength = data.columns["column-1"].answerIds.length;
    if (statementsLength > 0) {
      setDialogData({
        headline: `You forgot something😥`,
        content: `There ${statementsLength > 1 ? "are" : "is"} ${statementsLength} more ${
          statementsLength > 1 ? "statements" : "statement"
        } that needs to be sorted!`,
        status: "inProgress",
      });
      window.my_modal_2.showModal();
    }
    const correctColumn = data.columns["column-2"].answerIds;
    // const evaluate = key.trueStatements.map(id => correctColumn.includes(id));
    const evaluate = correctColumn.map(id => key.trueStatements.includes(id));
    console.log(evaluate);
    const isCorrect = evaluate.every(el => el === true) && evaluate.length === key.trueStatements.length;
    if (statementsLength === 0 && isCorrect) {
      setDialogData({
        headline: `You did it😉`,
        content: `Mad lad, I know you could get this done 🎉!`,
        status: "success",
      });
      window.my_modal_2.showModal();
    }
    if (statementsLength === 0 && !isCorrect) {
      setDialogData({
        headline: `Ooops that's not correct😥`,
        content: `Don't give up, I know you can do this!😉!`,
        status: "error",
      });
      window.my_modal_2.showModal();
    }
  };

  return (
    <div className="prose max-w-[inherit] flex-1 p-8 md:p-4">
      <h1>Quiz</h1>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart} onDragUpdate={onDragUpdate}>
        <div id="quiz3-container" className="mb-8 flex h-full  flex-col gap-2 md:flex-row">
          {data.columnOrder.map((column, index, arr) => {
            return <Column key={data.columns[column].id} {...data.columns[column]} answers={data.answers} />;
          })}
        </div>
        <button className="btn-neutral btn w-full" onClick={onSubmit}>
          submit
        </button>
        <Dialog headline={dialogData.headline} content={dialogData.content} status={dialogData.status} />
      </DragDropContext>
    </div>
  );
};

export default Quiz3;

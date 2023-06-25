/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./features/Column";
import Dialog from "./features/Dialog";

const initialData = {
  answers: {
    "answer-1": {
      id: "answer-1",
      content: "Customer pays $27.78 monthly in instalments for a single device.",
    },
    "answer-2": { id: "answer-2", content: "Customer is eligible for early upgrade." },
    "answer-3": {
      id: "answer-3",
      content: "Customer can make quick payment without signing in at 'att.com/fastpay'.",
    },
    "answer-4": { id: "answer-4", content: "Customer has same plan on each line." },
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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState({ headline: "", content: "", status: "inProgress" });

  const handleCloseDialog = e => {
    e.stopPropagation();
    console.log(e);
    setDialogOpen(false);
  };

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
      setDialogOpen(true);
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
      setDialogOpen(true);
    }
    if (statementsLength === 0 && !isCorrect) {
      setDialogData({
        headline: `Ooops that's not correct😥`,
        content: `Don't give up, I know you can do this!😉!`,
        status: "error",
      });
      setDialogOpen(true);
    }
  };

  return (
    <div className="prose max-w-[inherit] flex-1 p-8 md:p-4">
      <h1>Test your knowledge:</h1>
      <h4>
        Review this{" "}
        <a target="_blank" href="https://www.att.com/idpassets/images/support/pdf/Wireless-Sample-Bill-Guide1.pdf">
          bill
        </a>
        . Based on their content, sort the statements in the appropriate columns.
      </h4>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        <div id="quiz3-container" className="mb-8 flex h-full  flex-col gap-2 md:flex-row">
          {data.columnOrder.map(column => {
            return <Column key={data.columns[column].id} {...data.columns[column]} answers={data.answers} />;
          })}
        </div>
        <button className="btn-neutral btn w-full" onClick={onSubmit}>
          submit
        </button>
        <Dialog
          headline={dialogData.headline}
          content={dialogData.content}
          status={dialogData.status}
          open={dialogOpen}
          handleClose={handleCloseDialog}
        />
      </DragDropContext>
    </div>
  );
};

export default Quiz3;

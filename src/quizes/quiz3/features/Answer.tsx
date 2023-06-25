import { Draggable } from "react-beautiful-dnd";
import Handle from "./Handle";

const Answer = ({ id, index, content }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        // console.log(provided);
        return (
          <div
            {...provided.draggableProps}
            // {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="chat chat-start"
            // className={`chat chat-start ${snapshot.isDragging ? "bg-slate-300" : " bg-white"}`}
          >
            <div className="chat-bubble flex w-fit select-none items-center gap-4 ">
              <Handle {...provided.dragHandleProps} />
              <span>{content}</span>
            </div>
          </div>
          //   <div
          //     {...provided.draggableProps}
          //     ref={provided.innerRef}
          //     className={`mb-4 flex max-w-xs items-center gap-2 border-2 border-solid border-black px-4 py-2 ${
          //       snapshot.isDragging ? "bg-slate-300" : " bg-white"
          //     }`}
          //   >
          //     <Handle {...provided.dragHandleProps} />
          //     <div className="select-none ">{content}</div>
          //   </div>
        );
      }}
    </Draggable>
  );
};

export default Answer;

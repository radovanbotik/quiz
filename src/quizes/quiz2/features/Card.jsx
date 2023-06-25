import React from "react";
import { useDrag } from "react-dnd";

const Card = ({ title, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { title, id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(`you dropped ${item.title} into ${dropResult.title}`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  return (
    <div ref={drag} className="grid h-40 w-40 cursor-move place-content-center bg-blue-400 ">
      {title}
    </div>
  );
};

export default Card;

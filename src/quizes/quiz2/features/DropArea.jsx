import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";

const DropArea = ({ onDrop }) => {
  const [inventory, setInventory] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: item => {
      setInventory(prev => [...prev, item]), onDrop(item.id);
      return { title: "dropArea" };
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "bg-blue-800";
  if (isActive) {
    backgroundColor = "bg-blue-400";
  } else if (canDrop) {
    backgroundColor = "bg-blue-800";
  }

  return (
    <div ref={drop} className={`min-w-[200px] ${backgroundColor} flex flex-col gap-2`}>
      {isActive ? "release to drop" : "drag card here"}
      {inventory && inventory.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
};

export default DropArea;

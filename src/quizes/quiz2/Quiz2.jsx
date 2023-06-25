import React, { useState } from "react";
import DropArea from "./features/DropArea";
import Card from "./features/Card";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const cardsList = [
  {
    id: 1,
    title: "card-1",
  },
  {
    id: 2,
    title: "card-2",
  },
  {
    id: 3,
    title: "card-3",
  },
  {
    id: 4,
    title: "card-4",
  },
];

const Quiz2 = () => {
  const [cards, setCards] = useState(cardsList);

  const popCard = id => {
    setCards(prev => prev.filter(card => card.id != id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-full w-full gap-2">
        <DropArea onDrop={popCard} />
        <div className="flex gap-2">
          {cards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Quiz2;

import React from "react";
import Chat from "./features/Chat";

const Quiz1 = () => {
  return (
    <div className="mockup-window bg-red-400">
      <div className="flex h-full w-full justify-center overflow-auto bg-red-200 px-4 py-16 ">
        <Chat />
      </div>
    </div>
  );
};

export default Quiz1;

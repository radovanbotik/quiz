import React from "react";

const Bubble = ({ displayName, reply, imageUrl }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-16 rounded-full">
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <div className="chat-header">{displayName}</div>
      <div className="chat-bubble whitespace-pre-line">{reply}</div>
    </div>
  );
};

export default Bubble;

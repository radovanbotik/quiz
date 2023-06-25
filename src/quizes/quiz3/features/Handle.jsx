import React from "react";

const Handle = props => {
  //   return <div {...props} className="h-4 w-4 rounded-sm bg-orange-500"></div>;
  return (
    <div {...props} className="tooltip-warning tooltip tooltip-top" data-tip="Drag me around😲">
      {/* <button className="btn">Left</button> */}
      <div className="h-4 w-4 rounded-sm bg-orange-500"></div>
    </div>
  );
};

export default Handle;

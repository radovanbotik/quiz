/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
const Handle = props => {
  //   return <div {...props} className="h-4 w-4 rounded-sm bg-orange-500"></div>;
  return (
    <div {...props} className="tooltip-info lg:tooltip lg:tooltip-top" data-tip="Hold to drag">
      {/* <button className="btn">Left</button> */}
      <div className="h-4 w-4 rounded-sm bg-warning"></div>
    </div>
  );
};

export default Handle;

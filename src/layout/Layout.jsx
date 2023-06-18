import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-full w-full max-w-4xl">
      {/* <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="phone-1 artboard artboard-demo">{children}</div>
        </div>
      </div> */}
      {children}
    </div>
  );
};

export default Layout;

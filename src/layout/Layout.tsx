/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
const Layout = ({ children }) => {
  return (
    <div className="flex h-full w-full max-w-5xl items-center justify-center">
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

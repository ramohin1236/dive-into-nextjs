import React from "react";

const aboutLayout = ({ children }) => {
  return (
    <div className="flex h-screen gap-10 ">
      <div className="w-1/4 border border-b-blue-700"><h1>Side bar</h1></div>
      <div className="flex-1 border border-b-red-600 p-6">{children}</div>
    </div>
  );
};

export default aboutLayout;

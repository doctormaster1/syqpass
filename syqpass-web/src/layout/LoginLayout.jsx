import React from "react";

function LoginLayout({ children }) {
  return (
    <div >
      <div className="flex h-screen overflow-hidden">{children}</div>
    </div>
  );
}

export default LoginLayout;

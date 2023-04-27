import React from "react";

function LoginLayout({ children }) {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">{children}</div>
    </div>
  );
}

export default LoginLayout;

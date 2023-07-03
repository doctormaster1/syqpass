import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";
import ServerTable from "../components/Table/ServerTable";
import AddPassword from "../components/Popup/AddPassword";

function Password() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Passwords" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="grid grid-cols-12">
          <div className="col-span-11"></div>
          <div>
            <button
              className="inline-flex items-center justify-center bg-primary py-2 px-9 text-center font-medium text-white hover:bg-opacity-90 lg:px-7 xl:px-9"
              onClick={handleOpenDialog}
            >
              <span>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#000000"
                    fillRule="evenodd"
                    d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
                  />
                </svg>
              </span>
              Add
            </button>
            {isOpen && <AddPassword onClose={handleCloseDialog}></AddPassword>}
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-col gap-10">
        <div className="col-span-12 xl:col-span-8">
          <ServerTable />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Password;

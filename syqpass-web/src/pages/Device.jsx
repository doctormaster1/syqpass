import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";

function Device() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Device" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">Device</div>
      </div>
    </DefaultLayout>
  );
}

export default Device;

import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import DeviceTable from "../components/DeviceTable";
import Breadcrumb from "../components/Breadcrumb";

function Device() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Devices" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">Devices</div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="col-span-12 xl:col-span-8">
          <DeviceTable />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Device;

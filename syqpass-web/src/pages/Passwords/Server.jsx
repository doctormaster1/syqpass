import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import ServerTable from "../../components/Table/ServerTable"

function Server() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Server" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          butonlar burda
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="col-span-12 xl:col-span-8">
          <ServerTable />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Server;

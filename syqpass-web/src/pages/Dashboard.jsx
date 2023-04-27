import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";
import CardThree from "../components/CardThree";
import CardFour from "../components/CardFour";
import TableThree from "../components/TableThree";

const Analytics = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
      <br />
      <div className="flex flex-col gap-10">
        <div className="col-span-12 xl:col-span-8">
          <TableThree />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Analytics;

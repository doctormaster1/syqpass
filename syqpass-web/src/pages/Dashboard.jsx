import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";
import CardThree from "../components/CardThree";
import CardFour from "../components/CardFour";
import TableThree from "../components/TableThree";

const Dashboard = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        {/* <CardTwo />
        <CardThree /> */}
        <CardFour />
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;

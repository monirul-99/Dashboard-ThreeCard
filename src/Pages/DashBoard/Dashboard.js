import React from "react";
import SectionA from "../SectionA/SectionA";
import SectionB from "../SectionB/SectionB";

const Dashboard = () => {
  return (
    <>
      <section></section>
      <section className="px-10 grid grid-cols-12 gap-5">
        <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black rounded-2xl grid col-span-4 justify-center h-80">
          <div className="flex items-center">
            <div className="font-Poppins">
              <h1 className="text-xl text-white mb-5">Runway</h1>
              <p className="text-white mb-2">Spending (MTD)</p>
              <h1 className="text-white text-5xl">$1,053</h1>
            </div>
            <div className="">
              <SectionB />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black rounded-2xl py-10 grid col-span-8">
          <div>
            <div className="pl-8 space-y-3 mb-10">
              <h1 className="text-3xl font-Ubuntu text-white mb-10">
                Bank Balances
              </h1>
              <p className="text-white font-Ubuntu">
                January 8th Total Balance
              </p>
              <h1 className="text-4xl text-white font-Ubuntu font-light">
                $40, 009 <span className="text-xl text-red-600">-3%</span>
              </h1>
            </div>
            <SectionA />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

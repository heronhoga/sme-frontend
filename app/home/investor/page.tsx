"use client";
import React, { useState, useEffect } from "react";
import InvestorSidebar from "@/my-components/investor-sidebar";
import DoughnutChart from "@/charts/charts";

function HomeUkm() {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    setUsername(localStorage.getItem("username") ?? "");
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <InvestorSidebar username={username} />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 shadow-lg">
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Each of these divs can be a section */}
            <div className="flex flex-col items-center justify-center rounded bg-gray-50 font-bold h-52 shadow-lg">
              <p className="text-2xl text-black dark:text-gray-500">
                Total Investment
              </p>
              <p className="text-5xl text-orange-500">$45,000,000</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center rounded bg-gray-50 h-[684px] dark:bg-gray-800 shadow-lg">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    className="w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>

          <p className="font-bold text-xl">Portfolio overviews</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Each of these divs can be a section */}
            <div className="flex flex-row gap-16 items-center justify-center rounded bg-gray-50 h-52 bg-gradient-to-r from-orange-600 to-orange-300 text-white font-bold shadow-lg">
              <p className="text-5xl">$45,000,000</p>
              <p className="text-5xl dark:text-gray-500">Personal</p>
            </div>
          </div>

          <p className="font-bold text-xl">Investment breakdown</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="relative flex flex-row gap-20 items-center justify-center rounded bg-gray-50 h-52 bg-gradient-to-r from-orange-600 to-orange-300 text-white font-bold shadow-lg">
              <div
                id="half-doughnut-chart"
                className="relative flex items-center justify-center"
              >
                <DoughnutChart data={undefined} options={undefined} />
                <p className="absolute text-lg top-2/3">67% Total Growth</p>
              </div>
              <p className="text-5xl dark:text-gray-500">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUkm;

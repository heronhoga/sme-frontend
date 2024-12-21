"use client";
import React, { useState, useEffect } from "react";
import InvestorSidebar from "@/my-components/investor-sidebar";
import DoughnutChart from "@/charts/doughnutChart";
import ukmData from "@/data/ukm.json";

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
            <div className="flex flex-col items-center justify-center rounded bg-gray-50 font-bold h-40 shadow-lg">
              <p className="text-2xl text-black dark:text-gray-500">
                Total Investment
              </p>
              <p className="text-5xl text-orange-500">$45,000,000</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex flex-col items-center justify-start rounded bg-gray-50 h-[550px] dark:bg-gray-800 shadow-lg p-4 space-y-4 overflow-y-auto">
                {ukmData.cards.map((card) => (
                  card.invested === "yes" && (
                    <div
                    key={card.id}
                    className="flex items-center bg-white dark:bg-gray-700 rounded shadow-md p-4 w-full"
                  >
                    {/* Image */}
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Content */}
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Total Investment: {card.investAmount}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-300">
                        Invest Date: {card.investDate}
                      </p>
                    </div>
                  </div>
                  )
                ))}

                {/* "Lihat selengkapnya" Card */}
                <div className="flex items-center rounded p-4 w-full mt-4">
                  <p className="text-center text-orange-500 font-semibold">
                    <a href="/ukm">Lihat selengkapnya</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="font-bold text-xl">Portfolio overviews</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Each of these divs can be a section */}
            <div className="flex flex-row gap-16 items-center justify-center rounded bg-gray-50 h-40 bg-gradient-to-r from-orange-600 to-orange-300 text-white font-bold shadow-lg">
              <p className="text-2xl">$45,000,000</p>
              <p className="lg:text-2xl dark:text-gray-500">Personal</p>
            </div>
          </div>

          <p className="font-bold text-xl">Investment breakdown</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="relative flex flex-row gap-20 items-center justify-center rounded bg-gray-50 h-40 bg-gradient-to-r from-orange-600 to-orange-300 text-white font-bold shadow-lg">
              <div
                id="half-doughnut-chart"
                className="relative flex items-center justify-center w-56 h-56"
              >
                <DoughnutChart data={undefined} options={undefined} />
                <p className="absolute text-md top-2/3">67% Total Growth</p>
              </div>
              <p className="text-2xl dark:text-gray-500">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUkm;

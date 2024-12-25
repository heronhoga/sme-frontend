"use client";
import React, { useState, useEffect } from "react";
import UkmSidebar from "@/my-components/ukm-sidebar";
import UkmBarChart from "@/charts/ukmBarChart";

function HomeUkm() {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    setUsername(localStorage.getItem("username") ?? "");
  }, []);

  const currentDate = new Date().toLocaleDateString();

  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 10))
  );
  const [endDate, setEndDate] = useState(new Date());

  const formatDate = (date: any) => date.toISOString().split("T")[0];

  const shiftDates = (direction: any) => {
    const shiftDays = direction === "backward" ? -1 : 1;
    setStartDate(new Date(startDate.setDate(startDate.getDate() + shiftDays)));
    setEndDate(new Date(endDate.setDate(endDate.getDate() + shiftDays)));
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <UkmSidebar username={username} />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div id="navbar">
          <div className="flex items-center justify-between bg-gradient-to-t from-[#209cff] to-[#68e0cf] p-4 rounded shadow-md">
            <h1 className="text-2xl font-bold text-white">Ukm - {username}</h1>
          </div>
        </div>

        <div
          id="main-details-content"
          className="border-2 border-gray-200 rounded-lg m-4 h-[500px] p-2 overflow-y-auto flex flex-col items-center justify-start"
        >
          <div
            id="header-text"
            className="text-center text-lg font-bold italic"
          >
            Your Business Performance
          </div>
          <div className="flex justify-between w-full mt-2 space-x-2">
            <div className="flex-1 border-2 border-blue-300 p-2 rounded-lg">
              <div className="mb-4 flex items-center justify-center space-x-4">
                <button
                  onClick={() => shiftDates("backward")}
                  className="text-blue-400 font-semibold px-2 py-1 border border-blue-300 rounded-lg hover:bg-blue-100"
                >
                  ←
                </button>
                <div className="text-blue-400 font-semibold text-[12px]">
                  {formatDate(startDate)} until {formatDate(endDate)}
                </div>
                <button
                  onClick={() => shiftDates("forward")}
                  className="text-blue-400 font-semibold px-2 py-1 border border-blue-300 rounded-lg hover:bg-blue-100"
                >
                  →
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  id="traffic"
                  className="border border-blue-400 rounded-lg p-2 text-center shadow-lg flex-1"
                >
                  <p className="text-blue-400">Traffic</p>
                  <p className="text-blue-400">2,000</p>
                </div>

                <div
                  id="sales"
                  className="border border-blue-400 rounded-lg p-2 text-center shadow-lg flex-1"
                >
                  <p className="text-blue-400">Sales</p>
                  <p className="text-blue-400">1,210</p>
                </div>

                <div
                  id="conversion"
                  className="border border-blue-400 rounded-lg p-2 text-center shadow-lg flex-1"
                >
                  <p className="text-blue-400">Conversion</p>
                  <p className="text-blue-400">50%</p>
                </div>
              </div>
              <div className="mt-4">
                <UkmBarChart data={undefined} options={undefined} />
              </div>
            </div>
            <div className="flex-1 border-2 border-blue-300 p-2 rounded-lg">
              <div className="mb-4 flex items-center justify-center space-x-4">
                <button
                  onClick={() => shiftDates("backward")}
                  className="text-blue-400 font-semibold px-2 py-1 border border-blue-300 rounded-lg hover:bg-blue-100"
                >
                  ←
                </button>
                <div className="text-blue-400 font-semibold text-[12px]">
                  {formatDate(startDate)} until {formatDate(endDate)}
                </div>
                <button
                  onClick={() => shiftDates("forward")}
                  className="text-blue-400 font-semibold px-2 py-1 border border-blue-300 rounded-lg hover:bg-blue-100"
                >
                  →
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  id="traffic"
                  className="border border-blue-400 rounded-lg p-2 text-center shadow-lg flex-1"
                >
                  <p className="text-blue-400">Traffic</p>
                  <p className="text-blue-400">2,000</p>
                </div>

                <div
                  id="sales"
                  className="border border-blue-400 rounded-lg p-2 text-center shadow-lg flex-1"
                >
                  <p className="text-blue-400">Sales</p>
                  <p className="text-blue-400">1,210</p>
                </div>

                <div
                  id="conversion"
                  className="border border-blue-400 rounded-lg p-2 text-center shadow-lg flex-1"
                >
                  <p className="text-blue-400">Conversion</p>
                  <p className="text-blue-400">50%</p>
                </div>
              </div>
              <div className="mt-4">
                <UkmBarChart data={undefined} options={undefined} />
              </div>
            </div>
            <div className="flex-1 border-2 border-blue-300 p-2 rounded-lg text-blue-400 relative">
              <div className="flex justify-between items-center">
                <span>Performance MSMEs</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Download
                </button>
              </div>
              <div className="mt-4">{currentDate}</div>
              <div id="table" className=" overflow-auto">
                <div id="table" className="mt-4 overflow-x-auto">
                  <div id="table" className="mt-4 overflow-x-auto">
                    <table className="min-w-full border-collapse border border-blue-300">
                      <thead>
                        <tr>
                          <th className="border border-blue-300 p-2 text-left">
                            Name
                          </th>
                          <th className="border border-blue-300 p-2 text-left">
                            Sales
                          </th>
                          <th className="border border-blue-300 p-2 text-left">
                            Cost
                          </th>
                          <th className="border border-blue-300 p-2 text-left">
                            Profit
                          </th>
                          <th className="border border-blue-300 p-2 text-left">
                            Time Business
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-blue-300 p-2">Budi</td>
                          <td className="border border-blue-300 p-2">200</td>
                          <td className="border border-blue-300 p-2">150</td>
                          <td className="border border-blue-300 p-2">50</td>
                          <td className="border border-blue-300 p-2">
                            8:00 AM
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 p-2">Siti</td>
                          <td className="border border-blue-300 p-2">300</td>
                          <td className="border border-blue-300 p-2">200</td>
                          <td className="border border-blue-300 p-2">100</td>
                          <td className="border border-blue-300 p-2">
                            9:30 AM
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 p-2">Andi</td>
                          <td className="border border-blue-300 p-2">150</td>
                          <td className="border border-blue-300 p-2">120</td>
                          <td className="border border-blue-300 p-2">30</td>
                          <td className="border border-blue-300 p-2">
                            10:15 AM
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 p-2">Rani</td>
                          <td className="border border-blue-300 p-2">400</td>
                          <td className="border border-blue-300 p-2">350</td>
                          <td className="border border-blue-300 p-2">50</td>
                          <td className="border border-blue-300 p-2">
                            11:00 AM
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 p-2">Eka</td>
                          <td className="border border-blue-300 p-2">250</td>
                          <td className="border border-blue-300 p-2">180</td>
                          <td className="border border-blue-300 p-2">70</td>
                          <td className="border border-blue-300 p-2">
                            1:45 PM
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full mt-2 space-x-2">
            <div className="flex-1 border-2 border-blue-300 p-1 rounded-lg">
              Day
            </div>
            <div className="flex-1 border-2 border-blue-300 p-1 rounded-lg">
              Week
            </div>
            <div className="flex-1 border-2 border-blue-300 p-1 rounded-lg">
              Month
            </div>
            <div className="flex-1 border-2 border-blue-300 p-1 rounded-lg">
              Year
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUkm;

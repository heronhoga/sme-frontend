"use client";
import React, { useState, useEffect } from "react";
import InvestorSidebar from "@/my-components/investor-sidebar";
import ukmData from "@/data/ukm.json";

function Ukm() {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    setUsername(localStorage.getItem("username") ?? "");
  }, []);
  return (
    <div className="flex min-h-screen">
      <InvestorSidebar username={username} />
      <div className="flex-1 p-4">
        <div id="navbar">
          <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-300 p-4 rounded shadow-md">
            <h1 className="text-2xl font-bold text-white">Daftar UKM</h1>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <svg
                className="w-5 h-5 text-gray-500 absolute right-2 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-3.5-3.5M11 11a4 4 0 110-8 4 4 0 010 8z"
                />
              </svg>
            </div>
            <div className="relative">
              <select className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option value="">Filter by</option>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </div>

        <div
          id="card-list"
          className="border-2 border-gray-200 rounded-lg m-4 h-[500px] p-4 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {ukmData.cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
            >
              {/* Image */}
              <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">
                {card.title}
              </h3>

              {/* Button */}
              <button
                onClick={() => (window.location.href = `/ukm/${card.id}`)}
                className="mt-4 px-4 py-2 bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-700"
              >
                Lihat detail
              </button>

              {/* invest status */}
              {card.invested === "yes" && (
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center flex items-center justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p>
                    {card.investAmount} - {card.investDate}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ukm;

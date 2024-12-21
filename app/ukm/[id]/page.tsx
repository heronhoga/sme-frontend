"use client";
import React, { useState, useEffect } from "react";
import InvestorSidebar from "@/my-components/investor-sidebar";
import ukmData from "@/data/ukm.json";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

function UkmDetail() {
  const [username, setUsername] = useState<string>("");
  const id = useParams();

  const selectedUkm = ukmData.cards.find((card) => String(card.id) === id.id);

  useEffect(() => {
    setUsername(localStorage.getItem("username") ?? "");
  }, []);
  return (
    <div className="flex min-h-screen">
      <InvestorSidebar username={username} />
      <div className="flex-1 p-4">
        <div id="navbar">
          <div className="flex items-center justify-between bg-gradient-to-t from-orange-500 to-orange-300 p-4 rounded shadow-md">
            <h1 className="text-2xl font-bold text-white">
              {selectedUkm?.title}
            </h1>
            <div className="relative">
              <button
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 text-white hover:text-gray-200 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-lg font-medium">Back</span>
              </button>
            </div>
          </div>
        </div>

        <div
          id="main-details-content"
          className="border-2 border-gray-200 rounded-lg m-4 h-[500px] p-4 overflow-y-auto flex"
        >
          {/* Left Column */}
          <div className="flex-1 pr-4 border-r border-gray-300">
            {/* Content for the left column goes here */}
            <p className="text-center text-3xl border border-black rounded-lg shadow-md">
              Profil {selectedUkm?.title}
            </p>
            {/* image */}
            <img
              src={selectedUkm?.imageUrl}
              alt={selectedUkm?.title}
              className="w-full h-[150px] object-cover rounded-lg shadow-md mt-4"
            />
            {/* content */}
            <div
              id="description"
              className="mt-4 border border-dashed border-gray-300 rounded-lg p-4 text-justify"
            >
              {selectedUkm?.profile}
            </div>

            {/* invest status */}
            <div
              id="invest-status"
              className="mt-4 bg-gradient-to-tr from-orange-500 to-orange-300 text-white rounded-lg p-4"
            >
              <p className="border border-1 inline-block border-white rounded-lg p-2 flex items-center">
                {selectedUkm?.invested === "yes" ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Invested
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Not Invested
                  </>
                )}
              </p>

              {selectedUkm?.invested === "no" && (
                <Button className="bg-white text-orange-600 rounded-lg p-2 mt-2">
                  Invest Now
                </Button>
              )}

              {selectedUkm?.invested === "yes" && (
                <div className="mt-2 border border-1 border-white rounded-lg px-2">
                  <p>Invest amount: {selectedUkm?.investAmount}</p>
                  <p>Started invest from: {selectedUkm?.investDate}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 pl-4">
            {/* Content for the right column goes here */}
            <p>Right Column Content</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UkmDetail;

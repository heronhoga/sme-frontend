"use client";
import React, { useState, useEffect } from "react";
import UkmSidebar from "@/my-components/ukm-sidebar";
import LineChart from "@/charts/lineChart";
import {
  lineChartOptions,
  revenueLineChartData,
  netProfitLineChartData,
} from "@/charts/config";

function CashFlowStatement() {
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  useEffect(() => {
    setUsername(localStorage.getItem("username") ?? "");
    setFirstName(localStorage.getItem("firstName") ?? "");
    setLastName(localStorage.getItem("lastName") ?? "");
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <UkmSidebar username={username} />

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div id="navbar">
          <div className="flex items-center justify-between bg-gradient-to-t from-[#209cff] to-[#68e0cf] p-4 rounded shadow-md">
            <h1 className="text-2xl font-bold text-white">
              Ukm - {firstName} {lastName}
            </h1>
          </div>
        </div>

        <div
          id="main-details-content"
          className="border-2 border-gray-200 rounded-lg m-4 h-auto p-2 overflow-y-auto flex flex-col items-center justify-start"
        >
          <div
            id="header-text"
            className="text-center text-xl font-bold italic border border-blue-400 rounded-lg bg-gradient-to-r from-[#209cff] to-[#68e0cf] p-4 text-white w-full"
          >
            Laporan Keuangan
          </div>
          <div className="flex flex-row gap-4 mt-5 w-full">
            <div
              id="left-content"
              className="border border-gray-300 p-4 w-full bg-white rounded shadow items-center justify-center"
            >
              <div className="flex justify-center items-center w-full max-w-md mx-auto gap-x-2">
                <div className="text-blue-700 border border-blue-400 rounded-sm p-3 hover:bg-blue-400 hover:text-white">
                  2024
                </div>
                <div className="text-blue-700 border border-blue-400 rounded-sm p-3 hover:bg-blue-400 hover:text-white">
                  2023
                </div>
                <div className="text-blue-700 border border-blue-400 rounded-sm p-3 hover:bg-blue-400 hover:text-white">
                  2022
                </div>
                <div className="text-blue-700 border border-blue-400 rounded-sm p-3 hover:bg-blue-400 hover:text-white">
                  Lainnya
                </div>
              </div>

              <div className="flex items-center w-full mx-auto justify-around gap-x-2 mt-5">
                <div className="border w-2/3 border-blue-400 rounded-lg bg-blue-400 text-white p-4 text-center">
                  Cash Flow Statement
                </div>
                <div className="border w-1/3 border-blue-400 rounded-lg bg-blue-400 text-white p-4 text-center">
                  Jumlah (Juta)
                </div>
              </div>

              <div className="flex items-center w-full mx-auto justify-around gap-x-2 mt-5">
                <div className="border w-full border-blue-400 bg-blue-400 text-white p-4 text-center">
                  Arus Kas dari Aktivitas Operasi
                </div>
              </div>

              <div className="flex items-center w-full mx-auto justify-around">
                <div className="border w-2/3 border-blue-400 p-4 text-center">
                  Penjualan barang/jasa
                </div>
                <div className="border w-1/3 border-blue-400  p-4 text-center">
                  90
                </div>
              </div>
              <div className="flex items-center w-full mx-auto justify-around">
                <div className="border w-2/3 border-blue-400 p-4 text-center">
                  Pendapatan lain-lain
                </div>
                <div className="border w-1/3 border-blue-400  p-4 text-center">
                  12
                </div>
              </div>
              <div className="flex items-center w-full mx-auto justify-around">
                <div className="border w-2/3 border-blue-400 p-4 text-center">
                  Biaya Operasional
                </div>
                <div className="border w-1/3 border-blue-400  p-4 text-center">
                  70
                </div>
              </div>
              <div className="flex items-center w-full mx-auto justify-around">
                <div className="border w-2/3 border-blue-400 p-4 text-center font-bold">
                  Arus Kas Bersih dari Operasi
                </div>
                <div className="border w-1/3 border-blue-400  p-4 text-center font-bold">
                  32
                </div>
              </div>

              <div className="flex items-center w-full mx-auto justify-around gap-x-2">
                <div className="border w-full border-blue-400 bg-blue-400 text-white p-4 text-center">
                  Arus Kas dari Investasi
                </div>
              </div>
              <div className="flex items-center w-full mx-auto justify-around">
                <div className="border w-2/3 border-blue-400 p-4 text-center">
                  Pembelian Aset
                </div>
                <div className="border w-1/3 border-blue-400  p-4 text-center">
                  0
                </div>
              </div>
              <div className="flex items-center w-full mx-auto justify-around">
                <div className="border w-2/3 border-blue-400 p-4 text-center">
                  Penjualan Aset
                </div>
                <div className="border w-1/3 border-blue-400  p-4 text-center">
                  12
                </div>
              </div>
              <div className="flex items-center w-full mx-auto justify-around">
                <div className="border w-2/3 border-blue-400 p-4 text-center font-bold">
                  Arus Kas Bersih dari Investasi
                </div>
                <div className="border w-1/3 border-blue-400  p-4 text-center font-bold">
                  20
                </div>
              </div>
              {/* <table className="table-auto w-full border-collapse border border-gray-300 mt-5">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 bg-black text-white">
                      Keterangan
                    </th>
                    <th className="border border-gray-300 px-4 py-2 bg-black text-white">
                      Jumlah
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Pendapatan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">102</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Harga Pokok Penjualan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">40</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Laba Kotor
                    </td>
                    <td className="border border-gray-300 px-4 py-2">62</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Beban Operasional
                    </td>
                    <td className="border border-gray-300 px-4 py-2">(35)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Laba Usaha
                    </td>
                    <td className="border border-gray-300 px-4 py-2">27</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Pendapatan Lain-lain
                    </td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Beban Lain-lain
                    </td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Laba Bersih Sebelum Pajak
                    </td>
                    <td className="border border-gray-300 px-4 py-2">28</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Pajak Penghasilan
                    </td>
                    <td className="border border-gray-300 px-4 py-2">4</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Laba Bersih
                    </td>
                    <td className="border border-gray-300 px-4 py-2">24</td>
                  </tr>
                </tbody>
              </table> */}
            </div>

            <div
              id="right-content"
              className="border border-gray-300 p-4 bg-white rounded shadow"
            >
              <div id="revenue-chart" className="p-2 border border-dashed">
                <h2 className="text-lg font-semibold mb-2 text-center">
                  Pemasukan
                </h2>
                <div>
                  <LineChart
                    data={revenueLineChartData}
                    options={lineChartOptions}
                  />
                </div>
              </div>

              <div
                id="net-profit-chart"
                className="p-2 border border-dashed mt-5"
              >
                <h2 className="text-lg font-semibold mb-2 text-center">
                  Net Profit
                </h2>
                <div>
                  <LineChart
                    data={netProfitLineChartData}
                    options={lineChartOptions}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashFlowStatement;

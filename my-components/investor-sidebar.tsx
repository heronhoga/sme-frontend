"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

//icons
import { UserPen, Store, LayoutDashboard, Settings } from "lucide-react";

function InvestorSidebar({ username }: { username: string }) {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className="w-64 min-h-screen bg-gradient-to-t from-orange-600 to-orange-300 flex flex-col text-white">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center p-4 border-b ">
        <div id="image-sidebar">
          <Image src="/images/icon.png" alt="Logo" width={128} height={128} />
        </div>
        <h1
          className="text-2xl font-semibold p-3 border rounded-xl border-t-4"
          style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 1)" }}
        >
          Investor
        </h1>
      </div>

      {/* Sidebar Menu */}
      <div className="flex flex-col p-4 space-y-2">
        <div className="text-lg">
          <p
            className="font-semibold text-center text-xl"
            style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 1)" }}
          >
            Halo, {username}!
          </p>
        </div>

        <hr />

        <div>
          <Link
            href="/home/investor"
            className="py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center"
          >
            <LayoutDashboard />
            <p className="ml-5">Dashboard</p>
          </Link>
          <Link
            href="/profile"
            className="py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center"
          >
            <UserPen />
            <p className="ml-5">Profil</p>
          </Link>

          <Link
            href="/ukm"
            className="py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center"
          >
            <Store />
            <p className="ml-5">Ukm</p>
          </Link>
          <Link
            href="/ukm"
            className="py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200 flex items-center"
          >
            <Settings />
            <p className="ml-5">Pengaturan</p>
          </Link>
          <hr className="my-2" />
          <Link
            href="#"
            className="block py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            <Button
              variant={"destructive"}
              onClick={handleLogout}
              className="shadow-md"
            >
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InvestorSidebar;

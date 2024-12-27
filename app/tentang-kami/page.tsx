import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function TentangKami() {
  return (
    <div>
      <div className="bg-gradient-to-t from-[#209cff] to-[#68e0cf] min-h-screen">
        <div id="menu-bar" className="text-white flex items-center font-semibold">
          <Image
            className="w-24 sm:w-32 md:w-44 ml-10"
            src="/images/icon.png"
            alt="Logo"
            width={1000}
            height={1000}
          />

          <div className="ml-auto sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-black mr-4 w-16 sm:w-20 md:w-24">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-8 h-8"
                  >
                    <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"></path>
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/login">Masuk</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/register">Daftar</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <nav className="ml-auto hidden sm:block">
            <ul className="mr-8 text-lg sm:text-xl md:text-2xl">
              <li className="inline-block mr-8">
                <Link href="/">Beranda</Link>
              </li>
              <li className="inline-block mr-8">
                <Link href="/tentang-kami">Tentang Kami</Link>
              </li>
              <li className="inline-block mr-8">
                <Link href="/login">Masuk</Link>
              </li>
              <li className="inline-block mr-4">
                <Link
                  href="/register"
                  className="border border-white p-5 rounded-xl"
                >
                  Daftar
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="px-10">
          <hr className="border-t-4" />
        </div>

        <div id="main-content" className="p-4 text-center mt-10 flex flex-col md:flex-row">
          <div id="text-content" className="text-justify md:mt-10">
            <h1
              className="text-white font-bold text-3xl sm:text-5xl md:text-7xl text-center"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
            >
              Join Us!
            </h1>

            <p className="mt-10 mx-10 text-white font-semibold text-lg sm:text-xl md:text-2xl">
              <span>Niago</span> merupakan platform yang memberikan kemudahan untuk menampung
              investasi dan pengembangan UKM. Kami menyediakan berbagai layanan untuk memudahkan
              pengelolaan investasi bagi investor dan pendanaan UKM!
            </p>
          </div>
        </div>


      </div>

      <footer className="bg-gray-800 text-white p-4 text-center">
          <div>
            <p>&copy; 2024 Niago. All rights reserved.</p>
          </div>
        </footer>
    </div>
  );
}

export default TentangKami;

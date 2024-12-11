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

function Home() {
  return (
    <div>
      <div className="bg-gradient-to-t from-[#209cff] to-[#68e0cf] min-h-screen">
        <div
          id="menu-bar"
          className="text-white flex items-center font-semibold"
        >
          <Image
            className="w-24 sm:w-32 md:w-44 ml-10"
            src="/images/icon.png"
            alt="Logo"
            width={1000}
            height={1000}
          />

          <div className="ml-auto sm:hidden">
            {/* Push the button to the right */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-black mr-4 w-16">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="36em"
                    width="36em"
                    xmlns="http://www.w3.org/2000/svg"
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

          <div className="ml-auto hidden sm:block">
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
          </div>
        </div>

        <div className="px-10">
          <hr className="border-t-4" />
        </div>

        <div
          id="main-content"
          className="p-4 text-center mt-10 flex flex-col md:flex-row"
        >
          <div
            id="text-content"
            className="text-justify md:mt-10 ml-10 sm:ml-24 md:ml-40 md:w-1/2"
          >
            <h1
              className="text-white font-bold text-3xl sm:text-5xl md:text-7xl"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
            >
              Foster Your Potential With US!
            </h1>

            <p className="mt-10 text-white font-semibold text-xl sm:text-2xl md:text-3xl">
              Wadah investasi terpercaya sekaligus pengembangan potensi bisnismu
              dengan menjadi bagian dari FundiFY
            </p>

            <Link href="/register">
              <Button
                variant="link"
                className="text-slate-100 bg-sky-700 mt-4 md:mt-10 font-bold p-8 w-48 rounded-2xl"
              >
                Daftar Sekarang!
              </Button>
            </Link>
          </div>

          <div
            id="image-content"
            className="w-full md:w-1/4 flex justify-center aspect-w-16 aspect-h-9 mt-10"
          >
            <Image
              className="object-contain"
              src="/images/smepic.png"
              alt="SME"
              layout="responsive"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

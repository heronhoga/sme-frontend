import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div>
      <div className="bg-slate-100 min-h-screen">
        <div
          id="menu-bar"
          className="bg-sky-700 text-white flex items-center"
        >
          <Image
            className="w-24 sm:w-32 md:w-40 ml-4"
            src="/images/sme.png"
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
                <Link href="/login">Masuk</Link>
              </li>
              <li className="inline-block mr-4">
                <Link href="/register">Daftar</Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="jumbotron-image"m className="mt-10 mx-10 sm:mx-24 md:mx-48">
          <Image
            className="w-full h-64 object-cover filter saturate-50 brightness-50 rounded-lg shadow-lg"
            src="/images/ukm.jpg"
            alt="ukm"
            width={5445}
            height={3637}
          />
        </div>

        <div id="main-content" className="p-4 text-center">
          <div
            id="text-content"
            className="text-justify mt-4 md:mt-10 mx-10 sm:mx-24 md:mx-48"
          >
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti ante
              et dolor rutrum ut non curabitur primis. Mus ligula ex porttitor
              elementum mattis fusce turpis. Orci aliquet primis hendrerit
              auctor non duis maecenas. Urna hac faucibus curae dui felis vitae
              taciti. Tincidunt mauris nascetur integer facilisis vehicula.
            </p>

            <p className="mt-4 md:mt-10">
              Cras hac iaculis purus orci volutpat diam. Tempor facilisi aptent
              enim dolor efficitur vestibulum, ex id senectus? Convallis dapibus
              mi primis mus orci netus ullamcorper aliquet. Pharetra mi nascetur
              ut ac suspendisse sodales eros fringilla! Placerat diam donec
              semper mi nisl. Suscipit eget aliquet nullam vitae congue
              bibendum, blandit euismod elementum. Morbi adipiscing odio non
              velit; est turpis. Inceptos porta sollicitudin senectus curae;
              mattis purus porttitor. Habitasse habitasse suscipit ridiculus;
              cras velit ultrices. Per scelerisque faucibus nam nisi commodo
              tortor in vitae.
            </p>

            <p className="mt-4 md:mt-10">
              Libero amet malesuada enim fusce ac rutrum magnis habitasse. Nisi
              fringilla donec volutpat tortor id. Euismod metus aenean himenaeos
              venenatis etiam. Primis ex hendrerit tempor, vitae velit penatibus
              purus morbi. Mus cras sem lacus urna purus malesuada. Fames
              accumsan litora leo ullamcorper consequat condimentum maximus.
              Primis quam cras torquent nostra at ad. Mauris vel per vel purus
              per per conubia semper.
            </p>

            <Link href="/register">
              <Button
                variant="link"
                className="text-slate-100 bg-sky-700 mt-4 md:mt-10 font-bold p-8 w-48"
              >
                Daftar Sekarang!
              </Button>
            </Link>
          </div>
        </div>

        <div id="footer" className="mt-4 md:mt-10 mx-10 sm:mx-24 md:mx-48">
          <p className="text-center">
            &copy; {new Date().getFullYear()} 1000x Innovate
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

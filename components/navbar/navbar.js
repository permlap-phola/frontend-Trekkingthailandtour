import Image from "next/image";
import React, { useState } from "react";
import Facebook from "../contact-logo/facebook";
import Line from "../contact-logo/line";
import Phone from "../contact-logo/phone";
import { useRouter } from "next/router";

function Navbar() {
  const [activeMenu, setActivemenu] = useState(false);
  const router = useRouter();
  const handleTriggerMenu = () => {
    setActivemenu(() => !activeMenu);
    if (activeMenu === true) {
      document.body.style.overflow = "hidden";
    } else if (activeMenu === false) {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <nav className=" top-5 w-full fixed z-50   ">
      {/* Phone navbar */}
      <ul className="pl-0 md:hidden list-none flex justify-between font-Poppins z-20 ">
        <li
          role="button"
          onClick={handleTriggerMenu}
          className={`ml-3 w-56 pr-3  gap-2 h-10 ring-2  ${
            activeMenu
              ? "bg-supper-main-color ring-white flex-row-reverse z-20"
              : "bg-main-color ring-main-color flex-row "
          }
         rounded-full overflow-hidden drop-shadow-md relative flex justify-between items-center text-third-color`}
        >
          <div
            className={`${
              activeMenu
                ? "translate-x-3 ring-white "
                : "translate-x-0 ring-main-color "
            } transition duration-150 w-10 h-10 rounded-full overflow-hidden relative  ring-2 `}
          >
            <Image
              src="/logo/logo.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />
          </div>
          {activeMenu ? (
            <span className="text-xs ml-10 font-semibold">CLOSE MENU</span>
          ) : (
            <span className="text-xs font-semibold">
              TREKKING THAILAND TOUR
            </span>
          )}
        </li>
        <li className="mr-2 flex justify-center items-center gap-2">
          <a
            target="_blank"
            href="https://www.facebook.com/trekkingthailandtour"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <Line />
          <Phone />
        </li>
      </ul>
      <div
        className={`bg-supper-main-color md:hidden gap-10 flex justify-center flex-col items-center w-full h-screen transition duration-150 fixed top-0 ${
          activeMenu ? "translate-y-0" : "-translate-y-[60rem]"
        } `}
      >
        <button
          onClick={() => {
            router.push({
              pathname: "/",
            });
            setActivemenu(() => false);
          }}
          className=" bg-white px-10 py-2 active:ring-main-color active:ring-2
         font-medium text-main-color rounded-md drop-shadow-md"
        >
          Homepage
        </button>
        <button
          onClick={() => {
            router.push({
              pathname: "/package",
            });
            setActivemenu(() => false);
          }}
          className=" bg-white px-10 py-2 active:ring-main-color active:ring-2
         font-medium text-main-color rounded-md drop-shadow-md"
        >
          Package
        </button>
      </div>

      {/* Desktop view */}
      <ul className="hidden md:flex justify-center gap-10 pl-0 list-none ">
        <li
          onClick={() =>
            router.push({
              pathname: "/",
            })
          }
          role="button"
          className={`ml-3 w-56 pr-3  gap-2 h-10 ring-2 bg-main-color ring-main-color flex-row
         rounded-full overflow-hidden drop-shadow-md relative flex justify-between items-center text-third-color`}
        >
          <div
            className={`
             translate-x-0 ring-main-color 
            transition duration-150 w-10 h-10 rounded-full overflow-hidden relative  ring-2 `}
          >
            <Image
              src="/logo/logo.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />
          </div>

          <span className="text-xs font-semibold">TREKKING THAILAND TOUR</span>
        </li>
        <ul className="pl-0 mr-10 flex gap-10">
          <li
            onClick={() =>
              router.push({
                pathname: "/package",
              })
            }
            role="button"
            className=" bg-white lg:px-10 md:px-5 py-2 active:ring-main-color active:ring-2
         font-medium text-main-color rounded-md drop-shadow-md"
          >
            Package
          </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;

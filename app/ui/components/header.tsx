// import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { geistMono } from "../fonts";

export default function Header() {
  return (
    <div
      className={`${geistMono.className} antialiased header flex items-center justify-between w-100 px-3  md:px-2.5 lg:px-5 py-5`}
    >
      <div className={` name text-3xl lg:text-3xl font-bold cursor-pointer`}>
        Astro.js
        <span className="blinking-cursor font-bold">_</span>
      </div>
      <div className="dropdown block md:hidden">
        <Bars3Icon className="h-8" />
      </div>
      <div
        className={`dropdown text-sm lg:text-base text-gray-400 hidden md:flex space-x-4`}
      >
        <div className={`links cursor-pointer hover:text-slate-200`}>
          <a
            href="https://www.linkedin.com/in/harshith-manjunath-232185184/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className={`links cursor-pointer hover:text-slate-200`}>
          Behance
        </div>
      </div>
    </div>
  );
}

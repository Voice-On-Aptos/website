"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="bg-white py-4 border border-white-smoke 1xl:px-[5.375rem] lg:px-16 px-8">
      <div className="flex items-start md:items-center justify-between w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:w-full">
          <Link href="/">
            <Image
              priority
              src="/images/logo.png"
              alt="Voice on Aptos"
              width={182}
              height={24.55}
              className="xl:hidden"
            />
            <Image
              src="/images/logo.png"
              alt="Voice on Aptos"
              width={304}
              height={41}
              priority
              className="hidden xl:block"
            />
          </Link>
          <div
            className={cn(
              "flex flex-col md:flex-row h-0 overflow-hidden lg:h-auto md:items-center md:space-y-0 space-y-3 md:space-x-[2.5rem]",
              {
                "h-auto mt-4": showLinks,
              }
            )}
          >
            <Link
              href="#"
              className="text-wood-smoke hover:text-accent text-sm"
            >
              Blog
            </Link>
            <Link
              href="https://dao.voa.community/community/new"
              className="inline-block rounded-[0.625rem] bg-accent py-3 px-7 text-white text-sm"
            >
              Start your Community
            </Link>
          </div>
        </div>
        <button
          className="md:hidden text-shark-3"
          onClick={() => setShowLinks(!showLinks)}
        >
          {showLinks ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

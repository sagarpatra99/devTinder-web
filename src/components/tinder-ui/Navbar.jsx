"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import Login from "@/components/ui/Login";

export default function Navbar() {

  return (
    <div className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <Link href={"/"}>
        <div className="flex items-center text-xl">
          <Image src={logo} width={60} alt="logo" />
          <span className="font-extrabold text-[#C7DD25]">&nbsp;DEV</span><span className="text-[#00ACE8]">Tinder</span>
        </div>
      </Link>
      <div>
        <Login />
      </div>
    </div>
  );
}

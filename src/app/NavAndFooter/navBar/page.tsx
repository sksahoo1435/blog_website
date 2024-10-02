import React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/app/statics/profile.jpeg";
import SearchBox from "./Searchbar/page";
const Navbar = () => {
  return (
    <div className="min-h-14 bg-black text-white w-full flex flex-row justify-between items-center ">
      <div className="pl-2 text-white text-2xl italic">BogsHere</div>
      <div className="flex flex-row gap-5 justify-between">
        <Link href="/" className="hover:text-cyan-100">
          Home
        </Link>
        <Link href="#contact" className="hover:text-cyan-100">
          Contact Us
        </Link>
      </div>
      <div className="w-1/3">
        <SearchBox />
      </div>
      <div className="flex flex-row gap-5 justify-between pr-2">
        <button className="bg-gray-600 hover:bg-sky-950 text-white font-bold py-2 px-4 rounded">
          Log In
        </button>
        <button className="bg-stone-500 hover:bg-stone-400 text-white font-bold py-2 px-4 rounded">
          Posts
        </button>
        <Image
          src={profile}
          alt="Profile Picture"
          width={40}
          priority
          style={{
            objectFit: "cover",
            border: "1px solid orange",
            height: "42px",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;

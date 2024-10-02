'use client'
import React from "react";
import blog1 from "@/app/statics/post1.jpg";
import blog2 from "@/app/statics/post2.jpg";
import blog3 from "@/app/statics/post3.jpg";
import blog4 from "@/app/statics/post4.jpg";
import blog5 from "@/app/statics/post5.jpg";
import blog6 from "@/app/statics/post6.jpg";
import blog7 from "@/app/statics/post7.jpg";
import Image from "next/image";
import Products from "../Product/page";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const router = useRouter();


  const handleNavigate = (index: number) => {
    router.push(`/components/Blogs/${index}`);
  };

  const arr = [blog1, blog2, blog3, blog4, blog5, blog6, blog7];

  return (
    <div className="flex flex-col gap-5 w-full p-4 items-center">
      <h1 className="text-4xl font-extrabold text-gray-600">TRENDING NEWS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12">
        {arr.map((item, ind) => (
          <div
            key={ind}
            onClick={() => handleNavigate(ind)}
            className="bg-gray-50 py-1 px-1 border border-gray-600 rounded-sm hover:shadow-2xl shadow-black"
          >
            <div className="flex flex-col items-center gap-1 w-full mx-auto">
              <div className="w-full">
                <Image
                  src={item}
                  alt="Blog Post"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="w-full text-left">
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Learn more about the latest products making waves in the
                  market. From tech to fashion, discover what’s trending now.
                  Stay informed with our expert insights and in-depth analysis.
                </p>
              </div>
              <div className="w-full flex justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate(ind);
                  }}
                  className="mt-2 bg-gradient-to-r from-black to-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-black transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="w-full sm:h-94 md:h-68 p-6">
        <div className="sm:w-full md:w-4/5 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-600">
              Trending Items are here
            </h1>
            <p className="text-sky-950 mt-2">
              You want to know more? Click the item below
            </p>
          </div>
          <div className="h-48">
            <Products items={arr} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

import React from "react";
import profile from "@/app/statics/profile.jpeg";
import Image from "next/image";

const Blogs = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col gap-5 w-full p-4 items-center">
      <h1 className="text-4xl font-extrabold text-gray-600">TRENDING NEWS</h1>

      <div className="flex flex-row flex-wrap w-4/5 ">
        {arr.map((item, ind) => (
          <div
            key={item}
            className="sm:h-auto lg:h-auto bg-gray-50 py-5 px-1 sm:w-full md:w-1/2 lg:w-1/3"
          >
            <div className="flex flex-col items-center gap-1 w-full mx-auto">
              <div className="w-full">
                <Image
                  src={profile}
                  alt="Blog Post"
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-102"
                />
              </div>

              <div className="w-full text-center">
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Learn more about the latest products making waves in the
                  market. From tech to fashion, discover what’s trending now.
                  Stay informed with our expert insights and in-depth analysis.
                </p>
              </div>
              <div className="w-full flex justify-end">
                <button className="mt-2 items-right bg-gradient-to-r from-black to-gray-600 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-black transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full sm:h-128 md:h-96 p-6">
        <div className="sm:w-full md:w-3/4 ">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-orange-500">
              Trending Items are here
            </h1>
            <p className="text-gray-500 mt-2">
              You Want to know More about click the item below
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="md:w-1/3">
              <Image
                src={profile}
                alt="Blog Post"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="md:w-2/3">
              <p className="text-gray-600 mt-4">
                Learn more about the latest products making waves in the market.
                From tech to fashion, discover what’s trending now.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

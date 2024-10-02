import Image from 'next/image';
import React from 'react';
import blog1 from "@/app/statics/post1.jpg";
import blog2 from "@/app/statics/post2.jpg";
import blog3 from "@/app/statics/post3.jpg";
import blog4 from "@/app/statics/post6.jpg";
import blog5 from "@/app/statics/post5.jpg";
import { useRouter } from 'next/navigation';

const Products = (props: any) => {
  const { item } = props;
  const items = [blog1, blog2, blog3, blog4, blog5];
  const router = useRouter();


  const handleNavigate = (index: number) => {
    router.push(`/components/Product/${index}`);
  };

  return (
    <div className="w-full flex flex-row h-full">
      {items.map((ele: any, ind: number) => (
        <div key={ind} className="relative w-1/5 h-full group overflow-hidden">
          <Image src={ele} alt="product_items" className="object-cover h-full w-full" />
          
          <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-60 transition duration-500 ease-in-out"></div>
          
          <div className="absolute inset-0 bg-gray-800 group-hover:translate-y-full translate-y-0 transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-60"></div>
          
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out"  onClick={() => handleNavigate(ind)}>
            <h2 className="text-lg font-semibold">Product {ind + 1}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

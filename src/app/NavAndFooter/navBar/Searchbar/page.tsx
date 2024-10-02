"use client";
import React, { useState } from "react";

const SearchBox = () => {
  const [searchedBlogs, setSearchBlogs] = useState('');

  const handleSearchBlog = (e: any) => {
    setSearchBlogs(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchedBlogs}
        onChange={handleSearchBlog}
        className="rounded-lg pl-2 text-xs text-black h-8 w-3/4 "
      />
    </>
  );
};

export default SearchBox;

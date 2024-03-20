import React, { useState } from "react";
import house from "../assets/house.jpg";
import { IoMdSearch } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Property from "../components/Property";

const Listings = () => {
  const [searchParam, setSearchParam] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const properties = [
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
    },
  ];
  return (
    <div className="overflow-y-auto h-[92vh] flex">
      <div className="w-[25%] hidden md:flex h-full bg-white border-r-[1px] border-[#efefef] p-3">
        <h1>Filter Options</h1>
      </div>
      <div className="overflow-y-scroll p-4 md:w-[75%] flex flex-wrap">
        <div className="flex  justify-around items-center w-full mb-3">
          <h1 className="text-center font-montserrat md:text-2xl font-bold">
            All Listed Properties
          </h1>{" "}
          {!showSearch ? (
              <div className="p-2">
                <button
                  type="button"
                  title="search_btn"
                  onClick={() => setShowSearch(true)}
                >
                  <IoMdSearch  size={28} />
                </button>
              </div>
            ) : (
              <div className="border-[1px] text-black  search-box border-black p-2 rounded-full text-[12px] flex items-center gap-3">
                <button
                  type="button"
                  title="search-btn"
                  onClick={() => searchCoins(searchParam)}
                >
                  <IoMdSearch size={25} />
                </button>
                <input
                  type="text"
                  className="w-[90%] bg-transparent outline-none"
                  placeholder="Type to search..."
                  onChange={(e) => setSearchParam(e.target.value)}
                  value={searchParam}
                />
                {searchParam.length > 0 && (
                  <button
                    type="button"
                    title="cancel-btn"
                    onClick={() => {
                      setSearchParam("");
                    }}
                  >
                    <MdCancel size={20} />
                  </button>
                )}
              </div>
            )}
        </div>
        <div className="flex-wrap flex mt-5 justify-center md:justify-evenly gap-y-10">
          {properties.map((property, index) => (
            <Property
              key={index}
              property={property}
              className="w-full sm:w-1/2 md:w-1/3 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;

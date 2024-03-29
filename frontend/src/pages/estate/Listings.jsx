import React, { useState } from "react";
import house from "../../assets/house.jpg";
import { IoMdSearch } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Property from "../../components/estate/Property";
import { IoClose, IoMenu } from "react-icons/io5";
import { Toaster } from "sonner";

const Listings = () => {
  const [searchParam, setSearchParam] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
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
    <div className="overflow-y-auto p-4 h-auto relative flex flex-col">
      <Toaster position="top-right" richColors />
      <div className="gap-3 flex items-center justify-start p-3 px-4">
        <h1 className="text-center font-montserrat md:text-2xl font-bold">
          All Listed Properties
        </h1>
      </div>{" "}
      <div className="w-full mt-5 bg-white border-[2px] rounded-md border-[#efefef] p-4 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold ">Filter Options</h1>
          <button className="p-3 bg-blue-600 text-white font-bold rounded-lg px-8">Filter</button>
        </div>
        <div className="mt-3 flex gap-2 md:gap-4 md:flex-row flex-col">
          <div className="flex flex-col md:w-1/4">
            <small>Return Per Annum</small>
            <select className="border-[1px] border-black rounded-lg p-2">
              <option value="All" disabled>All</option>
              <option value="Lowest">Lowest</option>
              <option value="Highest">Highest</option>
            </select>
          </div>
          <div className="flex flex-col md:w-1/4">
            <small>Location</small>
            <select className="border-[1px] border-black rounded-lg p-2">
              <option value="All" disabled selected>Any</option>
              <option value="Chicago">Chicago</option>
              <option value="MY">New York</option>
            </select>
          </div>
          <div className="flex flex-col md:w-1/4">
            <small>Investment Term</small>
            <select className="border-[1px] border-black rounded-lg p-2">
              <option value="All" disabled selected>All</option>
              <option value="Lowest">Lowest</option>
              <option value="Highest">Highest</option>
            </select>
          </div>
          <div className="flex flex-col md:w-1/4">
            <small>Property Type</small>
            <select className="border-[1px] border-black rounded-lg p-2">
              <option value="Any" disabled selected>Any</option>
              <option value="Lowest">Bungalow</option>
              <option value="Highest">Town Home</option>
              <option value="Highest">Condo</option>
            </select>
          </div>
          <div className="flex flex-col md:w-1/4">
            <small>Investment Type</small>
            <select className="border-[1px] border-black rounded-lg p-2">
              <option value="Any" disabled selected>Any</option>
              <option value="Lowest">Full Property</option>
              <option value="Highest">Part property</option>
            </select>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-wrap">
        <div className="flex  justify-around items-center w-full mb-3">
          {/* {!showSearch ? (
            <div className="p-2">
              <button
                type="button"
                title="search_btn"
                onClick={() => setShowSearch(true)}
              >
                <IoMdSearch size={28} />
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
          )} */}
        </div>
        <div className="flex-wrap flex mt-5 justify-center md:justify-between gap-y-10 gap-x-5">
          {properties.map((property, index) => (
            <Property
              key={index}
              property={property}
              id={index}
              className="w-full sm:w-1/2 md:w-1/3"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;

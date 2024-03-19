import React from "react";
import house from "../assets/house.jpg";
import Property from "./Property";

const Listings = () => {
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
    <div className="p-5">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="font-lato text-2xl">
          Property Listings
        </h1>
        <div className="md:w-[70%] w-[90%] mt-2 p-1">
          <div className="w-full flex gap-6 p-3 overflow-x-scroll">
            {properties.map((property, index) => (
              <Property key={index} property={property} />
            ))}
          </div>
          <p className="text-center text-purple-700 underline">
            <a href="">View more</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Listings;

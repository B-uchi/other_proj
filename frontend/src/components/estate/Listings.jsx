import React from "react";
import house from "../../assets/house.jpg";
import Property from "./Property";

const Listings = () => {
  const properties = [
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
      investmentType: "Full Property",
      investmentTerm: "12 months",
      totalRaised: "40,000",
      propertyType: "Bungalow",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
      investmentType: "Full Property",
      investmentTerm: "12 months",
      totalRaised: "40,000",
      propertyType: "Bungalow",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
      investmentType: "Full Property",
      investmentTerm: "12 months",
      totalRaised: "40,000",
      propertyType: "Bungalow",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
      investmentType: "Full Property",
      investmentTerm: "12 months",
      totalRaised: "40,000",
      propertyType: "Bungalow",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
      investmentType: "Full Property",
      investmentTerm: "12 months",
      totalRaised: "40,000",
      propertyType: "Bungalow",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
      investmentType: "Full Property",
      investmentTerm: "12 months",
      totalRaised: "40,000",
      propertyType: "Bungalow",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
      investmentType: "Full Property",
      investmentTerm: "12 months",
      totalRaised: "40,000",
      propertyType: "Bungalow",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
      investmentType: "Full Property",
      investmentTerm: "12 months",
      totalRaised: "40,000",
      propertyType: "Bungalow",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
      investmentType: "Full Property",
      investmentTerm: "12 months",
      totalRaised: "40,000",
      propertyType: "Bungalow",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
      investmentType: "Full Property",
      investmentTerm: "12 months",
      totalRaised: "40,000",
      propertyType: "Bungalow",
    },
    {
      img: house,
      street: "Lorem Ipsum",
      location: "lorem ipsum lorem",
      roi: "8.51",
      target: "110,000",
      investmentType: "Full Property",
      investmentTerm: "12 months",
      totalRaised: "40,000",
      propertyType: "Bungalow",
    },
  ];
  return (
    <div className="">
      <div className="container mx-auto flex flex-col items-center">
        <div className="p-1 w-full">
          <div className="w-full flex gap-6 p-3 overflow-x-scroll">
            {properties.map((property, index) => (
              <Property key={index} property={property} id={index}/>
            ))}
          </div>
          <p className="text-center underline">
            <a href="/listings">View more</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Listings;

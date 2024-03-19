import React from "react";

const Footer = () => {
  return (
    // <footer className='p-8 bg-grbay-200'>
    //   <div className="container mx-auto w-[80%] flex md:flex-row justify-center flex-col-reverse ">
    //     <div className="md:w-1/2 flex-col flex justify-between gap-5 md:text-left text-center">
    //       <h1 className='text-xl font-montserrat font-extrabold'>Vantage Investments</h1>
    //       <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non quidem tenetur aliquam? Ducimus voluptas labore velit quasi, quibusdam minima.</p>
    //       <small>Copyright &copy; Vantage Investments 2015-2024</small>
    //     </div>
    // <div className="md:w-1/2 mb-5 md:mb-0">
    //   <h1 className='text-xl font-montserrat font-extrabold text-center mb-3'>Quick Links</h1>
    //   <ul className='md:grid md:grid-cols-2 flex flex-col underline gap-5 text-center'>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Listings</li>
    //     <li>Testimonials</li>
    //     <li>Contact</li>
    //     <li>How it works</li>
    //   </ul>
    // </div>
    //   </div>
    // </footer>
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto w-[80%] flex md:flex-row justify-center flex-col-reverse">
          <div className=" flex-col flex justify-evenly md:text-left text-center">
            <h1 className="text-xl font-montserrat font-extrabold">
              Vantage Investments
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non
              quidem tenetur aliquam. Ducimus voluptas labore velit quasi,
              quibusdam minima.
            </p>
          </div>
          <div className="md:w-1/2 mb-5 md:mb-0">
            <h1 className="text-xl font-montserrat font-extrabold text-center mb-3">
              Quick Links
            </h1>
            <ul className="md:grid md:grid-cols-2 flex flex-col underline gap-5 text-center">
              <li>Home</li>
              <li>About</li>
              <li>Listings</li>
              <li>Testimonials</li>
              <li>Contact</li>
              <li>How it works</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} Vantage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

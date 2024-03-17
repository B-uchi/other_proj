import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Smith",
      message:
        "Vantage has been instrumental in guiding me through my real estate investment journey. Their expert team provided personalized advice, helping me secure lucrative properties. I'm thrilled with the returns I've seen and highly recommend their services to anyone looking to invest wisely.",
    },
    {
      name: "John Anderson",
      message:
        "Impressed by Vantage's professionalism and efficiency! They made the investment process seamless, from property selection to closing. The team's expertise and dedication ensured I made informed decisions, resulting in excellent returns. I'm grateful for their support and look forward to future collaborations.",
    },
    {
      name: "Emily Rodriguez",
      message:
        "Vantage exceeded my expectations with their top-notch service and unparalleled expertise. Their team went above and beyond to understand my investment goals and tailored solutions to meet them. Thanks to Vantage, I've achieved financial milestones beyond what I thought possible. Highly recommend!",
    },
    {
      name: "Michael Thompson",
      message:
        "Choosing Vantage for my real estate investments was the best decision I made. Their comprehensive market analysis and strategic insights helped me identify high-potential properties. With their support, I've built a robust portfolio and enjoyed consistent returns. Trustworthy, reliable, and highly recommended!",
    },
  ];
  return (
    <div className="bg-gray-100 py-16 px-4 ">
      <div className="max-w-8xl mx-auto ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 w-[100%] sm:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 mb-4">{testimonial.message}</p>
              <p className="text-gray-600 font-semibold">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

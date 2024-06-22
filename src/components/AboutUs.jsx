import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Typography } from '@material-tailwind/react';
import items from "./assets/items.png";

function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation like fetching data
    const timer = setTimeout(() => {
      setLoading(false);
    },); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {loading ? (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:w-2/3 p-4">
          <div className="w-96 h-96 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="text-center md:text-left md:pr-28 flex flex-col items-center md:items-start">
            <div className="w-64 h-8 bg-gray-300 rounded-lg animate-pulse mb-4"></div>
            <div className="w-full h-20 bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-2/3 p-4">
          <Card className="w-full h-96 shadow-xl rounded-lg overflow-hidden animate__animated animate__fadeIn transform hover:scale-105 transition-transform duration-300">
            <CardHeader color="gray" className="relative h-full">
              <img src={items} alt="About Us" className="w-full h-full object-cover rounded-lg" />
            </CardHeader>
          </Card>
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <Typography variant="h2" className="mb-4 text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-300">
              About Us
            </Typography>
            <Typography variant="body1" className="text-lg text-gray-600 leading-relaxed">
              We, Relish Coffee House, at Malad West in Mumbai, Maharashtra, are one
              of the favorite hangouts for coffee and conversations. We strive to
              provide the best experience to our guests. Our objective is to provide
              an authentic coffee drinking experience in a warm, friendly, no
              pressure environment. We try to bring relaxation to the city keeping
              in mind a cozy place that serves coffee, with couches to lounge in
              while you sip.
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUs;

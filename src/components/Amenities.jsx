import React from 'react';
import delivery from './assets/delivery.jpg';
import coffee2 from './assets/coffee2.png';
import freewifi from './assets/freewifi.jpg';

const amenitiesData = [
  { title: "Home Delivery", icon: delivery },
  { title: "Free WiFi", icon: freewifi },
  { title: "Multiple Payment Modes", icon: '💳' },
  { title: "Party Orders", icon: coffee2 }
];

function Amenities() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-3xl font-semibold mb-10">Our Amenities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {amenitiesData.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
            {typeof amenity.icon === "string" && (amenity.icon.endsWith('.jpg') || amenity.icon.endsWith('.png')) ? (
              <img src={amenity.icon} alt={amenity.title} className="h-16 w-16 rounded-full mb-4" />
            ) : (
              <div className="text-4xl mb-4">{amenity.icon}</div>
            )}
            <h3 className="text-lg font-medium text-center">{amenity.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Amenities;

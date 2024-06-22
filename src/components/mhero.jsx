import React from 'react'
import cofebag from "./assets/cofebag.png";
import img48 from "./assets/hotcoffee.png";
import coldcoffee from "./assets/cold coffee.png";
import tea from "./assets/tea.png";


function mhero() {
  return (
    <>
     <div className=" flex w-full h-screen sm:hidden justify-center bg-gray-100">
      <div className=" w-4/5 h-full ">
      <div className=" bg-white text-black rounded-lg shadow-lg hover:scale-110 ">
                <img src={img48} alt="Hot Coffee" className="w-full h-48 lg:h-64 object-cover rounded-lg" />
                <h3 className="text-xl font-bold mt-4">Hot Coffee</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#hot-coffee" className="text-red-500 font-bold mt-2 block">Find Out More</a>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-lg hover:scale-110">
                <img src={coldcoffee} alt="Cold Coffee" className="w-full h-48 lg:h-64 object-cover rounded-lg" />
                <h3 className="text-xl font-bold mt-4">Cold Coffee</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#cold-coffee" className="text-red-500 font-bold mt-2 block">Find Out More</a>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-lg hover:scale-110">
                <img src={tea} alt="Iced Tea" className="w-full h-48 lg:h-64 object-cover rounded-lg" />
                <h3 className="text-xl font-bold mt-4">Iced Tea</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#iced-tea" className="text-red-500 font-bold mt-2 block">Find Out More</a>
              </div>
              <div className="bg-white text-black p-4 rounded-lg shadow-lg hover:scale-110">
                <img src={cofebag} alt="Iced Tea" className="w-full h-48 lg:h-64 object-cover rounded-lg" />
                <h3 className="text-xl font-bold mt-4">coffee bag</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#iced-tea" className="text-red-500 font-bold mt-2 block">Find Out More</a>
              </div>
      
      </div>

     </div>
    </>
  )
}

export default mhero
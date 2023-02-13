import React from 'react'
import banner from '../Assist/banner1.jpg'
import Carousel from './Carousel'
import Middleware from './Middleware'

const Layout = () => {
  return (
    <div className="flex flex-col w-full">
    <div className="bg-cover bg-center
     bg-no-repeat md:h-[70vh] h-[50vh] w-full flex flex-col text-center pt-[5rem] gap-[1rem]" 
     style={{ backgroundImage: `url(${banner})` }}>
  <div className="flex flex-col">
  <h2 className="text-white font-mono text-[1.5rem] md:text-[2rem] font-bold">
  Today's Cryptocurrency Prices by Market Cap
  </h2>
  <p className="text-gray-200 text-center text-1xl md:text-2xl">
  Get All The Info Regarding Your Favorite Crypto Currency
  </p>
  </div>
<Carousel/>
    </div>
    <div className="w-full bg-black text-white pt-[2rem]">
    <Middleware/>
    </div>
    </div>
    

  )
}

export default Layout
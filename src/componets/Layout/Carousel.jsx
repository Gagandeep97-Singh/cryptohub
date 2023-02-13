import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AliceCarousel from "react-alice-carousel";

const Carousel = () => {
  const [Trandingcoinsdata, setTrandingcoinsdata] = useState();
  const coins = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h";



  const fechingtrandingcoins = async () => {
    const res = await fetch(coins);
    const data = await res.json();
    setTrandingcoinsdata(data)
  }

  useEffect(() => {
    fechingtrandingcoins()
  }, [])

return(
  <div className="w-full h-[50%] flex items-center justify-center mt-[1rem]">
    <div className="w-[200%] flex md:gap-[7rem] gap-[2rem] items-center justify-center overflow-x-hidden absolute animate-marquee">
    {Trandingcoinsdata?.map((coins)=>{
      return <Link to={`/coin/${coins?.id}`} key={coins?.id}>
         <img src={coins?.image} alt="coin_img" className="md:w-[7rem] md:h-[7rem] w-[3rem] h-[3rem] hover:scale-110" />
         <h1 className="text-white font-mono text-1xl font-bold mt-2">
          {coins?.name}
         </h1>
         <p className="font-mono text-teal-400 ">{coins?.current_price}$</p>
      </Link>
    })}
    </div>
  </div>
)
}
export default Carousel
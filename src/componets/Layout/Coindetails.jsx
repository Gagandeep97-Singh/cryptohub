import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Datachart from './Datachart'
import numeral from 'numeral'

const Coindetails = () => {
    const {id}=useParams();
    
    const [coinDetails,setCoinDetails]=useState();

    const coin=`https://api.coingecko.com/api/v3/coins/${id}`

    const fetchsinglecoin=async()=>{
        const res= await fetch(coin);
        const data= await res.json()
        setCoinDetails(data)
    }

useEffect(()=>{
fetchsinglecoin()
},[])





  return (
    <div className="h-full py-[2.5rem] w-full bg-black flex md:flex-row flex-col  text-white font-mono ">
 <div className="flex flex-col gap-2  items-center md:w-1/3 md:border-r-2 border-gray-300">
  <img src={coinDetails?.image.large} alt="coin_img"  className="md:w-[8rem] h-[10rem]"/>
  <h1 className="text-2xl font-bold">{coinDetails?.name}</h1>
  <p>{coinDetails?.description.en.split('.')[0]}</p>
  <h1 className="text-2xl font-bold">Rank:{coinDetails?.market_cap_rank}</h1>
  <h3 className="text-2xl font-bold">Market Price: {numeral(coinDetails?.market_data.current_price.usd).format('0,0')}$</h3>
  <h3 className="text-2xl font-bold">Market Cap: {numeral(coinDetails?.market_data.market_cap.usd).format('0,0')}</h3>

 </div>
 <div className="flex flex-1 w-2/3">
  <Datachart id={id}/>
 </div>
    </div>)
}
 export default Coindetails
import React,{useState,useEffect} from 'react'
import { Line } from "react-chartjs-2";
import {chartDays} from '../../config/data'


const Datachart = ({id}) => {

    const [days,setdays]=useState(1)
    const [chartData, setChartData] = useState([]);
    const coinapi=`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
    
    
    const fetchChartData=async()=>{
        const res= await fetch(coinapi);
        const data= await res.json();
        setChartData(data.prices);
    }
    
    useEffect(()=>{
        fetchChartData();
    },[days])

  return (
    <div className="flex flex-col w-[100%] h-[100%] ">
    <Line
              data={{
                labels: chartData?.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: chartData?.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in usd`,
                    borderColor: "#78feff",
                    
                  },
                ],
              }}
              options={{
                responsive: true,
                elements: {
                  point: {
                    radius: 1,
                  },
                },
                
              }}
            />
  
    <div className="flex gap-[7px] m-[2rem] ">
 

    {chartDays.map((days)=>{
  return <button className="text-white border-2
   border-teal-400 p-[7px]"
   key={days.value}
   onClick={()=>{setdays(days.value)}}
  >{days.label}</button>
})}
    </div>
    </div>
  )
}

export default Datachart
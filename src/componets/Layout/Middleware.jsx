import React, { useContext,useState } from 'react'
import { tablehead } from '../../config/data'
import { contextdata } from '../../config/Context'
import { Link } from 'react-router-dom'
import Pagenation from './Pagenation'
import numeral from 'numeral'


const Middleware = () => {

  const { apiData } = useContext(contextdata)

const [currentPage,setCurrentPage] = useState(1);
const [coinsPerPage,setCoinsPerPage] = useState(20)


const lastindex=currentPage*coinsPerPage;
const firstindex=lastindex-coinsPerPage;

const coinsSortedData=apiData?.slice(firstindex,lastindex)

 
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-center font-mono text-3xl text-bold">
        Prices by Market Cap
      </h1>
     
      <table className="table-auto">
        <thead className="bg-teal-400">
          <tr>
            {tablehead?.map(headnames => <th className="text-black font-mano text-[1.2rem] py-2 " key={headnames.id}>{headnames.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {coinsSortedData?.map((coins) => {
        const profitloss=coins.price_change_percentage_24h>0;

            return <tr className="text-center scroll-smooth border-b-2 border-gray-500 " key={coins.id}>
               <Link to={`/coin/${coins.id}`}  className="text-center">
              <td className="flex gap-1 py-4 md:ml-[3rem]">
                <img src={coins?.image} alt="coin_img" className="h-[3rem] w-[3rem]" />
                <div className="flex flex-col ">
                  <h1 className="font-mono font-bold uppercase text-2xl">{coins?.symbol}</h1>
                  <p>{coins?.name}</p>
                </div>
              </td>
                </Link>
              <td>
                <p className="font-mono">{numeral(coins?.current_price).format('0,0')}$</p>
              </td>
              <td>
                <p className={`font-mono ${profitloss?'text-green-600':'text-red-700'}`}>{(coins?.market_cap_change_percentage_24h).toFixed(2)}%</p>

              </td>
              <td>
                <p>{numeral(coins?.market_cap).format('0,0')}</p>
              </td>
              
            </tr>
          })}

        </tbody>
      </table>
      <Pagenation totalpost={apiData?.length} coinsPerPage={coinsPerPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Middleware
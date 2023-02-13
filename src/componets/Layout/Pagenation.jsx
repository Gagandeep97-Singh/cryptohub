import React from 'react'

const Pagenation = ({totalpost,coinsPerPage,setCurrentPage}) => {

    let pages=[]

    for (let i = 1; i <=Math.ceil(totalpost/coinsPerPage); i++) {
        pages.push(i); 
    }

    const handlepagechange=(page)=>{
     setCurrentPage(page)
     window.scroll(0,470)
    }

  return (
    <div className="flex gap-5 w-full justify-center items-center mb-[3rem]">
   {pages?.map((page,inx)=>{
    return <h2 key={inx} className=" text-white border-2 border-teal-300 rounded-md font-bold p-2 cursor-pointer"
    onClick={()=>handlepagechange(page)}>{page}</h2>
   })}
    </div>
  )
}

export default Pagenation
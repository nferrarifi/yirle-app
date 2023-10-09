"use client"
import { StarIcon as StarIcon1 } from "@heroicons/react/24/outline"
import { StarIcon as StarIcon2 } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useState } from "react"
const RecordCard = ({record, typeFilter, setTypeFilter}) => {
  function handleTypeFilter (typeFilter) {
    if (typeFilter !== record.type) {
      setTypeFilter (record.type)
    }
    else setTypeFilter("")
  }
  const [showEditButton, setShowEditButton] = useState(false)
  return (
    <div className="w-[300px] h-[570px] flex flex-col justify-between rounded shadow-lg hover:shadow-[#3498db] my-4 cursor-default transition-all duration-500 hover:-translate-y-1" onMouseEnter={() => setShowEditButton(true)} onMouseLeave={() => setShowEditButton(false)}>
      <div>
        <img className="w-[300px] border object-scale-down h-[350px]" src={record.cover} alt={record.title}/>
        <div className="flex justify-center py-2">
          <div className="font-bold text-xl text-center text-[#3498db] px-2">{record.title}</div>
        </div>
      </div>

      <div className="px-6 pt-2">
        <div className="flex space-x-4 justify-between">       
            <p>Category</p>
            <span className={`cursor-pointer inline-block transition-all ${record.type === typeFilter ? "bg-gray-600 text-[#efefef]" : "bg-gray-200 hover:bg-gray-300" }  rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 `} onClick={() => handleTypeFilter(typeFilter)}>{record.type}</span>
        </div>
        <div className="flex space-x-4 justify-between">       
            <p>Status</p>
            <span className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2`}>{record.status}</span>
        </div>
        <div className="flex space-x-4 justify-between">       
            <p>Year Recorded</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">{record.year}</span>
        </div>
        <div className="flex space-x-4 justify-center">       
          <ul className="flex px-3 py-1 text-sm font-semibold  mr-2 mb-2">
            <li className="w-6  text-[#3498db]" >{record.rating >= 1 ? <StarIcon2 /> : <StarIcon1/>}</li>
            <li className="w-6  text-[#3498db]" >{record.rating >= 2 ? <StarIcon2 /> : <StarIcon1/>}</li>
            <li className="w-6  text-[#3498db]" >{record.rating >= 3 ? <StarIcon2 /> : <StarIcon1/>}</li>
            <li className="w-6  text-[#3498db]" >{record.rating >= 4 ? <StarIcon2 /> : <StarIcon1/>}</li>
            <li className="w-6 text-[#3498db]" >{record.rating >= 5 ? <StarIcon2 /> : <StarIcon1/>}</li>
          </ul>
        </div>        
      </div>
      <Link href={`/records/edit/${record.id}`} className={showEditButton ? " absolute right-0 bottom-0 text-[#3498db]" : "hidden"}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      </Link>
    </div>
  )
}

export default RecordCard
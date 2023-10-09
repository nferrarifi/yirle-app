"use client"
import { StarIcon as StarIcon1 } from "@heroicons/react/24/outline"
import { StarIcon as StarIcon2 } from "@heroicons/react/24/solid"
const Card = ({record}) => {
  return (
    <div className="w-[300px] h-[570px] flex flex-col justify-between rounded shadow-lg hover:shadow-[#3498db] my-4 cursor-default transition-all duration-500 hover:-translate-y-1">
      <div>
        <img className="w-[300px] border object-scale-down h-[350px]" src={record.cover} alt={record.title}/>
        <div className="flex justify-center py-2">
          <div className="font-bold text-xl text-center text-[#3498db] px-2">{record.title}</div>
        </div>
      </div>

      <div className="px-6 pt-2">
        <div className="flex space-x-4 justify-between">       
            <p>Category</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">{record.type}</span>
        </div>
        <div className="flex space-x-4 justify-between">       
            <p>Status</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">{record.status}</span>
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
    </div>
  )
}

export default Card
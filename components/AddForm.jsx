"use client"

import { motion } from "framer-motion"
import { StarIcon as StarIcon1 } from "@heroicons/react/24/outline"
import { StarIcon as StarIcon2 } from "@heroicons/react/24/solid"
import { useState, useEffect } from "react"



const AddForm = ({createRecord, toast}) => {

  const [rating, setRating] = useState(0)
  useEffect(() => {
    
  }, [rating])
  
  function handleRating (ratingSelected) {
    if (ratingSelected === rating) {
      setRating(0)
    }
    else setRating (ratingSelected)
  }



  return (
    <div className=" mt-8">
      <form className="flex flex-col space-y-6" action={(formData) => createRecord(formData, rating)}>
      <motion.div className="">
        <label className="block text-[#3498db] text-sm font-bold mb-2" for="title">
          Title
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#3498db]" id="title" name="title" type="text"  placeholder="The Titanic"/>
      </motion.div>
      <div className="mb-4">
        <label className="block text-[#3498db] text-sm font-bold mb-2" for="type">
          Category
        </label>
        <select className="shadow block  w-full  border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-[#3498db]" name="type" id="type">
            <option>Movie</option>
            <option>TV Series</option>
            <option>Book</option>
            <option>Video Game</option>
            <option>Record</option>
            <option>Comic</option>
            <option>Anime</option>
            <option>Manga</option>
            <option>Podcast</option>
            <option>Audiobook</option>
            <option>Light novel</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-[#3498db] text-sm font-bold mb-2" for="status">
          Status
        </label>
        <select className="shadow block  w-full  border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-[#3498db]" name="status" id="status">
            <option>Ongoing</option>
            <option>Finished</option>
            <option>Dropped</option>
        </select>  
      </div>
      <div className="mb-4">
        <label className="block text-[#3498db] text-sm font-bold mb-2" for="year">
          Year
        </label>
        <select className="shadow block  w-full  border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-[#3498db]" name="year" id="year">
            <option>2023</option>
            <option>2022</option>
        </select>  
      </div>
      <motion.div className="mb-4">
        <label className="block text-[#3498db] text-sm font-bold mb-2" for="cover">
          Cover
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#3498db]" id="cover" name="cover" type="text"  placeholder="www.imgur.com/titanic.png"/>
        <p className="text-xs font-light mt-2 ml-1">Paste the URL for a 'cover' style image</p>
      </motion.div>
      <div className="mb-4">
        <label className="block text-[#3498db] text-sm font-bold mb-2">
          {"Rating"}
        </label>
        <ul className="flex mt-2 justify-between">
          <li className="w-8 h-12 text-[#3498db] cursor-pointer" onClick={() => handleRating(1)}>{rating >= 1 ? <StarIcon2 /> : <StarIcon1/>}</li>
          <li className="w-8 h-12 text-[#3498db] cursor-pointer" onClick={() => handleRating(2)}>{rating >= 2 ? <StarIcon2 /> : <StarIcon1/>}</li>
          <li className="w-8 h-12 text-[#3498db] cursor-pointer" onClick={() => handleRating(3)}>{rating >= 3 ? <StarIcon2 /> : <StarIcon1/>}</li>
          <li className="w-8 h-12 text-[#3498db] cursor-pointer" onClick={() => handleRating(4)}>{rating >= 4 ? <StarIcon2 /> : <StarIcon1/>}</li>
          <li className="w-8 h-12 text-[#3498db] cursor-pointer" onClick={() => handleRating(5)}>{rating >= 5 ? <StarIcon2 /> : <StarIcon1/>}</li>
        </ul>
      </div>
      <button type="submit">Test</button>
      </form>
    </div>
  )
}

export default AddForm
"use client"

import { motion } from "framer-motion"
import { StarIcon as StarIcon1 } from "@heroicons/react/24/outline"
import { StarIcon as StarIcon2 } from "@heroicons/react/24/solid"
import { useState, useEffect, useRef } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import { toast, Toaster } from "react-hot-toast"
import { useRouter } from "next/navigation"
import PreviewModal from "./PreviewModal"


const AddForm = ({user}) => {

  const formRef = useRef()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [rating, setRating] = useState(0)
  useEffect(() => {
    
  }, [rating])
  
  function handleRating (ratingSelected) {
    if (ratingSelected === rating) {
      setRating(0)
    }
    else setRating (ratingSelected)
  }

  async function createRecord (formData, ratingValue) {
    //Create form object
    const formDataObj = {};
    formData.forEach((value, key) => {
      (formDataObj[key] = value)
    });
    formDataObj.rating = ratingValue
    formDataObj.year = Number(formDataObj.year)
    formDataObj.userId = user.id
    ///Validation
    const errors = validateForm(formDataObj)
    if (errors.length > 0) {
      errors.forEach ((error) => {
        switch (error) {
          case "titleShort":
            toast.error("Your title must be at least 3 characters long", {position:"bottom-center", duration: 2000})
            break;
          case "titleLong":
              toast.error("Your title must be less than 45 characters long",{position:"bottom-center"})
              break;
        case "image":
              toast.error("Your cover link must end in an image format (.png, jpg, jpeg, .webm)",{position:"bottom-center", duration: 2000})
              break;              
          default:
            break;
        }
      })
      return null
    }

    ///Create record
    const result = (await supabase.from('records').insert(formDataObj))
    if (result.status === 201) {
      toast.success("Record added successfully!", {
        position: "bottom-center", "style": {
          color: "#3498db"
        }
      })
      setTimeout(() => router.push("/records"), 2000 )
      
    }
    else {
      toast.error("Something failed", {
        position: "bottom-center", "style": {
          color: "#3498db"
        }
      })
    }
  }

  function validateForm (formDataObj) {
    const imgRegex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
    const errorsArray = []
    formDataObj.title.length <= 3 ? errorsArray.push("titleShort") : ""
    formDataObj.title.length >= 45 ? errorsArray.push("titleLong") : ""
    imgRegex.test(formDataObj.cover) ? "" : errorsArray.push("image")
    return errorsArray
  }

  const [previewCard, setPreviewCard] = useState({})

  function handleModal (e) {
    e.preventDefault()
    setPreviewCard({
      title: formRef.current[0].value,
      type: formRef.current[1].value,
      status: formRef.current[2].value,
      year: formRef.current[3].value,
      cover: formRef.current[4].value,
      rating: rating
    })
    setOpen(true)
  }
  


  return (
    <div className=" mt-8">
      <form className="flex flex-col space-y-6" ref={formRef} action={(formData) => createRecord(formData, rating, user)}>
      <motion.div className="">
        <label className="block text-[#3498db] text-md font-bold mb-2">
          Title
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#3498db]" id="title" name="title" type="text"  placeholder="The Titanic"/>
      </motion.div>
      <div className="mb-4">
        <label className="block text-[#3498db] text-md font-bold mb-2">
          Category
        </label>
        <select className="shadow block  w-full  border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-[#3498db]" name="type" id="type">
            <option>Movie</option>
            <option>TV Series</option>
            <option>Book</option>
            <option>Video Game</option>
            <option>Documentary</option>
            <option>Comic</option>
            <option>Podcast</option>
            <option>Anime</option>
            <option>Manga</option>
            <option>Light novel</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-[#3498db] text-md font-bold mb-2" >
          Status
        </label>
        <select className="shadow block  w-full  border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-[#3498db]" name="status" id="status">
            <option>Ongoing</option>
            <option>Finished</option>
            <option>Dropped</option>
        </select>  
      </div>
      <div className="mb-4">
        <label className="block text-[#3498db] text-md font-bold mb-2" >
          Year
        </label>
        <select className="shadow block  w-full  border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-[#3498db]" name="year" id="year">
            <option>2023</option>
            <option>2022</option>
        </select>  
      </div>
      <motion.div className="mb-4">
        <label className="block text-[#3498db] text-md font-bold mb-2" >
          Cover
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#3498db]" id="cover" name="cover" type="text"  placeholder="www.imgur.com/titanic.png"/>
        <p className="text-xs font-light mt-2 ml-1">Paste the URL for a 'cover' style image</p>
      </motion.div>
      <div className="mb-4">
        <label className="block text-[#3498db] text-md font-bold mb-2">
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
      <div className="flex justify-between">
        <button className="rounded-md bg-[#3498db] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3e82af] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={(e) => handleModal(e)}>Preview</button>
        <button className="rounded-md bg-[#27ae60] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3c8b5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" type="submit">Create Record!</button>
      </div>
      </form>
      <Toaster />
      <PreviewModal open={open} setOpen={setOpen} previewCard={previewCard} />
    </div>
  )
}

export default AddForm
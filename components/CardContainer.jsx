"use client"
import RecordCard from "./RecordCard"
import { useState, useEffect } from "react"



const CardContainer = ({ records }) => {
  const [typeFilter, setTypeFilter] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  function handleSearchQuery (event) {
    setSearchQuery(event.target.value.toLowerCase())
  }
  return (
    <div>
      <div className={`m-auto w-[300px]`}>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#3498db]" id="title" name="title" type="text" placeholder="Search a specific record" onChange={(e) => handleSearchQuery(e)}/>
      </div>
      <container className='flex flex-wrap justify-center items-center mx-20 lg:mx-40 transition-all duration-500'>
      {
        records.data.filter((record) => searchQuery === "" ? record : record.title.toLowerCase().includes(searchQuery))
        .filter((record) => typeFilter === "" ? record : record.type === typeFilter).map((record) => (
          <div className='mx-8 mb-16 mt-12' >
              <RecordCard record={record} typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
          </div>
        ))
      }
    </container>
    </div>

  )
}

export default CardContainer
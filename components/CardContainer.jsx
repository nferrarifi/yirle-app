"use client"
import RecordCard from "./RecordCard"
import { useState, useEffect } from "react"



const CardContainer = ({ records }) => {
  const [typeFilter, setTypeFilter] = useState("")

  return (
    <container className='flex flex-wrap justify-center items-center mx-20 lg:mx-40 transition-all duration-500'>
      {
        records.data.filter((record) => typeFilter === "" ? record : record.type === typeFilter).map((record) => (
          <div className='mx-8 mb-16 mt-12' >
              <RecordCard record={record} typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
          </div>
        ))
      }
    </container>
  )
}

export default CardContainer
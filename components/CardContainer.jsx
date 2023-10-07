"use client"
import Card from "./Card"

const CardContainer = ({records}) => {
  return (
    <container className='flex flex-wrap justify-center items-center mx-20 lg:mx-40'>
    {
    records.data.map ((record) => (
      <div className='mx-8 mb-16 mt-12' >
        <a href={`/records/edit/${record.id}`}>
          <Card record={record} />
        </a>
      </div>
    ))
  }
  </container>
  )
}

export default CardContainer
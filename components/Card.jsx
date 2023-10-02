"use client"

const Card = ({record}) => {
  return (
    <div className="w-[250px] rounded shadow-lg mx-10 my-4 cursor-default transition-all hover:-translate-y-2">
      <img className="w-[250px] rounded-b object-cover h-[350px]" src={record.cover} alt={record.title}/>
      <div className="flex justify-center py-2">
        <div className="font-bold text-xl text-[#703630]">{record.title}</div>
      </div>
      <div className="px-6 pt-2 pb-2">
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
      </div>
    </div>
  )
}

export default Card
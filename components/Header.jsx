"use client"
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import { useEffect, useState } from "react"


export const dynamic = 'force-dynamic'



const Header = ({user}) => {
  const [isScrolled, setIsScrolled] = useState(false)
    useEffect (() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled (true)
            }
            else {
                setIsScrolled (false)
            }
        }

        window.addEventListener("scroll", handleScroll)

/*         return () => window.removeEventListener("scroll", handleScroll) */
    }, []) 

  return (
    <header className={`w-full flex justify-center border-b border-b-foreground/10 h-16 z-20 sticky top-0 ${isScrolled ? " bg-[#f2f2f2]" : ""} transition-all duration-300`}>
    <div className={`w-full max-w-8xl lg:px-8 ${isScrolled ? "lg:px-4" : "pt-8 " } flex justify-between items-center text-sm transition-all`}>
      <div className='flex items-center space-x-12'>
        <div className={`text-6xl cursor-default ${isScrolled ? "text-xl" : ""} transition-all text-[#3498db] font-semibold`}><a href='/'><span className='text-[]'>Y</span>irle</a></div>
        <ul className='flex space-x-4 text-gray-500 '>
          <li className={user ? "hover:text-gray-950 transition-all" : "hidden"}><Link href="/records">My Records</Link></li>
          <li className={user ? "hover:text-gray-950 transition-all" : "hidden"}><Link href="/records/add">Add Records</Link></li>
        </ul>
      </div>
      {user ? (
        <div className="flex  items-center gap-4">
          {user.email}
          <LogoutButton />
        </div>
      ) : (
        <Link
          href="/login"
          className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Login
        </Link>
      )}
    </div>
  </header>
  )
}

export default Header
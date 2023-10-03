
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const Header = ({user}) => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 z-20">
    <div className="w-full max-w-8xl lg:px-16 lg:pt-8 flex justify-between items-center text-sm">
      <div className=' text-6xl cursor-default'>Yirle</div>
      {user ? (
        <div className="flex  items-center gap-4">
          Hey, {user.email}!
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
  </nav>
  )
}

export default Header
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../../../components/LogoutButton'
import Image from 'next/image'
import AddForm from '../../../components/AddForm'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const supabase = createServerComponentClient({ cookies })

async function toggleTodo(todo) {
  "use server"
  return console.log(await supabase.from('todos').insert({
    title: "New todo"
  }))
}

export default async function Index() {

  const {
    data: { user },
  } = await supabase.auth.getUser()

if (user === null) {
    redirect("/login")
}

  return (
    <div className="w-full flex flex-col items-center ">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center text-sm">
          <div className=' text-6xl'>Yirle</div>
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
      <div className='flex flex-col mt-16 justify-center items-center'>
        <h1 className=' text-3xl font-light'>Please fill out the following form in order to register your record</h1>
        <AddForm />
      </div>
    </div>
  )
}

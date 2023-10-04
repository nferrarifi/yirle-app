import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../../components/LogoutButton'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Card from "../../components/Card"

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


 const records = await supabase.from('records').select().eq("userId", user.id)

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
      <div className=''>
        <section className='flex flex-col items-center justify-center space-y-4 lg:mb-10 mb-2 mt-8 '>
          <h1 className='text-6xl'>2023 Records</h1>
          <h4>These are the records you have experienced throughout the year</h4>
        </section>
        <container className='flex flex-wrap justify-center mx-20 lg:mx-40'>
          {
          records.data.map ((record) => (
            <Card record={record} />
          ))
        }
        </container>
      </div>
    </div>
  )
}

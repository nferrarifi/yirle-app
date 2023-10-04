import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../../../components/LogoutButton'
import Image from 'next/image'
import AddForm from "../../../components/AddForm"
import { redirect } from 'next/navigation'
import Header from '@/components/Header'

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
      <Header user={user} />
      <div className='flex flex-col mt-16 justify-center items-center'>
        <h1 className=' text-3xl font-light'>Please fill out the following form in order to register your record</h1>
        <AddForm />
      </div>
    </div>
  )
}

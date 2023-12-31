import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../../components/LogoutButton'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import CardContainer from "../../components/CardContainer"
import Header from '@/components/Header'



export const dynamic = 'force-dynamic'

async function toggleTodo(todo) {
  "use server"
  return console.log(await supabase.from('todos').insert({
    title: "New todo"
  }))
}

export default async function Index() {



const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user === null) {
    redirect("/login")
}

 const records = await supabase.from('records').select().eq("userId", user.id).filter("deleted", "eq", 0).order("created_at", {ascending: false})

  return (
    <div className="w-full flex flex-col items-center ">
      <Header user={user} />
      <div className=''>
        <section className='flex flex-col items-center justify-center space-y-4 lg:mb-10 mb-2 mt-8 '>
          <h1 className='text-6xl'>My Records</h1>
        </section>
        
        <CardContainer records={records} />
      </div>
    </div>
  )
}

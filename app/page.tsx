import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const supabase = createServerComponentClient({ cookies })

async function toggleTodo(todo: string) {
  "use server"
  return console.log(await supabase.from('todos').insert({
    title: "New todo"
  }))
}

export default async function Index() {

  const {
    data: { user },
  } = await supabase.auth.getUser()

console.log(user)

/*  const records = await supabase.from('records').select().eq("userId", user.id)
 */
  return (
    <div className="w-full flex flex-col items-center ">
      <Header user={user} />
      <HeroSection />
    </div>
  )
}


import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import SupabaseLogo from '../components/SupabaseLogo'
import NextJsLogo from '../components/NextJsLogo'
import Crudtest from '../components/Crudtest'
import DeployButton from '../components/DeployButton'
import Image from 'next/image'

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


 const todos = await supabase.from('records').select().eq("userId", user.id)

 console.log (todos)

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
          <DeployButton />
          {user ? (
            <div className="flex items-center gap-4">
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
      <div className=' text-white'>
        {todos.data[0].title}

{/*         {!todos.error && todos.data.length > 1 && 
          todos.data.map((todo) => <Crudtest todo={todo} toggleTodo={toggleTodo} /> )
        } */}
      </div>
    </div>
  )
}

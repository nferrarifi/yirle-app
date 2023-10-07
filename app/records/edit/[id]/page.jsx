import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import EditForm from "@/components/EditForm"
import { redirect } from 'next/navigation'
import Header from '@/components/Header'


export const dynamic = 'force-dynamic'




export default async function Index({params}) {

const supabase = createServerComponentClient({ cookies })


const {
  data: { user },
} = await supabase.auth.getUser()


const recordId = params.id
console.log(recordId)

if (user === null) {
    redirect("/login")
}

const record = await supabase.from('records').select().eq("userId", user.id).filter("deleted", "eq", 0).eq("id", recordId)


if (record.data.length === 0) {
    redirect("/records")
}

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <Header user={user} />
      <div className='flex flex-col mt-16 justify-center items-center'>
        <h1 className='text-xl xl:text-3xl font-light text-center'>Edit record</h1>
        <EditForm user={user} record={record.data[0]}/>
      </div>
    </div>
  )
}

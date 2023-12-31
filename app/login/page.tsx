import Link from 'next/link'
import Messages from './messages'

export default function Login() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 bg-slate-50 xl:my-12 border border-[#3498db] opacity-95">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-[#3498db] hover:bg-[#3498dbbd] flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 space-y-4 "
        action="/auth/sign-in"
        method="post"
      >
        <label className="text-[#3498db] text-3xl font-bold " htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
           focus:border-[#3498db] mb-4"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-[#3498db] text-3xl font-bold" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
           focus:border-[#3498db] mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <br/>
        <br/>
        <button className="bg-green-700 hover:bg-green-500 transition-all rounded px-4 py-2 text-[#efefef] mb-2">
          Login
        </button>
        <button
          formAction="/auth/sign-up"
          className="border border-gray-700 rounded px-4 py-2 text-black mb-2 hover:bg-slate-700 hover:text-[#efefef] transition-all"
        >
          Register
        </button>
        <Messages />
      </form>
    </div>
  )
}

import React from 'react'
import PostList from './postList'
import HomeSearch from './search'
import { useSession, signIn, signOut } from 'next-auth/react'

const Layout = () => {
  return (
    <div className="relative mx-auto max-w-7xl pt-16 sm:px-6 lg:px-8">
      <div className="flex w-full space-x-4 pt-6">
        <div className="relative flex flex-1 flex-col">
          <div className="w-full">
            <HomeSearch />
          </div>
          <div className="h-5 w-full" />
          <PostList />
        </div>
        <div className="relative hidden w-[300px] flex-col space-y-2 md:flex">
          <div className="h-16 w-full rounded-lg bg-white shadow">312</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div onClick={() => signIn()}>sign in</div>
          <div onClick={() => signOut()}>sign out</div>
        </div>
      </div>
    </div>
  )
}

export default Layout

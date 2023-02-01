import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const HomeSearch = () => {
  return (
    <div className="flex w-full items-center rounded-lg bg-white py-2.5 px-3.5 text-slate-400 shadow">
      <MagnifyingGlassIcon className="mr-2 h-5 w-5 stroke-slate-500" aria-hidden="true" />
      <input type="text" placeholder="search" className="flex-1" />
    </div>
  )
}

export default HomeSearch

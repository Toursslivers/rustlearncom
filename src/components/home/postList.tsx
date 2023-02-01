import React from 'react'
import { Post } from '../post'

const PostList = () => {
  return (
    <div className="flex h-auto w-full flex-col space-y-2">
      {Array.from(new Array(10)).map((i, index) => {
        return <Post key={index} />
      })}
    </div>
  )
}

export default PostList

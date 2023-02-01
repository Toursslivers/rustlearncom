import React from 'react'
import { BookmarkIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

const Post = () => {
  return (
    <div className="flex w-full flex-col space-y-2 rounded-md bg-white p-[1.25rem] shadow">
      <div className="post-title flex w-full items-center space-x-2">
        <div className="h-8 w-8 rounded-full">
          <img src="https://avatar.shuocdn.com/raw/23/4f7346806820374e872261dea0d62c3e.JPG?x-oss-process=style/thumbnail_square&v=0902" alt="" className="h-full w-full rounded-full" />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="text-[0.9375rem] leading-[1.375rem]">Shai Almog</div>
          <div className="text-[0.8125rem] leading-[1.125rem]">Jan 31</div>
        </div>
      </div>
      <div className="post-body flex flex-col">
        <h2>ChatGPT 可以访问互联网——Linux 终端模拟器就是证据？</h2>
        <div>
          <p>您是否曾经希望可以直接从 ChatGPT GUI 界面中运行 Linux 终端命令？</p>
        </div>
      </div>
      <div className="post-footer flex items-center justify-between pt-4">
        <div className="flex items-center space-x-2">
          <div className="post-tag flex items-center">
            <div className="rounded-full bg-slate-200 px-2 py-0.5 text-[0.8125rem] leading-[1.125rem]">Rust</div>
          </div>
          <div className="post-time text-[0.8125rem] leading-[1.125rem]">4分钟阅读时间</div>
        </div>
        <div className="flex items-center">
          <button className="iconBtn">
            <BookmarkIcon className="h-6 w-6" />
          </button>
          <button className="iconBtn">
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Post

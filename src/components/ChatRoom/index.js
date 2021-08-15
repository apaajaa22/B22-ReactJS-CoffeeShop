import React from 'react'
import ItemChat from '../ItemChat'
import { AiFillCamera } from 'react-icons/ai'

function ChatRoom() {
  return (
    <div className="flex flex-col space-y-3 flex-1">
      <div className="bg-white px-10 py-5 rounded-xl">
        <h3 className="font-bold text-3xl text-gray-500">Zulaikha</h3>
      </div>
      <div className="space-y-3 overflow-y-scroll no-scrollbar flex-1">
        <ItemChat />
        <ItemChat isMe />
        <ItemChat />
        <ItemChat isMe />
      </div>
      <div className="w-full flex-row flex justify-between bg-white px-10 py-4 rounded-xl items-center">
        <input
          type="text"
          className="w-full focus:outline-none"
          placeholder="Type a message..."
        />
        <button className="focus:outline-none">
          <AiFillCamera size={28} />
        </button>
      </div>
    </div>
  )
}

export default ChatRoom

import React from 'react'
import { Footer, Header, Search } from '../../components'
import ChatRoom from '../../components/ChatRoom'
import UserChat from '../../components/UserChat'

function Chat() {
  return (
    <div>
      <header className="hidden md:block px-32">
        <Header
          type="secondary"
          home="text-gray-500"
          product="text-gray-500"
          cart="text-gray-500"
          history="text-gray-500"
        />
      </header>
      <main className="bg-bg-chat w-full h-screen bg-cover px-32 py-20">
        <section className="w-full h-full rounded-md flex flex-row justify-center">
          <div className="w-threepersen bg-yellow-900 mr-10 rounded-xl px-8 pt-16 items-center flex flex-col">
            <div>
              <Search />
            </div>
            <p className='text-white my-5'>Click a conversation to start a chat</p>
            <div className='overflow-y-scroll no-scrollbar'>
              <UserChat />
              <UserChat />
              <UserChat />
              <UserChat />
              <UserChat />
              <UserChat />
              <UserChat />
              <UserChat />
            </div>
          </div>
          <ChatRoom />
        </section>
      </main>
      <footer className="px-32 py-20 hidden md:block ">
        <Footer />
      </footer>
    </div>
  )
}

export default Chat

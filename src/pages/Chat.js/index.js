/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { ILUserDefault } from '../../assets'
import { Footer, Header, Search } from '../../components'
import ChatRoom from '../../components/ChatRoom'
import ItemChat from '../../components/ItemChat'
import UserChat from '../../components/UserChat'
import { getUserChat, getChat, sendChat } from '../../redux/actions/chat'
import { AiFillCamera } from 'react-icons/ai'
import { RiSendPlaneFill } from 'react-icons/ri'
import { useState } from 'react'
import {io} from 'socket.io-client'

const socket = io('http://localhost:8080')

function Chat(props) {
  // eslint-disable-next-line no-unused-vars
  const { user } = props.chat
  const [chat, setChat] = useState('')
  const [recp, setRecp] = useState('')
  useEffect(() => {
    props.getUserChat(props.auth.token)
    console.log('aaaa', user.message)
    socket.on('recipient', data => {
      props.getChat(props.auth.token, data.sender)
    })
    // socket.on('hello', (arg) => {
    //   window.alert(arg) // world
    // })
  }, [])

  const chooseChat = (res) => {
    setRecp(res.recipient)
    props.getChat(props.auth.token, res.recipient)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setChat('')
    const form = {
      message: chat,
      recipient: recp
    }
      props.sendChat(props.auth.token,form, recp)
  }
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
            <p className="text-white my-5">
              Click a conversation to start a chat
            </p>
            <div className="overflow-y-scroll no-scrollbar">
              {user.message?.map((res) => {
                const isMe = props.users.users[0].id !== res.id_users
                console.log('sender',res.id_users, props.users.users[0].id)
                return (
                  <UserChat isMe={isMe}
                    onClick={() => chooseChat(res)}
                    name={res.name}
                    picture={res.picture === null ? ILUserDefault : res.picture}
                    chat={res.message}
                  />
                )
              })}
            </div>
          </div>
          <div className="flex flex-col space-y-3 flex-1">
            <div className="bg-white px-10 py-5 rounded-xl">
              <h3 className="font-bold text-3xl text-gray-500 capitalize">
                {props.chat.chat.recipient?.name}
              </h3>
            </div>
            <div className="space-y-3 overflow-y-scroll no-scrollbar flex-1">
              {props.chat.chat?.message?.map((res) => {
                const isMe = props.users.users[0].phone_number === res.sender
                return (
                  <ItemChat
                    isMe={!isMe}
                    chat={res.message}
                    name={
                      isMe
                        ? props.chat.chat.sender.name
                        : props.chat.chat.recipient.name
                    }
                    pic={
                      isMe
                        ? props.chat.chat.sender.picture
                        : props.chat.chat.recipient.picture
                    }
                  />
                )
              })}
            </div>
            <form onSubmit={onSubmit} className="w-full flex-row flex justify-between bg-white px-10 py-4 rounded-xl items-center">
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Type a message..."
                onChange={(e) => setChat(e.target.value)}
                value={chat}
              />
              <div className='items-center justify-center flex'>
                <button className="focus:outline-none">
                  <AiFillCamera size={28} />
                </button>
              </div>
              <div className='items-center rounded-full justify-center flex ml-5'>
                <button type='submit' className="focus:outline-none ">
                  <RiSendPlaneFill size={25} color='brown' />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="px-32 py-20 hidden md:block ">
        <Footer />
      </footer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  users: state.users,
  chat: state.chat,
})

const mapDispatchToProps = { getUserChat, getChat, sendChat }

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

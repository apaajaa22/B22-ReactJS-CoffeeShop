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
import { getUserChat, getChat, sendChat, getAllUser, deleteChat } from '../../redux/actions/chat'
import { AiFillCamera } from 'react-icons/ai'
import { RiSendPlaneFill } from 'react-icons/ri'
import { useState } from 'react'
import { io } from 'socket.io-client'
import Swal from 'sweetalert2'

const socket = io('https://fm22rezacoffeeshop.herokuapp.com')


function Chat(props) {
  // eslint-disable-next-line no-unused-vars
  const { user } = props.chat
  const [chat, setChat] = useState('')
  const [recp, setRecp] = useState('')
  const [send, setSend] = useState('')
  const [name, setName] = useState('')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(false)
  const messageEnd = React.useRef(null)

  const onScroll = () => {
    if (messageEnd && messageEnd.current){
      messageEnd.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }

  useEffect(() => {
    onScroll()
    props.getUserChat(props.auth.token)
    props.getAllUser(props.auth.token, '')
    console.log('aaaa', user.message)
    socket.on(props.users.users[0].phone_number, (data) => {
      props.getChat(props.auth.token, data.sender)
      props.getUserChat(props.auth.token)
    })
    // socket.on('hello', (arg) => {
    //   window.alert(arg) // world
    // })
  }, [onScroll()])

  const chooseChat = (res) => {
    console.log(res)
    setSelected(true)
    setRecp(
      props.users.users[0].phone_number === res.recipient
        ? res.sender
        : res.recipient
    )
    setSend(res.sender)
    setName(res.name)
    props.getChat(
      props.auth.token,
      props.users.users[0].phone_number === res.recipient
        ? res.sender
        : res.recipient
    )
  }

  const chooseChat2 = (res) => {
    console.log(res)
    setSelected(true)
    setRecp(
      res.phone_number
    )
    setSend(props.users.users[0].phone_number)
    setName(res.name)
    props.getChat(
      props.auth.token,
      props.users.users[0].phone_number !== res.phone_number
      && res.phone_number
    )
  }

  const onDelete = (res) => {
    console.log(res)
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('hapus')
        props.deleteChat(props.auth.token, res.id, recp, props.users.users[0].phone_number)
        Swal.fire(
          'Deleted!',
          'chat has been deleted.',
          'success'
        )
      }
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const form = {
      message: chat,
      recipient: recp,
    }
    props.sendChat(props.auth.token, form)
    setChat('')
  }

  const onEnterSearch = (e) => {
    if (e.key === 'Enter'){
      console.log(search)
      props.getAllUser(props.auth.token, search)
    }
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
              <Search type='main' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={onEnterSearch} />
            </div>
            <p className="text-white my-5">
              Click a conversation to start a chat
            </p>
            <div className="overflow-y-scroll overscroll-none no-scrollbar">
              {
                search.length <= 0  ?
                user.message?.map((res) => {
                const isMe = props.users.users[0].id !== res.id_users
                return (
                  <UserChat
                    isMe={isMe}
                    onClick={() => chooseChat(res)}
                    name={res.name}
                    picture={res.picture === null || undefined ? ILUserDefault : res.picture}
                    chat={res.message}
                  />
                )
              }) :
              props.chat.allUser.map((res) => {
                const isMe = props.users.users[0].id !== res.id_users
                return <UserChat
                    isMe={isMe}
                    onClick={() => chooseChat2(res)}
                    name={res.name}
                    picture={res.picture === null || undefined ?  ILUserDefault : res.picture}
                    chat={res.message}
                  />
              })
              }
            </div>
          </div>
          {selected ? <div className="flex flex-col space-y-3 flex-1">
            <div className="bg-white px-10 py-5 rounded-xl">
              <h3 className="font-bold text-3xl text-gray-500 capitalize">
                {name}
              </h3>
            </div>
            <div className="space-y-3 overflow-y-scroll overscroll-none no-scrollbar flex-1">
              {props.chat.chat.message?.map((res) => {
                const isMe = props.users.users[0].phone_number === res.sender
                return (
                  <ItemChat
                  onClick={() => onDelete(res)}
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
              <div ref={messageEnd}>
                .
              </div>
            </div>
            <form
              onSubmit={onSubmit}
              className="w-full flex-row flex justify-between bg-white px-10 py-4 rounded-xl items-center"
            >
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Type a message..."
                onChange={(e) => setChat(e.target.value)}
                value={chat}
              />
              <div className="items-center justify-center flex">
                <button type='button' className="focus:outline-none">
                  <AiFillCamera size={28} />
                </button>
              </div>
              <div className="items-center rounded-full justify-center flex ml-5">
                <button type="submit" className="focus:outline-none ">
                  <RiSendPlaneFill size={25} color="brown" />
                </button>
              </div>
            </form>
          </div> : <div className='flex flex-1 bg-white rounded-xl items-center justify-center'>
            <p className='text-2xl font-bold'>Select user to start a chat</p>
          </div>}
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

const mapDispatchToProps = { getUserChat, getChat, sendChat, getAllUser, deleteChat }

export default connect(mapStateToProps, mapDispatchToProps)(Chat)

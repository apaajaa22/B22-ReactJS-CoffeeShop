/* eslint-disable react/prop-types */
import React from 'react'
import IsMe from './IsMe'
import IsOther from './IsOther'

function ItemChat({isMe, pic, name, chat, onClick}) {
  if(isMe){
    return <IsMe pic={pic} name={name} chat={chat} />
  }else{
    return <IsOther  pic={pic} name={name} chat={chat} onClick={onClick}/>
  }
}

export default ItemChat

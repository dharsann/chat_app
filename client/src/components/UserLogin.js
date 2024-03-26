import React, { useState } from 'react'
import {CommentOutlined} from '@ant-design/icons'
import _ from  'lodash'
const button={
    width:'10%',
    height:50,
    fontWeight:'bold',
    borderRadius:10,
    backgroundColor:'#075e54',
    borderWidth:0,
    color:'#fff',
    margin:10
}
export default function UserLogin({setUser}) {
    const [user,setAUser]=useState("")
    function handleSetUser(){
        if(!user) return
        localStorage.setItem("user",user)
        setUser(user)
        localStorage.setItem("avatar",`https://picsum.photos/id/${_.random(1,1000)}/200/300`)
    }
  return (
    <div>
        <h1 style={{margin: 30,textAlign:'center'}}><CommentOutlined color={'green'}/>Super Chat</h1>
        <input
    style={{
        margin: '10px auto', // Center horizontally
        height: 40,
        width: '45%',
        borderRadius: 20,
        borderWidth: 20,
        fontSize: 25
    }}
    value={user}
    onChange={e => setAUser(e.target.value)}
    placeholder="Write a name"
/>
    <button
        onClick={()=>handleSetUser()}
        style={button}>
        Login
    </button>
    </div>
  )
}

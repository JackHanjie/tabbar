import React, { memo } from 'react'
import Navbar from '../component/NavBar/navbar'

const Message = memo(() => {
  return (
    <div>
      <Navbar name="message"/>
      message
    </div>
  )
})

export default Message
import React, { memo } from 'react'
import Navbar from '../component/NavBar/navbar'

const Photos = memo(() => {
  return (
    <div>
      <Navbar name="photos"/>
    </div>
  )
})

export default Photos
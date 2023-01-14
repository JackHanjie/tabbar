import React, { memo } from 'react'
import { NavBar } from './style'

const Navbar = memo((props) => {
  return (
    <NavBar>{props.name}</NavBar>
  )
})

export default Navbar
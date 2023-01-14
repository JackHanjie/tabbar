import React, { Fragment, memo } from 'react'
import {Section} from './style'

import Navbar from '../component/NavBar/navbar'

const Profile = memo(() => {
  return (
    

    <Fragment>
      <Navbar name="profile"/>
      <Section>
        <div class="grid">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
          <div>Item 6</div>
          <div>Item 7</div>
          <div>Item 8</div>
          <div>Item 9</div>
        </div>
      </Section>
    </Fragment>
  )
})

export default Profile
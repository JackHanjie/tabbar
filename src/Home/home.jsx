import React, { memo, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Navigation, Indicator } from './style'

const Home = memo(() => {

  const homeRef = useRef()
  const profileRef = useRef()
  const messageRef = useRef()

  const photosRef = useRef()
  const settingRef = useRef()

  const handleHome = () => {
    homeRef.current.classList.add('active')
    profileRef.current.classList.remove('active')
    messageRef.current.classList.remove('active')
    photosRef.current.classList.remove('active')
    settingRef.current.classList.remove('active')
  }

  const handleProfile = () => {
    homeRef.current.classList.remove('active')
    profileRef.current.classList.add('active')
    messageRef.current.classList.remove('active')
    photosRef.current.classList.remove('active')
    settingRef.current.classList.remove('active')
  }

  const  handleSetting = () => {
    homeRef.current.classList.remove('active')
    profileRef.current.classList.remove('active')
    messageRef.current.classList.remove('active')
    photosRef.current.classList.remove('active')
    settingRef.current.classList.add('active')
  }

  const handlePhotos = () => {
    homeRef.current.classList.remove('active')
    profileRef.current.classList.remove('active')
    messageRef.current.classList.remove('active')
    photosRef.current.classList.add('active')
    settingRef.current.classList.remove('active')

  }

  const handleMessage = () => {
    homeRef.current.classList.remove('active')
    profileRef.current.classList.remove('active')
    messageRef.current.classList.add('active')
    photosRef.current.classList.remove('active')
    settingRef.current.classList.remove('active')
  }


  return (
    <div>
      <Outlet />
      <Navigation>    
       <ul>
         <li className="list active" ref={homeRef} onClick={handleHome}>
           <Link to="/" className='link'>
             <span className="icon">
               <ion-icon name="home-outline"></ion-icon>
             </span>
             <span className="text">Home</span>
           </Link>
         </li>
         <li className="list" ref={profileRef} onClick={handleProfile}>
           <Link to="/profile" className='link'>
             <span className="icon">
               <ion-icon name="person-outline"></ion-icon>
             </span>
             <span className="text">Profile</span>
           </Link>
         </li>
         <li className="list" ref={messageRef} onClick={handleMessage}>
           <Link to="/message" className='link'>
             <span className="icon">
               <ion-icon name="chatbubble-outline"></ion-icon>
             </span>
             <span className="text">Message</span>
           </Link>
         </li>
         <li className="list" ref={photosRef} onClick={handlePhotos}>
           <Link to="/photos" className='link'>
             <span className="icon">
               <ion-icon name="camera-outline"></ion-icon>
             </span>
             <span className="text">Photos</span>
           </Link>
         </li>
         <li className="list" ref={settingRef} onClick={handleSetting}>
           <Link to="/setting" className='link'>
             <span className="icon">
               <ion-icon name="settings-outline"></ion-icon>
             </span>
             <span className="text">Settings</span>
           </Link>
         </li>
         
          <div className='indicator'>

          </div>
         
       </ul>
       
   </Navigation>
    </div>
  )
})

export default Home
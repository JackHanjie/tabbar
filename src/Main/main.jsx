import React, { Fragment, memo, Suspense, useEffect, useRef, useState } from 'react'
import { Nav, Card } from './style'

import Navbar from '../component/NavBar/navbar';
import Battery from './Battery/battery';

const Main = memo(() => {
  const secRef = useRef()

  const handleIcon = () => {
    secRef.current.classList.toggle("dark")
  }
  useEffect(() => {
    timeId()
    return () => clearInterval(timeId)
  },[])

  const [hour,setHour] = useState(0)
  const [min,setMin] = useState(0)
  const [sec,setSec] = useState(0)
  const [d, setD] = useState("Am")

  const timeId = () => setInterval(()=>{

    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; //if hour is smaller than 12, than its value will be AM else its value will be pm
    hour = hour > 12 ? hour - 12 : hour; //if hour value is greater than 12 than 12 will subtracted ( by doing this we will get value till 12 not 13,14 or 24 )
    hour = hour == 0 ? hour = 12 : hour; // if hour value is  0 than it value will be 12

    // adding 0 to the front of all the value if they will less than 10
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    setHour(hour)
    setMin(min)
    setSec(sec)
    setD(d)
    

  }, 1000); // 1000 milliseconds = 1s

 

  return (
    <Fragment>
      <Navbar name="home"/>
      <Suspense>
        <Nav>
          <section ref={secRef}>
            <div className="container">
              <div className="icons" onClick={handleIcon}>
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
              </div>
              <div className="time">
                <div className="time-colon">
                  <div className="time-text">
                    <span className="num hour_num">{hour}</span>
                    <span className="text">Hours</span>
                  </div>
                  <span className="colon">:</span>
                </div>
                <div className="time-colon">
                  <div className="time-text">
                    <span className="num min_num">{min}</span>
                    <span className="text">Minutes</span>
                  </div>
                  <span className="colon">:</span>
                </div>
                <div className="time-colon">
                  <div className="time-text">
                    <span className="num sec_num" >{sec}</span>
                    <span className="text">Seconds</span>
                  </div>
                  <span className="am_pm">{d}</span>
                </div>
              </div>
            </div>
            
          </section>

        </Nav>
      </Suspense>
      
      <Battery/>
      
    </Fragment>
  )
})

export default Main
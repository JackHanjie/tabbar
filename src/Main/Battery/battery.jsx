import React, { memo, useEffect, useState } from 'react'
import { Div } from './style'

const Battery = memo(() => {
  
  const [batterManager, setBatteryManager] = useState({})
    
  useEffect(() => {
    GetBattery()
  },[])

  const GetBattery = () => {
    navigator.getBattery().then((batter) => {
        setBatteryManager(batter)
        console.log(batter)
    })
  }
  const {charging, chargingTime, dischargingTime, level, } = batterManager
  return (
    <Div>
        <div className="grid">
            <div className='time-text'>
              <span>
                <ion-icon name="battery-half-outline"></ion-icon>
              </span>
              <span>{(level * 100).toFixed(2)}%</span>
            </div>
            <div className='time-text'>
               <span>
                {charging ? <ion-icon name="battery-charging-outline"></ion-icon> : <ion-icon name="battery-full-outline"></ion-icon>}
               </span>
              <span>{charging ? "充电中...":"满电"} </span>
            </div>
            <div className='time-text'>
              <span>
                <ion-icon name="journal-outline"></ion-icon>
              </span>
              <span>{navigator.appName}</span> 
            </div>
            <div className='time-text'>
                <span>
                <ion-icon name="grid-outline"></ion-icon>
                </span>
               <span>平台{navigator.platform.substring(0,5)}</span>
            </div>
            <div className='time-text'>
                <span>
                <ion-icon  name="rocket-outline"></ion-icon>
                </span>
               <span>网络{navigator.onLine ? "在线":"离线"}</span>
            </div>
            <div className='time-text'> 
                <span>{navigator.userAgent.substring(0,12)}</span>
            </div>
            
            
        </div>
        
        
        
        
        
    </Div>
  )
})

export default Battery
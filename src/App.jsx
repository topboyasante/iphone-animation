import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'

import Phone from './assets/track-phone.webp'

function App() {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline(
      {
        scrollTrigger:{
          trigger:".main-container",
          scrub:0.6,
          start:"top 100%",
          end:"bottom 100%",
        }
      }
    )
    tl.to(".phone",
      {
        x:"40vw",
        duration: 0.5,
      }
    )
    tl.to(".phone",
      {
        rotate:0,
        duration: 0.5,
      }
    )
    tl.to(".music-image",
      {
       display:"block",
        duration:0.5,
      }
    )
    tl.to(".music-image",
      {
        left:"20%",
        duration:1,
      }
    ).to(".idea-image",
    {
     display:"block",
    }).to(".idea-image",
    {
      right:"16%"
    })
  })
  return (
   <>
   <p className='prev-text'>Life is defined by our actions. Everything counts. Books 
   you've read, kilometers you've run, every cup of coffee, every takeoff and every 
   landing, every workout, every headspace session, every movie, every night out, and 
   every glass of water the next morning. Everything counts. And everything that counts
    — shapes us.Haptic is a simple and minimalistic action-based journal for iPhone.
    Track your habits and activities. All in one timeline.
    </p>
    <main className='main-container'>
        <img src={Phone} alt="phone" className='phone' />
        <img src="https://twitter-recreations.vercel.app/assets/haptic/listened-card.webp" alt="jik" 
        className='music-image'/>
        <img src="https://twitter-recreations.vercel.app/assets/haptic/idea-card.webp" alt="jik" 
        className='idea-image'/>
    </main>
    </>
  )
}

export default App
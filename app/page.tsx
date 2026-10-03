"use client"

import { TextCard } from "./components/textcard"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function GaspPage() {
  const headingRef = useRef<HTMLDivElement>(null)
  const carRef = useRef<HTMLImageElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  useEffect(() => {

    gsap.set(".stat-card", {
      opacity: 0,
      y: 30,
    })
  
    
    gsap.set(textRef.current, {
      opacity: 0,
    })
  
 
    gsap.set(carRef.current, {
      left: "0%",
      xPercent: -100,
    })
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        markers: process.env.NODE_ENV === "development",
      },
    })
  
   
    tl.to(
      carRef.current,
      {
        left: "100%",
        xPercent: 0,
        duration: 4,
        ease: "none",
      }
    )
  
    tl.to(
      textRef.current,
      {
        opacity: 1,
        duration: 4,
      },
      "<"
    )
  
    // Cards appear
    tl.to(
      ".stat-card",
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=2"
    )
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
    

  return (
    <div className="bg-slate-300 min-h-[300vh] w-full">
      
      <div ref={heroRef} className="min-h-screen w-full flex flex-col justify-center px-12">
        
        
        <div className="flex gap-6 items-center justify-end pb-8">
          <div className="stat-card">
            <TextCard
              color="yellow"
              title="58%"
              description="Increase in pick up point use"
            />
          </div>

          <div className="stat-card">
            <TextCard
              color="grey"
              title="27%"
              description="Increase in pick up point use"
            />
          </div>
        </div>

        
        <div
          ref={headingRef}
          className="min-h-48 w-full bg-slate-800 flex items-center justify-center relative overflow-hidden rounded-2xl shadow-xl"
        >
          <p ref={textRef} className="text-slate-100 text-6xl md:text-8xl font-black tracking-wider z-10">
          WELCOME TO ITZFIZZ
          </p>
          <div>
          <img
            ref={carRef}
            src="/car.png"
            alt="Moving Car"
            className="h-24 md:h-32 w-auto absolute bottom-2 object-contain z-20 pointer-events-none"
          />
          </div>
        </div>

      
        <div className="flex gap-6 items-center justify-end pt-8">
          <div className="stat-card">
            <TextCard
              color="blue"
              title="23%"
              description="Decreased in customer phone calls"
            />
          </div>

          <div className="stat-card">
            <TextCard
              color="orange"
              title="40%"
              description="Decreased in customer phone calls"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
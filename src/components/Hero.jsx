import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.5 }
    )
  }, [])

  return (
    <section className="h-screen w-full flex items-center justify-center relative z-10 pointer-events-none">
      <h1 ref={titleRef} className="text-[15vw] font-bold leading-none tracking-tighter mix-blend-difference text-white select-none">
        TOBY CRUST
      </h1>
      {/* <ThreeBackground/> */}
    </section>
  )
}

export default Hero

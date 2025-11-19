import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power3.out"
      })
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
      })
    }

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)
    
    const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    const observer = new MutationObserver((mutations) => {
        const newElements = document.querySelectorAll('a, button, .cursor-pointer');
        newElements.forEach(el => {
            el.removeEventListener('mouseenter', handleHoverStart);
            el.removeEventListener('mouseleave', handleHoverEnd);
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });


    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
      observer.disconnect();
    }
  }, [])

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    if (isHovering) {
      gsap.to(cursor, { scale: 0.5, duration: 0.3 })
      gsap.to(follower, { scale: 3, opacity: 0.5, backgroundColor: '#fff', mixBlendMode: 'difference', duration: 0.3 })
    } else {
      gsap.to(cursor, { scale: 1, duration: 0.3 })
      gsap.to(follower, { scale: 1, opacity: 1, backgroundColor: 'transparent', mixBlendMode: 'normal', duration: 0.3 })
    }
  }, [isHovering])

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 ease-out"
      />
    </>
  )
}

export default CustomCursor

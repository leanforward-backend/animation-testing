import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: 1, title: "Project Alpha", category: "Motion", image: "https://placehold.co/600x400/222/fff?text=Alpha" },
  { id: 2, title: "Project Beta", category: "3D Design", image: "https://placehold.co/600x800/333/fff?text=Beta" },
  { id: 3, title: "Project Gamma", category: "Branding", image: "https://placehold.co/600x500/444/fff?text=Gamma" },
  { id: 4, title: "Project Delta", category: "Web", image: "https://placehold.co/600x600/555/fff?text=Delta" },
  { id: 5, title: "Project Epsilon", category: "Motion", image: "https://placehold.co/600x400/666/fff?text=Epsilon" },
  { id: 6, title: "Project Zeta", category: "3D Design", image: "https://placehold.co/600x700/777/fff?text=Zeta" },
]

const ProjectItem = ({ project }) => {
  const itemRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(itemRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    
    gsap.to(imgRef.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

  }, [])

  return (
    <div ref={itemRef} className="group relative w-full mb-20 cursor-pointer">
      <div className="overflow-hidden w-full h-[60vh] bg-gray-900 relative">
        <img 
          ref={imgRef}
          src={project.image} 
          alt={project.title} 
          className="w-full h-[120%] object-cover object-center absolute top-[-10%]" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
      </div>
      <div className="mt-4 flex justify-between items-baseline mix-blend-difference">
        <h3 className="text-4xl font-bold uppercase tracking-tight">{project.title}</h3>
        <span className="text-sm font-mono opacity-70">{project.category}</span>
      </div>
    </div>
  )
}

const ProjectGrid = () => {
  return (
    <section className="w-full px-4 md:px-10 py-20 bg-off-black relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-full max-w-[1600px] mx-auto">
        {projects.map((project, index) => (
          <div key={project.id} className={index % 2 === 1 ? "md:mt-40" : ""}>
             <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectGrid

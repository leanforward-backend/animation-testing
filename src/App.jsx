import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import Layout from './components/Layout'
import ProjectGrid from './components/ProjectGrid'
import ThreeBackground from './components/ThreeBackground'

const Footer = () => {
  return (
    <footer className="h-[50vh] flex flex-col items-center justify-center bg-off-white text-off-black relative z-20">
      <h2 className="text-[10vw] font-bold tracking-tighter">LET'S TALK</h2>
      <h2 className="text-[3vw] tracking-tighter" href="tobycrust@gmail.com">tobycrust@gmail.com</h2>

    </footer>
  )
}

function App() {
  return (
    <Layout>
      <CustomCursor />
      <ThreeBackground />
      <Hero />
      <ProjectGrid />
      <Footer />
    </Layout>
  )
}

export default App

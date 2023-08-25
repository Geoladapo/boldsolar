import './index.css'
import HeroSection from './components/HeroSection'
import Ourservices from './components/Ourservices'
import Stats from './components/Stats'
import Growth from './components/Growth'
import Testimonials from './components/Testimonials'
import FAQs from './components/FAQs'
import Blog from './components/Blog'

function App() {

  return (
    <div className=''>
     <HeroSection/>
     <Ourservices/>
     <Stats/>
     <Growth/>
     <Testimonials/>
     <FAQs/>
     <Blog/>
    </div>
  )
}

export default App

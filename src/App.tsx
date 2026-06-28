import AppLayout from './components/Layout/AppLayout'
import Hero from './components/Hero/Hero'
import Engineer from './components/Engineer/Engineer'
import Achievements from './components/Achievements/Achievements'
import Values from './components/Values/Values'
import Footer from './components/Footer/Footer'

function App() {
  return <AppLayout>
        <div
          className={`transition-all duration-700`}
        >
          <Hero />
          <Engineer />
          <Achievements />
          <Values />
          <Footer />
        </div>
    </AppLayout>
}

export default App

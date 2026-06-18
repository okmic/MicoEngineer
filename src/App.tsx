import AppLayout from './components/Layout/AppLayout'
import Hero from './components/Hero/Hero'
import Engineer from './components/Engineer/Engineer'

function App() {
  return <AppLayout>
        <div
          className={`transition-all duration-700`}
        >
          <Hero />
          <Engineer />
        </div>
    </AppLayout>
}

export default App

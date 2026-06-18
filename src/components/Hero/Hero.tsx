import { siteData } from '../../data'

export default function Hero() {
  const { hero } = siteData

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden px-4 sm:px-6">
      <div className="relative z-10 text-center w-full max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 leading-tight tracking-tighter">
            {hero.title.split(' ')[0]}
            <span className="inline-block mt-2 sm:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#22D3EE]">
              {' '}{hero.title.split(' ')[1]}
            </span>
          </h1>
        </div>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('education')}>
        <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-[#06B6D4]/50 rounded-full flex justify-center hover:border-[#06B6D4] transition-all duration-300">
          <div className="w-1 h-2 sm:h-3 bg-[#06B6D4] rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

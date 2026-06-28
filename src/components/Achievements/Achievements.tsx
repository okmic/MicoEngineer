import { siteData } from '../../data'
import { ExternalLink } from 'lucide-react'

export default function Achievements() {
  const { achievements } = siteData

  return (
    <section id="achievements" className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/5 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse"></span>
            <span className="text-[#06B6D4] text-[10px] font-mono tracking-[0.2em]">ДОСТИЖЕНИЯ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ключевые вехи
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#22D3EE] to-[#67E8F9]">
              профессионального пути
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 font-light">
            {achievements.subtitle1}
          </p>
        </div>

        <div className="space-y-6">
          {achievements.items.map((item, index) => {
            const hasLink = item.link && item.link.length > 0
            const isLeft = index % 2 === 0

            const Card = () => (
              <div className="group relative bg-[#0F172A]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-[#06B6D4]/30 transition-all duration-500 hover:bg-[#0F172A]/60 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(6,182,212,0.05)]">
                <div className="flex flex-col md:flex-row">
                  <div className={`relative md:w-72 lg:w-80 h-48 md:h-auto overflow-hidden bg-gradient-to-br from-[#06B6D4]/10 to-[#0F172A] ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
                    {item.img ? (
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#0F172A]/80">
                        <div className="text-center">
                          <span className="text-[#06B6D4]/20 text-sm font-mono tracking-wider">ДОСТИЖЕНИЕ</span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>

                  <div className={`flex-1 p-6 lg:p-8 relative ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#06B6D4]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-[#06B6D4] transition-colors duration-300 font-mono tracking-wide">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>

                      {hasLink && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 mt-1 p-2 rounded-lg bg-[#06B6D4]/5 border border-[#06B6D4]/20 hover:bg-[#06B6D4] hover:border-[#06B6D4] transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] group/link"
                        >
                          <ExternalLink className="w-5 h-5 text-[#06B6D4] group-hover/link:text-white transition-colors duration-300" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-20">
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#06B6D4]/30 group-hover:border-[#06B6D4]/70 transition-colors duration-300"></div>
                </div>
              </div>
            )

            if (hasLink) {
              return (
                <div key={item.id}>
                  <Card />
                </div>
              )
            }

            return (
              <div key={item.id}>
                <Card />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
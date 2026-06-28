import { siteData } from '../../data'
import { Calendar, Laptop, Briefcase, Building2 } from 'lucide-react'

export default function Engineer() {
  const { education } = siteData

  const getTypeLabel = (id: string) => {
    if (id === 'skga') return 'РАБОТА'
    if (id === 'freelance1' || id === 'freelance2') return 'ФРИЛАНС'
    return 'ДИПЛОМ'
  }

  const getTypeColor = (id: string) => {
    if (id === 'skga') return 'text-[#34D399] border-[#34D399]/30 bg-[#34D399]/10'
    if (id === 'freelance1' || id === 'freelance2') return 'text-[#F59E0B] border-[#F59E0B]/30 bg-[#F59E0B]/10'
    return 'text-[#06B6D4] border-[#06B6D4]/30 bg-[#06B6D4]/10'
  }

  return <section id="education" className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 relative">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/5 backdrop-blur-sm mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse"></span>
          <span className="text-[#06B6D4] text-[10px] font-mono tracking-[0.2em]">ОБРАЗОВАНИЕ И ОПЫТ</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Профессиональный
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#22D3EE] to-[#67E8F9]">
            путь и развитие
          </span>
        </h2>
      </div>

      <div className="space-y-6">
        {education.items.map((item, index) => {
          const Icon = item.icon
          const isLeft = index % 2 === 0
          const isFreelance = item.id === 'freelance1' || item.id === 'freelance2'
          const isWork = item.id === 'skga'

          return (
            <div
              key={item.id}
              className="group relative bg-[#0F172A]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-[#06B6D4]/30 transition-all duration-500 hover:bg-[#0F172A]/60 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(6,182,212,0.05)]"
            >
              <div className="flex flex-col md:flex-row">
                <div className={`relative md:w-72 lg:w-80 h-56 md:h-auto overflow-hidden bg-gradient-to-br from-[#06B6D4]/10 to-[#0F172A] ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#0F172A]/80">
                      <div className="text-center">
                        {isWork ? (
                          <>
                            <Building2 className="w-16 h-16 text-[#34D399]/20 mx-auto mb-3" />
                            <span className="text-[#34D399]/20 text-sm font-mono tracking-wider">РАБОТА</span>
                          </>
                        ) : isFreelance ? (
                          <>
                            <Laptop className="w-16 h-16 text-[#F59E0B]/20 mx-auto mb-3" />
                            <span className="text-[#F59E0B]/20 text-sm font-mono tracking-wider">ФРИЛАНС</span>
                          </>
                        ) : (
                          <>
                            <Briefcase className="w-16 h-16 text-[#06B6D4]/20 mx-auto mb-3" />
                            <span className="text-[#06B6D4]/20 text-sm font-mono tracking-wider">ДИПЛОМ</span>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[#06B6D4]/60 text-xs font-mono border border-[#06B6D4]/20 rounded-full px-4 py-1.5 bg-[#0F172A]/80 backdrop-blur-sm">
                      {item.period}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className={`text-[10px] font-mono tracking-wider px-3 py-1 rounded-full border ${getTypeColor(item.id)}`}>
                      {getTypeLabel(item.id)}
                    </span>
                  </div>
                </div>
                <div className={`flex-1 p-6 lg:p-8 relative ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#06B6D4]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.gradient} shadow-[0_0_30px_rgba(6,182,212,0.05)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-300 group-hover:scale-110 shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#06B6D4] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-[#22D3EE] text-sm font-medium">{item.institution}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.details.map((detail) => (
                        <span key={detail} className="text-gray-400 text-xs font-mono border border-white/10 rounded-full px-3 py-1 bg-white/5 hover:border-[#06B6D4]/30 hover:text-[#06B6D4] transition-all duration-300">
                          {detail}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-[#06B6D4]/40 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
}

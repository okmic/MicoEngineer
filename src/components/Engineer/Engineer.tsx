import { siteData } from '../../data'
import { Calendar, Laptop, Briefcase, Building2 } from 'lucide-react'

type BadgeTone = {
  label: string
  text: string
  border: string
  bg: string
  glow: string
}

const badgeTones: Record<'work' | 'freelance' | 'project', BadgeTone> = {
  work: {
    label: 'РАБОТА',
    text: 'text-white',
    border: 'border-emerald-400/60',
    bg: 'bg-emerald-500/80',
    glow: 'shadow-[0_2px_12px_rgba(16,185,129,0.45)]',
  },
  freelance: {
    label: 'ФРИЛАНС',
    text: 'text-white',
    border: 'border-amber-400/60',
    bg: 'bg-amber-500/80',
    glow: 'shadow-[0_2px_12px_rgba(245,158,11,0.45)]',
  },
  project: {
    label: 'ДИПЛОМ',
    text: 'text-white',
    border: 'border-cyan-400/60',
    bg: 'bg-cyan-500/80',
    glow: 'shadow-[0_2px_12px_rgba(6,182,212,0.45)]',
  },
}

const getTypeTone = (id: string): BadgeTone => {
  if (id.startsWith('work')) return badgeTones.work
  if (id === 'freelance1' || id === 'freelance2') return badgeTones.freelance
  return badgeTones.project
}

export default function Engineer() {
  const { education } = siteData

  return (
    <section id="education" className="py-16 sm:py-24 lg:py-32 px-3 sm:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 sm:mb-16 lg:mb-20 px-1">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/5 backdrop-blur-sm mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse"></span>
            <span className="text-[#06B6D4] text-[9px] sm:text-[10px] font-mono tracking-[0.18em] sm:tracking-[0.2em]">ОБРАЗОВАНИЕ И ОПЫТ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Профессиональный
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#22D3EE] to-[#67E8F9]">
              путь и развитие
            </span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {education.items.map((item, index) => {
            const Icon = item.icon
            const isLeft = index % 2 === 0
            const isFreelance = item.id === 'freelance1' || item.id === 'freelance2'
            const isWork = item.id.startsWith('work')
            const tone = getTypeTone(item.id)

            return (
              <div
                key={item.id}
                className="group relative bg-[#0F172A]/40 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 hover:border-[#06B6D4]/30 transition-all duration-500 hover:bg-[#0F172A]/60 md:hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(6,182,212,0.05)]"
              >
                <div className="flex flex-col md:flex-row">
                  <div className={`relative md:w-72 lg:w-80 h-44 sm:h-52 md:h-auto overflow-hidden bg-gradient-to-br from-[#06B6D4]/10 to-[#0F172A] ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
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
                              <Building2 className="w-12 h-12 sm:w-16 sm:h-16 text-[#34D399]/20 mx-auto mb-2 sm:mb-3" />
                              <span className="text-[#34D399]/20 text-xs sm:text-sm font-mono tracking-wider">РАБОТА</span>
                            </>
                          ) : isFreelance ? (
                            <>
                              <Laptop className="w-12 h-12 sm:w-16 sm:h-16 text-[#F59E0B]/20 mx-auto mb-2 sm:mb-3" />
                              <span className="text-[#F59E0B]/20 text-xs sm:text-sm font-mono tracking-wider">ФРИЛАНС</span>
                            </>
                          ) : (
                            <>
                              <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 text-[#06B6D4]/20 mx-auto mb-2 sm:mb-3" />
                              <span className="text-[#06B6D4]/20 text-xs sm:text-sm font-mono tracking-wider">ДИПЛОМ</span>
                            </>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                      <span className="text-[#06B6D4]/70 text-[10px] sm:text-xs font-mono border border-[#06B6D4]/20 rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5 bg-[#0F172A]/80 backdrop-blur-sm">
                        {item.period}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                      <span
                        className={[
                          'inline-flex items-center rounded-full border px-2.5 sm:px-3 py-0.5 sm:py-1 backdrop-blur-md',
                          'text-[9px] sm:text-[10px] font-mono font-semibold tracking-[0.12em] sm:tracking-[0.15em]',
                          tone.text,
                          tone.border,
                          tone.bg,
                          tone.glow,
                        ].join(' ')}
                      >
                        {tone.label}
                      </span>
                    </div>
                  </div>

                  <div className={`flex-1 min-w-0 p-4 sm:p-6 lg:p-8 relative ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#06B6D4]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${item.gradient} shadow-[0_0_30px_rgba(6,182,212,0.05)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-300 group-hover:scale-110 shrink-0`}>
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-[#06B6D4] transition-colors duration-300 break-words">
                            {item.title}
                          </h3>
                          <p className="text-[#22D3EE] text-xs sm:text-sm font-medium break-words">{item.institution}</p>
                        </div>
                      </div>

                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light mb-3 sm:mb-4">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {item.details.map((detail) => (
                          <span key={detail} className="text-gray-400 text-[10px] sm:text-xs font-mono border border-white/10 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 bg-white/5 hover:border-[#06B6D4]/30 hover:text-[#06B6D4] transition-all duration-300">
                            {detail}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[#06B6D4]/40 text-[10px] sm:text-xs font-mono">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
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
  )
}
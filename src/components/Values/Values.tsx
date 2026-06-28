import { siteData } from "../../data"

export default function Values() {
    const { values } = siteData

    return <section id="values" className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6 relative">
        <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 sm:mb-20">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#06B6D4]/20 bg-[#06B6D4]/5 backdrop-blur-sm mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse"></span>
                    <span className="text-[#06B6D4] text-[10px] font-mono tracking-[0.2em]">ЦЕННОСТИ</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Принципы, которые
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#22D3EE] to-[#67E8F9]">
                        определяют мою работу
                    </span>
                </h2>
            </div>

            <div className="space-y-10">
                {values.items.map((value, index) => {
                    const Icon = value.icon
                    return (
                        <div
                            key={index}
                            className="group relative pl-8 border-l-2 border-[#06B6D4]/10 hover:border-[#06B6D4]/40 transition-all duration-500"
                        >
                            <div className="absolute -left-3 top-1">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${value.gradient} opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(6,182,212,0.05)]`}>
                                    <Icon className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            <div className="pl-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#06B6D4] transition-colors duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
}
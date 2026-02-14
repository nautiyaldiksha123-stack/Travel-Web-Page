import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Calendar, Users } from 'lucide-react'

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80"
                    alt="Tropical paradise beach"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-950/50 to-emerald-950/90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 to-transparent"></div>
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <span className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/15 border border-emerald-400/25 rounded-full text-emerald-300 text-sm font-medium backdrop-blur-sm mb-8">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                        Explore the World with Us
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-playfair)] leading-tight mb-6"
                >
                    <span className="text-emerald-50">Discover Your</span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                        Dream Destination
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-200/70 mb-12 leading-relaxed"
                >
                    Embark on extraordinary journeys to the world's most breathtaking destinations.
                    Luxury travels crafted just for you — from pristine beaches to majestic mountains.
                </motion.p>

                {/* Search Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-emerald-950/50 backdrop-blur-xl border border-emerald-700/30 rounded-2xl p-6 shadow-2xl shadow-emerald-900/30">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="flex items-center gap-3 bg-emerald-900/40 border border-emerald-700/20 rounded-xl px-4 py-3 hover:border-emerald-500/40 transition-colors group cursor-pointer">
                                <MapPin className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-xs text-emerald-400/70 font-medium">Destination</p>
                                    <p className="text-sm text-emerald-100">Where to?</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-emerald-900/40 border border-emerald-700/20 rounded-xl px-4 py-3 hover:border-emerald-500/40 transition-colors group cursor-pointer">
                                <Calendar className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-xs text-emerald-400/70 font-medium">Check In</p>
                                    <p className="text-sm text-emerald-100">Select Date</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-emerald-900/40 border border-emerald-700/20 rounded-xl px-4 py-3 hover:border-emerald-500/40 transition-colors group cursor-pointer">
                                <Users className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-xs text-emerald-400/70 font-medium">Travellers</p>
                                    <p className="text-sm text-emerald-100">2 Adults</p>
                                </div>
                            </div>
                            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl px-6 py-3 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]">
                                Search Trips
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto">
                        {[
                            { value: '500+', label: 'Destinations' },
                            { value: '50K+', label: 'Happy Travellers' },
                            { value: '4.9', label: 'Rating' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 + i * 0.15 }}
                                className="text-center"
                            >
                                <p className="text-2xl md:text-3xl font-bold text-emerald-300 font-[family-name:var(--font-playfair)]">{stat.value}</p>
                                <p className="text-sm text-emerald-400/60 mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.a
                    href="#destinations"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-emerald-400/50 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                    <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ChevronDown className="w-5 h-5" />
                    </motion.div>
                </motion.a>
            </div>
        </section>
    )
}

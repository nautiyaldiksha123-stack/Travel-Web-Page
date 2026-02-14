import { motion } from 'framer-motion'
import { Send, Sparkles } from 'lucide-react'

export default function Newsletter() {
    return (
        <section id="newsletter" className="relative py-24 lg:py-32 bg-emerald-950/50 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-br from-emerald-900/50 to-emerald-950/50 border border-emerald-700/30 rounded-3xl p-10 md:p-16 text-center backdrop-blur-sm overflow-hidden"
                >
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5 rounded-3xl"></div>

                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)`,
                        backgroundSize: '30px 30px',
                    }}></div>

                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, type: 'spring' }}
                            className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8"
                        >
                            <Sparkles className="w-7 h-7 text-emerald-400" />
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] text-emerald-50 mb-4">
                            Start Your 
                        </h2>
                        <p className="text-emerald-300/60 text-lg mb-10 max-w-xl mx-auto">
                            Subscribe to receive exclusive deals, travel inspiration, and early access to our curated itineraries.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-5 py-3.5 bg-emerald-900/40 border border-emerald-700/30 rounded-xl text-emerald-100 placeholder:text-emerald-500/40 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                            />
                            <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap">
                                Subscribe
                                <Send className="w-4 h-4" />
                            </button>
                        </div>

                        <p className="text-xs text-emerald-500/40 mt-4">
                            No spam, unsubscribe anytime. We respect your privacy.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

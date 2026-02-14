import { motion } from 'framer-motion'
import { Shield, Headphones, CreditCard, Globe, Plane, Heart } from 'lucide-react'

const features = [
    {
        icon: Globe,
        title: 'Worldwide Coverage',
        description: 'Access to over 500 destinations across 7 continents, from hidden gems to iconic wonders.',
    },
    {
        icon: Shield,
        title: 'Secure Booking',
        description: 'Your payments and personal data are protected with bank-level encryption and security.',
    },
    {
        icon: Headphones,
        title: '24/7 Support',
        description: 'Our dedicated travel experts are available around the clock to assist you wherever you are.',
    },
    {
        icon: CreditCard,
        title: 'Best Price Guarantee',
        description: 'Find a lower price elsewhere? We\'ll match it and give you an additional 10% off.',
    },
    {
        icon: Plane,
        title: 'Flexible Planning',
        description: 'Free cancellation up to 48 hours before your trip. Change plans with zero hassle.',
    },
    {
        icon: Heart,
        title: 'Curated Experiences',
        description: 'Handpicked activities and local experiences designed by travel experts who know every destination.',
    },
]

export default function Features() {
    return (
        <section id="features" className="relative py-24 lg:py-32 bg-emerald-950/50">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)`,
                backgroundSize: '40px 40px',
            }}></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] text-emerald-50 mb-6">
                        Travel with <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">Confidence</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-emerald-300/60 text-lg">
                        We make every journey seamless, safe, and unforgettable with world-class service at every step.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative p-8 bg-emerald-900/20 border border-emerald-800/30 rounded-2xl hover:border-emerald-600/40 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-1"
                            >
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                                <div className="relative">
                                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:border-emerald-400/40 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all duration-500">
                                        <Icon className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold text-emerald-50 mb-3 group-hover:text-emerald-200 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-emerald-300/50 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

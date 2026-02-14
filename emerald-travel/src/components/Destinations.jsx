import { motion } from 'framer-motion'
import { MapPin, Star, ArrowRight } from 'lucide-react'

const destinations = [
    {
        name: 'Bali, Indonesia',
        description: 'Tropical paradise with ancient temples and lush rice terraces.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
        price: '$1,299',
        rating: 4.9,
        days: '7 Days',
        tag: 'Popular'
    },
    {
        name: 'Santorini, Greece',
        description: 'Stunning sunsets over white-washed villages and azure waters.',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
        price: '$2,499',
        rating: 4.8,
        days: '5 Days',
        tag: 'Trending'
    },
    {
        name: 'Kyoto, Japan',
        description: 'Timeless beauty of bamboo groves and traditional tea houses.',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
        price: '$1,899',
        rating: 4.9,
        days: '8 Days',
        tag: 'Featured'
    },
    {
        name: 'Maldives',
        description: 'Crystal clear waters and luxurious overwater bungalows.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
        price: '$3,199',
        rating: 5.0,
        days: '6 Days',
        tag: 'Luxury'
    },
    {
        name: 'Swiss Alps',
        description: 'Majestic mountain peaks with world-class skiing and hiking.',
        image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
        price: '$2,799',
        rating: 4.7,
        days: '6 Days',
        tag: 'Adventure'
    },
    {
        name: 'Marrakech, Morocco',
        description: 'Vibrant markets, palaces, and the warmth of Saharan culture.',
        image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80',
        price: '$1,599',
        rating: 4.6,
        days: '5 Days',
        tag: 'Cultural'
    },
]

const tagColors = {
    Popular: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    Trending: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    Featured: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    Luxury: 'bg-gold-500/20 text-gold-400 border-gold-500/30',
    Adventure: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    Cultural: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
}

export default function Destinations() {
    return (
        <section id="destinations" className="relative py-24 lg:py-32">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

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
                        Top Destinations
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] text-emerald-50 mb-6">
                        Explore the <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">World</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-emerald-300/60 text-lg">
                        Hand-picked destinations offering unique experiences, breathtaking views, and memories that last a lifetime.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, i) => (
                        <motion.div
                            key={dest.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative bg-emerald-900/20 border border-emerald-800/30 rounded-2xl overflow-hidden hover:border-emerald-600/40 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/40 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${tagColors[dest.tag] || 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'}`}>
                                        {dest.tag}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 flex items-center gap-1 bg-emerald-950/60 backdrop-blur-sm rounded-full px-2.5 py-1">
                                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                    <span className="text-xs font-semibold text-emerald-100">{dest.rating}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-emerald-400/60 text-sm mb-2">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span>{dest.days}</span>
                                </div>
                                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-emerald-50 mb-2 group-hover:text-emerald-300 transition-colors">
                                    {dest.name}
                                </h3>
                                <p className="text-sm text-emerald-300/50 mb-4 line-clamp-2">{dest.description}</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-emerald-400/50">From</span>
                                        <p className="text-xl font-bold text-emerald-300">{dest.price}</p>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/btn">
                                        Explore
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95"
                    >
                        View All Destinations
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

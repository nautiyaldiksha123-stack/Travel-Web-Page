import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'Travel Enthusiast',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&q=80',
        content: 'Emerald Travel transformed our honeymoon into an absolute dream. Every detail was perfectly planned — from the secluded beaches to the rooftop dinners. We couldn\'t have asked for a better experience!',
        rating: 5,
        destination: 'Maldives',
    },
    {
        name: 'James Rodriguez',
        role: 'Adventure Seeker',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
        content: 'The Swiss Alps adventure package was mind-blowing. From skiing on pristine slopes to cozy mountain lodges — this was the trip of a lifetime. The team\'s local knowledge made all the difference.',
        rating: 5,
        destination: 'Swiss Alps',
    },
    {
        name: 'Priya Sharma',
        role: 'Culture Explorer',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
        content: 'Our family trip to Japan was flawlessly organized. The cultural experiences, the food tours, and the personal guide made it so special. We\'re already planning our next adventure with Emerald Travel.',
        rating: 5,
        destination: 'Kyoto, Japan',
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 lg:py-32">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"></div>

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
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] text-emerald-50 mb-6">
                        What Our Travellers <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">Say</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-emerald-300/60 text-lg">
                        Don't just take our word for it — hear from adventurers who've experienced the magic.
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="group relative bg-emerald-900/20 border border-emerald-800/30 rounded-2xl p-8 hover:border-emerald-600/40 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-900/30"
                        >
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-10 h-10 text-emerald-400" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-emerald-200/70 text-sm leading-relaxed mb-6">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/30"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-emerald-50">{testimonial.name}</p>
                                    <p className="text-xs text-emerald-400/60">{testimonial.role} • {testimonial.destination}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

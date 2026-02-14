import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Compass } from 'lucide-react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Destinations', href: '#destinations' },
        { name: 'Services', href: '#features' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#newsletter' },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-emerald-950/90 backdrop-blur-xl shadow-2xl shadow-emerald-900/30 border-b border-emerald-800/30'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-300">
                                <Compass className="w-5 h-5 text-white" />
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
                        </div>
                        <div>
                            <span className="text-xl font-bold font-[family-name:var(--font-playfair)] text-emerald-50 tracking-wide">
                                Emerald
                            </span>
                            <span className="text-xl font-light text-emerald-400 ml-1">Travel</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-emerald-200/80 hover:text-emerald-50 transition-colors duration-300 group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-300 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                            </a>
                        ))}
                        <a
                            href="#newsletter"
                            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95"
                        >
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-emerald-200 hover:text-emerald-50 transition-colors p-2"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-emerald-950/95 backdrop-blur-xl border-t border-emerald-800/30"
                    >
                        <div className="px-6 py-6 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-emerald-200/80 hover:text-emerald-50 hover:bg-emerald-800/30 rounded-xl transition-all duration-300 font-medium"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <a
                                href="#newsletter"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block mt-4 text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300"
                            >
                                Book Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

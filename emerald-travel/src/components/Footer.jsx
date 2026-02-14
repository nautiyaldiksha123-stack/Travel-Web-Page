import { Compass, MapPin, Phone, Mail, Instagram, Twitter, Facebook, Youtube, ArrowUp } from 'lucide-react'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-emerald-950 border-t border-emerald-800/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="flex items-center gap-3 mb-6 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                                <Compass className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <span className="text-xl font-bold font-[family-name:var(--font-playfair)] text-emerald-50">Emerald</span>
                                <span className="text-xl font-light text-emerald-400 ml-1">Travel</span>
                            </div>
                        </a>
                        <p className="text-sm text-emerald-300/50 leading-relaxed mb-6">
                            Crafting unforgettable travel experiences since 2015. Your journey to extraordinary destinations begins here.
                        </p>
                        <div className="flex gap-3">
                            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-emerald-900/40 border border-emerald-800/30 rounded-xl flex items-center justify-center text-emerald-400/60 hover:text-emerald-300 hover:border-emerald-600/40 hover:bg-emerald-900/60 transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-emerald-200 uppercase tracking-wider mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Destinations', 'Travel Packages', 'Blog', 'FAQs', 'Careers'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-sm text-emerald-300/50 hover:text-emerald-300 transition-colors duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h4 className="text-sm font-semibold text-emerald-200 uppercase tracking-wider mb-6">Top Destinations</h4>
                        <ul className="space-y-3">
                            {['Bali, Indonesia', 'Santorini, Greece', 'Kyoto, Japan', 'Maldives', 'Swiss Alps', 'Marrakech, Morocco'].map((dest) => (
                                <li key={dest}>
                                    <a href="#" className="text-sm text-emerald-300/50 hover:text-emerald-300 transition-colors duration-300 flex items-center gap-2">
                                        <MapPin className="w-3 h-3" />
                                        {dest}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-emerald-200 uppercase tracking-wider mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-emerald-300/50">123 Travel Avenue, Suite 400, New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                <a href="tel:+1234567890" className="text-sm text-emerald-300/50 hover:text-emerald-300 transition-colors">+1 (234) 567-890</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                <a href="mailto:hello@emeraldtravel.com" className="text-sm text-emerald-300/50 hover:text-emerald-300 transition-colors">hello@emeraldtravel.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-emerald-800/30 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-emerald-500/40">
                        © 2026 Emerald Travel. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                            <a key={link} href="#" className="text-xs text-emerald-500/40 hover:text-emerald-400 transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll to Top */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:from-emerald-400 hover:to-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300 z-50"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </footer>
    )
}

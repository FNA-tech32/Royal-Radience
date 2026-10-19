import { Phone, MapPin, Mail } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";


function Footer() {
    return (
        <footer className="bg-[#3d2b2b] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div>
                        <h2 className="text-3xl font-bold text-[#e8b4b8]">Royal Radience</h2>
                        <p className="mt-4 text-gray-300">Luxury beauty studio providing makeup, hair styling and skincare services.</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="mt-4 space-y-3 text-gray-300">
                            <li>
                                <a href="#home" className="hover:text-[#e8b4b8] transition">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#about" className="hover:text-[#e8b4b8] transition">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#services" className="hover:text-[#e8b4b8] transition">
                                    Services
                                </a>
                            </li>

                            <li>
                                <a href="#gallery" className="hover:text-[#e8b4b8] transition">
                                    Gallery
                                </a>
                            </li>

                            <li>
                                <a href="#contact" className="hover:text-[#e8b4b8] transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Services</h3>
                        <ul className="mt-4 space-y-3 text-gray-300">
                            <li>Bridal Makeup</li>
                            <li>Hair Styling</li>
                            <li>Skin Care</li>
                            <li>Nail Art</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Contact</h3>
                        <div className="mt-4 space-y-3 text-gray-300">
                            <p className="flex gap-2 items-center"><Phone size={18} /> +91 70458 21936</p>
                            <p className="flex gap-2 items-center"><Mail size={18} /> hello@royalradience.in</p>
                            <p className="flex gap-2 items-start"><MapPin size={18} className="shrink-0 mt-0.5" /> 48, Linking Road, Bandra West, Mumbai</p>
                            <div className="flex gap-4 mt-4">
                                <FaInstagram size={22} />
                                <FaFacebook size={22} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-600 mt-10 pt-5 text-center text-gray-300">
                    © 2026 Royal Radience. All Rights Reserved.
                </div>

            </div>
        </footer>
    )
}

export default Footer;
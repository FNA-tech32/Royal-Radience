import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-[#fff8f5] shadow-sm fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl md:text-2xl font-bold text-[#b76e79]">
                    Royal Radience
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

                    <li>
                        <a href="#home" className="hover:text-[#b76e79] transition duration-300">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="hover:text-[#b76e79] transition duration-300">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#services" className="hover:text-[#b76e79] transition duration-300">
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="#gallery" className="hover:text-[#b76e79] transition duration-300">
                            Gallery
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-[#b76e79] transition duration-300">
                            Contact
                        </a>
                    </li>

                </ul>

                {/* Desktop Button */}
                <a
                    href="#contact"
                    className="hidden md:block bg-[#b76e79] text-white px-5 py-2 rounded-full hover:bg-[#a85f6a] transition"
                >
                    Book Now
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-[#b76e79] z-50"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40 px-6 py-5">

                    <ul className="space-y-4 text-gray-700 font-medium">

                        <li>
                            <a href="#home" onClick={() => setOpen(false)}>
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#about" onClick={() => setOpen(false)}>
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#services" onClick={() => setOpen(false)}>
                                Services
                            </a>
                        </li>

                        <li>
                            <a href="#gallery" onClick={() => setOpen(false)}>
                                Gallery
                            </a>
                        </li>

                        <li>
                            <a href="#contact" onClick={() => setOpen(false)}>
                                Contact
                            </a>
                        </li>

                    </ul>

                </div>
            )}
        </nav>
    );
}

export default Navbar;
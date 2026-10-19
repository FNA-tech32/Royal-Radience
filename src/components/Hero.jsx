import { motion } from "framer-motion";
import hero from "../assets/images/hero/hero4.png"

function Hero() {

    return (

        <section
            id="home"
            className="min-h-[90vh] pt-24 flex items-center bg-[#fff8f5] overflow-hidden"

        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">


                    {/* Text Section */}

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#3d2b2b]">

                            Enhance Your

                            <span className="text-[#b76e79] block">
                                Natural Beauty with Royal Radience
                            </span>
                        </h1>


                        <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">

                            Luxury beauty treatments, bridal makeup,
                            hair styling and skincare services with
                            professional care.

                        </p>


                        <div className="mt-7 flex flex-col sm:flex-row gap-4">


                            <a
                                href="#contact"
                                className="inline-block bg-[#b76e79] text-white px-6 py-3 rounded-full hover:bg-[#a85f6a] transition"
                            >
                                Book Appointment
                            </a>

                            <a
                                href="#services"
                                className="inline-block border border-[#b76e79] text-[#b76e79] px-6 py-3 rounded-full hover:bg-[#b76e79] hover:text-white transition"
                            >
                                Explore Services
                            </a>


                        </div>


                    </motion.div>



                    {/* Image Section */}

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-end mt-8 md:mt-12"
                    >
                        <img
                            src={hero}
                            alt="Professional bridal makeup artist at Royal Radience"
                            loading="eager"
                            draggable="false"
                            className="w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[460px] h-auto object-contain"
                        />
                    </motion.div>


                </div>

            </div>


        </section>

    )

}

export default Hero;
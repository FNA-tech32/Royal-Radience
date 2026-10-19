import { motion } from "framer-motion";
import aboutImage from "../assets/images/about/about-beauty.jpg";

function About() {

    return (

        <section id="about" className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


                <motion.img
                    src={aboutImage}
                    alt="Professional beauty expert providing salon services at Royal Radience"
                    loading="lazy"
                    className="rounded-3xl shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                />



                <motion.div

                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}

                >

                    <h2 className="text-4xl font-bold text-[#3d2b2b]">

                        About <span className="text-[#b76e79]">
                            Royal Radience
                        </span>

                    </h2>


                    <p className="mt-5 text-gray-600 leading-7">

                        Royal Radience is a luxury beauty
                        destination where elegance meets expert care.
                        Our professional artists provide premium
                        makeup, hair styling and skincare treatments
                        to enhance your natural beauty.

                    </p>


                    <div className="mt-6 grid grid-cols-3 gap-5 text-center">

                        <div>
                            <h3 className="text-3xl font-bold text-[#b76e79]">
                                5+
                            </h3>
                            <p>Years</p>
                        </div>


                        <div>
                            <h3 className="text-3xl font-bold text-[#b76e79]">
                                1000+
                            </h3>
                            <p>Clients</p>
                        </div>


                        <div>
                            <h3 className="text-3xl font-bold text-[#b76e79]">
                                20+
                            </h3>
                            <p>Awards</p>
                        </div>

                    </div>

                </motion.div>


            </div>

        </section>

    )

}

export default About;
import { motion } from "framer-motion";

import bridal from "../assets/images/gallery/bridal.jpg";
import hairstyle from "../assets/images/gallery/hairstyle.jpg";
import nailart from "../assets/images/gallery/nailart.jpg";
import salon from "../assets/images/gallery/salon.jpg";


function Gallery() {

    const images = [
        {
            src: bridal,
            alt: "Indian bridal makeup look at Royal Radience"
        },
        {
            src: hairstyle,
            alt: "Professional hair styling service at beauty salon"
        },
        {
            src: nailart,
            alt: "Beautiful nail art and manicure service"
        },
        {
            src: salon,
            alt: "Luxury beauty salon interior and services"
        }
    ];


    return (

        <section id="gallery" className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <h2 className="text-4xl text-center font-bold text-[#3d2b2b]">

                    Our
                    <span className="text-[#b76e79]">
                        Gallery
                    </span>

                </h2>


                <p className="text-center text-gray-600 mt-4">
                    Explore our beauty transformations and luxury services.
                </p>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">


                    {
                        images.map((img, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden rounded-2xl shadow-md"
                            >

                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="w-full h-72 object-cover"
                                />

                            </motion.div>

                        ))
                    }


                </div>


            </div>


        </section>

    )

}

export default Gallery;
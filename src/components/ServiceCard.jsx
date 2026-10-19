import { motion } from "framer-motion";


function ServiceCard({ title, image, alt, desc }) {


    return (

        <motion.div

            whileHover={{ scale: 1.05 }}

            className="bg-white rounded-2xl overflow-hidden shadow-md"

        >


            <img
                src={image}
                alt={alt}
                loading="lazy"
                className="h-52 w-full object-cover"
            />


            <div className="p-5">

                <h3 className="text-xl font-bold text-[#3d2b2b]">
                    {title}
                </h3>


                <p className="text-gray-600 mt-3">
                    {desc}
                </p>


                <button className="mt-4 text-[#b76e79] font-semibold">
                    Learn More →
                </button>


            </div>


        </motion.div>

    )

}

export default ServiceCard;
import { motion } from "framer-motion";
import { Star } from "lucide-react";

function Reviews() {

    const reviews = [
        {
            name: "Priya Sharma",
            review: "Amazing bridal makeup experience. The team was very professional and made my special day memorable.",
        },

        {
            name: "Neha Singh",
            review: "Loved the hair styling and skincare service. Highly recommended beauty studio.",
        },

        {
            name: "Anjali Verma",
            review: "Beautiful salon ambience and excellent service. Staff is very friendly.",
        }

    ];


    return (

        <section className="py-16 sm:py-20 bg-[#fff8f5] overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <h2 className="text-3xl sm:text-4xl text-center font-bold text-[#3d2b2b]">

                    Customer
                    <span className="text-[#b76e79]">
                        Reviews
                    </span>

                </h2>


                <p className="text-center text-gray-600 mt-3">
                    What our clients say about us
                </p>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">


                    {
                        reviews.map((item, index) => (

                            <motion.div

                                key={index}

                                whileHover={{ scale: 1.03 }}

                                className="bg-white p-5 sm:p-6 rounded-2xl shadow-md w-full"

                            >


                                <div className="flex gap-1 text-yellow-400">

                                    {
                                        [1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} fill="currentColor" size={18} />
                                        ))
                                    }

                                </div>


                                <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">

                                    "{item.review}"

                                </p>


                                <h3 className="mt-5 font-bold text-[#3d2b2b]">
                                    {item.name}
                                </h3>


                                <p className="text-sm text-gray-500">
                                    Happy Client
                                </p>


                            </motion.div>

                        ))

                    }


                </div>


            </div>

        </section>

    )

}

export default Reviews;
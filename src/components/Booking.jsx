import { CalendarDays, Phone } from "lucide-react";

function Booking() {

    return (

        <section id="contact" className="py-16 sm:py-20 bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">


                    {/* Left Content */}

                    <div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-[#3d2b2b]">

                            Book Your
                            <span className="text-[#b76e79]">
                                Appointment
                            </span>

                        </h2>


                        <p className="mt-4 text-gray-600 leading-relaxed">

                            Schedule your beauty session with our professional
                            artists and enjoy premium salon services.

                        </p>


                        <div className="mt-8 space-y-5">


                            <div className="flex items-center gap-4">

                                <div className="bg-[#fff0f2] p-3 rounded-full text-[#b76e79]">
                                    <CalendarDays />
                                </div>

                                <p>
                                    Easy Online Booking
                                </p>

                            </div>



                            <div className="flex items-center gap-4">

                                <div className="bg-[#fff0f2] p-3 rounded-full text-[#b76e79]">
                                    <Phone />
                                </div>

                                <p>
                                    +91 70458 21936
                                </p>

                            </div>


                        </div>


                    </div>




                    {/* Form */}

                    <div className="bg-[#fff8f5] p-6 sm:p-8 rounded-3xl shadow-md">


                        <form className="space-y-5">


                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-xl border outline-none focus:border-[#b76e79]"
                            />


                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 rounded-xl border outline-none focus:border-[#b76e79]"
                            />



                            <select
                                className="w-full px-4 py-3 rounded-xl border outline-none"
                            >

                                <option>
                                    Select Service
                                </option>

                                <option>
                                    Bridal Makeup
                                </option>

                                <option>
                                    Hair Styling
                                </option>

                                <option>
                                    Skin Care
                                </option>

                                <option>
                                    Nail Art
                                </option>

                            </select>

                            <input
                                type="date"
                                className="w-full px-4 py-3 rounded-xl border outline-none"
                            />

                            <textarea

                                rows="4"
                                placeholder="Your Message"

                                className="w-full px-4 py-3 rounded-xl border outline-none resize-none"

                            ></textarea>

                            <button

                                className="w-full bg-[#b76e79] text-white py-3 rounded-xl hover:bg-[#a85f6a] transition"
                            >
                              Book Appointment
                         
                          </button>


                        </form>

                   </div>


                </div>


            </div>


        </section>

    )

}

export default Booking;
import ServiceCard from "./ServiceCard";
import makeup from "../assets/images/services/makeup.jpg";
import hair from "../assets/images/services/hair.jpg";
import skincare from "../assets/images/services/skincare.jpg";
import nails from "../assets/images/services/nails.jpg";


const services = [
    {
        title: "Bridal Makeup",
        image: makeup,
        alt: "Professional bridal makeup service at Royal Radience",
        desc: "Luxury bridal makeup with professional artists."
    },
    {
        title: "Hair Styling",
        image: hair,
        alt: "Professional hair styling and salon treatment",
        desc: "Hair cut, spa, coloring and styling."
    },
    {
        title: "Skin Care",
        image: skincare,
        alt: "Professional skincare and facial treatment",
        desc: "Facial and glow treatments for healthy skin."
    },
    {
        title: "Nail Care",
        image: nails,
        alt: "Beautiful manicure pedicure and nail art service",
        desc: "Beautiful manicure, pedicure and nail art."
    }
];
function Services() {

    return (

        <section id="services" className="py-20 bg-[#fff8f5]">

            <div className="max-w-7xl mx-auto px-6">


                <h2 className="text-4xl text-center font-bold text-[#3d2b2b]">

                    Our
                    <span className="text-[#b76e79]">
                        Services
                    </span>

                </h2>


                <div className="grid md:grid-cols-4 gap-8 mt-12">

                    {
                        services.map((item, index) => (

                            <ServiceCard key={index} {...item} />

                        ))
                    }

                </div>


            </div>

        </section>

    )

}

export default Services;
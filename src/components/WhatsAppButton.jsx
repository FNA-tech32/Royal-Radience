import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

    return (
        <a
            href="https://wa.me/917045821936"
            target="_blank"
            className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition"
        >
            <FaWhatsapp size={28} />
        </a>
    )

}

export default WhatsAppButton;
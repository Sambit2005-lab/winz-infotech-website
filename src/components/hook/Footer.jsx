import { ImFacebook2 } from "react-icons/im";
import { FaInstagram, FaLinkedin, FaBehanceSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <div>
            <footer className="text-center py-5 bg-gradient-to-t from-orange-300 to-white ">
                <div className="mt-10 sm:text-lg text-base font-semibold text-black">Stay in touch</div>
                <div className="flex justify-center gap-6 mt-4 text-xl">
                    <a href="https://www.facebook.com/winzinfotechofficial/ " target="_blank" rel="noopener noreferrer">
                        <ImFacebook2 className="md:size-8 size-6" />
                    </a>
                    <a href="https://www.instagram.com/winzinfotechofficial/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="md:size-8 size-6" />
                    </a>
                    <a href="https://www.behance.net/winzinfotechofficial" target="_blank" rel="noopener noreferrer">
                        <FaBehanceSquare className="md:size-8 size-6" />
                    </a>
                    <a href="https://www.linkedin.com/company/winzinfotech/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="md:size-8 size-6" />
                    </a>
                    <a href="https://www.youtube.com/@WinzInfotech" target="_blank" rel="noopener noreferrer">
                        <IoLogoYoutube className="md:size-8 size-6" />
                    </a>
                </div>
                <p className="sm:text-base pb-5 text-sm font-bold text-black mt-4">
                    Copyright 2025 - All right Reserved by <a href="https://winz-infotech-website.vercel.app" className="hover:underline cursor-pointer hover:text-orange-500">Winz Infotech</a>
                </p>
            </footer>
        </div>
    )
}

export default Footer
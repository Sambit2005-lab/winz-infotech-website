import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaBehance, FaYoutube, FaPhoneAlt, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import imglogo from "../img/logo.png";
const ContactUsFooter = () => {

    const navigate = useNavigate();

    return (
        <footer>
            <div className="flex flex-col gap-10 px-4 lg:px-10 xl:px-28 lg:py-12 pb-8 text-gray-800 bg-white">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between xl:gap-20 gap-12">
                    {/* Logo + Description */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <img
                            src={imglogo}
                            alt="Logo"
                            className="h-46 w-auto mx-auto lg:mx-0"
                        />
                        <p className="text-sm text-gray-600">
                            A creative agency that blends design with performance. From
                            branding to influencer campaigns — we execute ideas that move.
                        </p>
                    </div>

                    <div className="flex lg:w-auto w-full justify-evenly flex-row gap-6 lg:gap-24 text-sm text-gray-700 text-center lg:text-left lg:mt-8">
                        {/* Center: Quick Links */}
                        <div className="flex-1 md:min-w-[200px] text-center lg:text-left lg:mt-12">
                            <h3 className="font-bold text-[#FC8A10] mb-4">
                                QUICK LINKS
                            </h3>
                            <ul className="grid sm:grid-cols-1 lg:grid-cols-2 gap-y-2 text-sm md:text-base text-gray-700">
                                <li>
                                    <button onClick={() => navigate("/")} className="hover:text-[#FC8A10] cursor-pointer">
                                        Home
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => navigate("/blogs")} className="hover:text-[#FC8A10] cursor-pointer">
                                        Blogs
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => navigate("/services")} className="hover:text-[#FC8A10] cursor-pointer">
                                        Services
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => navigate("/about")} className="hover:text-[#FC8A10] cursor-pointer">
                                        About Us
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => navigate("/portfolio")} className="hover:text-[#FC8A10] cursor-pointer">
                                        Portfolio
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => navigate("/career")} className="hover:text-[#FC8A10] cursor-pointer">
                                        Career
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => navigate("/case-study")} className="hover:text-[#FC8A10] cursor-pointer">
                                        Case Study
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => navigate("/contact")} className="hover:text-[#FC8A10] cursor-pointer">
                                        Contact us
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Right: Landing Pages */}
                        <div className="flex-1 min-w-[150px] text-center lg:text-left lg:mt-12">
                            <h3 className="font-bold text-[#FC8A10] mb-4">
                                LANDING PAGES
                            </h3>
                            <ul className="space-y-1 text-sm md:text-base text-gray-700">
                                <li><a href="https://hook.winzinfotech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FC8A10] cursor-pointer">Doctors & Medical Professionals</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row lg:items-center lg:justify-between md:gap-8 gap-6 ">
                    {/* Social Icons - LEFT */}
                    <div className="flex items-center justify-center md:gap-4 sm:gap-3 gap-4">
                        {[
                            {
                                icon: FaInstagram,
                                link: "https://www.instagram.com/winzinfotechofficial/",
                            },
                            {
                                icon: FaFacebookF,
                                link: "https://www.facebook.com/winzinfotechofficial/",
                            },
                            {
                                icon: FaLinkedinIn,
                                link: "https://www.linkedin.com/company/winzinfotechofficial/",
                            },
                            {
                                icon: FaBehance,
                                link: "https://www.behance.net/winzinfotechofficial",
                            },
                            {
                                icon: FaYoutube,
                                link: "https://www.youtube.com/@WinzInfotech",
                            },
                        ].map(({ icon: Icon, link }, idx) => (
                            <a
                                key={idx}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="md:p-2 sm:p-1 p-2 bg-white border border-gray-300 rounded-full text-gray-800 
                                hover:text-[#FC8A10] hover:border-[#FC8A10] 
                                transform transition-all duration-200 ease-in-out hover:scale-90"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>

                    {/* Contact Info - RIGHT */}
                    <div className="flex flex-col lg:text-base text-xs sm:flex-row items-center gap-4 md:gap-8 text-center sm:text-left">
                        <a
                            href="mailto:Info@winzinfotech.com"
                            className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform"
                        >
                            <MdEmail className="text-[#FC8A10]" size={20}/>
                            <span className="hover:text-[#FC8A10]">Info@winzinfotech.com</span>
                        </a>
                        <a
                            href="tel:+917203030730"
                            className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform"
                        >
                            <FaPhoneAlt className="text-[#FC8A10]" size={20}/>
                            <span className="hover:text-[#FC8A10]">+917203030730</span>
                        </a>
                        <a
                            href="https://wa.me/917203030730"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 underline hover:no-underline cursor-pointer transition-transform"
                        >
                            <FaPhoneAlt className="text-[#FC8A10]" size={20}/>
                            <span className="hover:text-[#FC8A10]">+919998081838</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="w-full justify-end flex sm:p-4 lg:px-8 p-2 gap-2 sm:flex-row flex-col bg-black text-center text-sm text-gray-400">
                <p className="sm:absolute lg:left-[40%] left-5 ">© Winz Infotech {new Date().getFullYear()} - All Rights Reserved</p>
                <p className="flex gap-x-5 sm:justify-end justify-center">
                    <p onClick={() => navigate("/privacy-policy")} className="hover:text-[#F68D13] hover:underline">Privacy Policy</p> |{" "}
                    <p onClick={() => navigate("/term-&-conditions")} className="hover:text-[#F68D13] hover:underline">Terms & Service</p>
                </p>
            </div>
        </footer>
    );
};

export default ContactUsFooter;

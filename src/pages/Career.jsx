import { motion } from "framer-motion";
import TextHover from "../components/Animations/TextHover";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import SEO from "../components/SEO";
import axios from "axios";

const whyJoinSteps = [
    {
        title: "Impact From Day One",
        description: "Your ideas matter: Your work drives growth.",
    },
    {
        title: "No Boring Days",
        description: "Work on diverse brands, bold campaigns, and real-world challenges.",
    },
    {
        title: "Learn Fast. Grow Faster.",
        description: "Access mentorship, upskilling, and projects that level you up.",
    },
    {
        title: "Culture That Cares",
        description: "We value ownership, honesty, and good vibes not office politics.",
    },
    {
        title: "Remote-First, People-First",
        description: "Flexibility that works for real life.",
    },
];

const CareerPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        position: '',
        attachment: null,
        message: ''
    });

    const [loading, setLoading] = useState(false); // loader for upload

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const careerStructuredData = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "Join Winz Infotech Team",
        "description": "Join our dynamic team at Winz Infotech. We're looking for talented individuals in graphic design, content creation, digital marketing, and web development.",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "Winz Infotech",
            "sameAs": "https://winzinfotech.com"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
            }
        },
        "employmentType": "FULL_TIME",
        "workFromHome": true
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            attachment: file
        }));
    };

    const uploadToCloudinary = async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "career_form");

        const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dooejuv06/upload",
            data
        );

        return res.data.secure_url; // return file URL
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            let fileUrl = "";
            if (formData.attachment) {
                fileUrl = await uploadToCloudinary(formData.attachment);
            }
            
            const templateParams = {
                title: "New Career Application",
                name: formData.name,
                email: formData.email,
                contact: formData.contact,
                position: formData.position,
                message: formData.message,
                attachment_url: fileUrl || "No attachment uploaded",
            };

            await emailjs.send(
                "service_1z57zfs",
                "template_m000dyr",
                templateParams,
                "G1JKaL-CvrPbe8b51"
            );

            alert("Application submitted successfully!");
            setFormData({
                name: "",
                contact: "",
                email: "",
                position: "",
                message: "",
                attachment: null,
            });
        } catch (err) {
            console.error(err);
            alert("Failed to submit application.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-black overflow-x-hidden md:overflow-x-visible lg:overflow-x-visible w-full mt-20 lg:py-10 py-5">
            <SEO
                title="Careers - Join Our Dynamic Team | Winz Infotech"
                description="Join Winz Infotech's growing team! We're hiring talented professionals in graphic design, digital marketing, web development, and content creation. Remote-first, people-first culture."
                keywords="winz infotech careers, digital marketing jobs, graphic designer jobs, web developer jobs, content creator jobs, remote work opportunities"
                url="/career"
                image="/logoNew.png"
                structuredData={careerStructuredData}
            />
            {/* Top Intro Section */}
            <div className="flex flex-col gap-6 px-6 md:px-12 md:py-12 py-5">
                {/* Heading */}
                <div>
                    <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-medium">
                        Careers at <span className="text-[#F68D13] font-medium">Winz</span> Infotech
                    </h1>
                    <p className="mt-4 md:text-[17px] text-sm text-gray-700 font-normal md:leading-9 leading-6">
                        Don’t just do a job. {" "}
                        <span className="text-[#F68D13] font-medium">
                            Build something that matters.
                        </span>
                    </p>
                </div>

                {/* Why Join Section */}
                <div className="flex flex-col md:flex-row items-stretch lg:gap-24 md:py-12 py-5 gap-10">
                    {/* Left Side */}
                    <div className="bg-gray-100 flex items-center justify-center min-h-[200px] p-4 md:w-1/2">
                        <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-[32px] font-medium leading-snug text-center md:text-left">
                            Why Join <span className="text-[#F68D13] font-medium">Winz</span>
                            <br /> Infotech?
                        </h1>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-8 md:w-1/2">
                        {whyJoinSteps.map((step, index) => (
                            <motion.div
                                className="flex items-start gap-4"
                            >
                                {/* Circle */}
                                <motion.div
                                    className="w-4 h-4 rounded-full bg-[#F68D13] shrink-0 mt-1"
                                />

                                {/* Text */}
                                <div>
                                    <h3 className="font-medium lg:text-lg text-sm">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 lg:text-base text-xs font-normal md:leading-tight leading-tight">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content: Left & Right */}
            <div className="flex flex-col md:flex-row items-start px-6 py-12 gap-6 bg-gray-100 min-h-screen">
                {/* Left Section */}
                <div className="flex-1 flex items-start justify-center md:px-8 py-4 sticky top-20 self-start">
                    <div className="max-w-lg">
                        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl lg:leading-18 leading-12 text-4xl font-medium lg:mb-10 mb-6 lg:text-left scroll-mt-24">
                            Let’s Build <br className="md:block hidden" /> <span className="text-[#F68D13] ">Together</span>
                        </h2>
                        <p className="text-gray-600 lg:text-[17px] lg:ml-2 ml-1 text-sm font-normal lg:leading-9 md:leading-7 leading-6 text-left">
                            If you’re done with average and ready to build something meaningful,
                            we want to hear from you. <span className="font-medium text-black">Bring your ambition. We'll bring the
                                opportunities.</span>
                        </p>
                    </div>
                </div>

                {/* Right Section - Career Form */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="shadow-md lg:p-8 md:p-4 p-6 w-full md:max-w-xl bg-white flex flex-col justify-between">
                        <form onSubmit={handleSubmit} className="lg:space-y-7 md:space-y-4 sm:space-y-6 space-y-4 p-6 bg-gray-100 ">
                            {/* name */}
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-300 bg-white px-2 focus:outline-none focus:border-[#F68D13] py-2 text-sm "
                            />

                            {/* contact */}
                            <input
                                type="number"
                                name="contact"
                                placeholder="Contact No"
                                value={formData.contact}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-300 bg-white px-2 focus:outline-none
                                 focus:border-[#F68D13] py-2 text-sm [&::-webkit-outer-spin-button]:appearance-none
                                  [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                            />

                            {/* email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border-b border-gray-300 bg-white px-2 focus:outline-none focus:border-[#F68D13] py-2 text-sm "
                            />

                            {/* position */}
                            <select
                                name="position"
                                value={formData.position}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 bg-white px-2 focus:outline-none focus:border-[#F68D13] py-2 text-sm appearance-none cursor-pointer"
                            >
                                <option value="" disabled className="text-gray-500">Select Position</option>
                                <option value="Graphic Designers">Graphic Designers</option>
                                <option value="Social Media Managers">Social Media Managers</option>
                                <option value="Performance Marketers">Performance Marketers</option>
                                <option value="Copywriters & Content Strategists">Copywriters & Content Strategists</option>
                                <option value="Content Creator">Content Creator</option>
                                <option value="Web Developers">Web Developers</option>
                                <option value="Sales">Sales</option>
                                <option value="Others">Others</option>
                            </select>

                            {/* attachment */}
                            <div className="relative">
                                <input
                                    type="file"
                                    id="attachment"
                                    name="attachment"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 bg-white px-2 w-full h-full opacity-0 cursor-pointer"
                                />
                                <div className="w-full border-b border-gray-300 focus-within:border-[#F68D13] py-2 text-sm flex justify-between items-center">
                                    <span className={formData.attachment ? "text-black" : "text-gray-500"}>
                                        {formData.attachment ? formData.attachment.name : "Attachment"}
                                    </span>
                                    <svg
                                        className="w-5 h-5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                </div>
                            </div>

                            {/* message */}
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="5"
                                className="w-full bg-white placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:border-[#F68D13] py-2 px-3 text-sm resize-none"
                            />

                            {/* submit button */}
                            <div className="flex justify-center">
                                <button type="submit" className="bg-[#F68D13] cursor-pointer text-white transition">
                                    <TextHover text="APPLY NOW" />
                                </button>
                            </div>
                        </form>

                        {/* footer */}
                        <p className="lg:text-[17px] text-sm text-black mt-6 font-medium text-left lg:leading-9 leading-6">
                            Shoot your profile to{" "}
                            <a
                                href="mailto:work@winzinfotech.com"
                                className="text-[#F68D13] font-medium"
                            >
                                work@winzinfotech.com
                            </a>
                            . We’d still love to connect.
                        </p>
                    </div>
                </div>

                {loading && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-40 z-50">
                        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CareerPage;

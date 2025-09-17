import React, { useState, useEffect, useRef } from "react";
import flag from "../../assets/icons/flag.png"; 

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        business: "",
        city: "",
        budget: "",
    });

    const [hasScrolledUp, setHasScrolledUp] = useState(false);

    const contactFormRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (contactFormRef.current) {
            contactFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 500); // ⏱ Wait to ensure DOM height is ready on mobile

        return () => clearTimeout(timeout);
    }, []);

    // Click outside to scroll to top
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !hasScrolledUp &&
                contactFormRef.current &&
                !contactFormRef.current.contains(event.target) && 
                window.innerWidth > 768 // ✅ only for desktop
            ) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setHasScrolledUp(true); // prevent future scrolls
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [hasScrolledUp]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Send data to backend or use in any way
    };

    return (
        <div ref={contactFormRef} className="px-4 mt-16 md:pt-20 pt-5 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-[40px] mb-10 font-extrabold underline text-center">
                Contact Us Form
            </h2>

            {/* form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 md:p-10 border-[2px] border-gray-300 shadow"
            >
                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-1">Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-[2px] border-gray-300 md:p-4 p-2"
                        type="text"
                        required
                    />
                </div>

                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-1">Email</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-[2px] border-gray-300 md:p-4 p-2"
                        type="email"
                        required
                    />
                </div>

                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-1">
                        Contact number
                    </label>
                    <div className="flex items-center gap-2 border-[2px] border-gray-300 rounded-md overflow-hidden">
                        <div className="flex items-center pl-2 pr-1 gap-1">
                        <img 
                            src={flag} 
                            alt="flag" 
                            className="h-5 w-7 object-cover"
                        />
                        <span className="text-sm md:text-base md:mx-2 mx-1 font-semibold"> +</span>
                        </div>
                        <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 md:p-4 outline-none"
                        type="tel"
                        required
                        />
                    </div>
                </div>

                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-1">
                        Business name
                    </label>
                    <input
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full border-[2px] border-gray-300 md:p-4 p-2"
                        type="text"
                        required
                    />
                </div>

                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-1">
                        In Which City do you Live in?
                    </label>
                    <input
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border-[2px] border-gray-300 md:p-4 p-2"
                        type="text"
                        required
                    />
                </div>

                <div className="md:mb-10 mb-4">
                    <label className="block md:text-xl font-semibold mb-2">
                        What’s your monthly marketing budget or planned?
                    </label>
                    <div className="space-y-2 font-bold">
                        {[
                            "Less than INR 50000",
                            "INR 50000 to INR 1 Lac",
                            "INR 1 Lacs to INR 3 Lacs",
                            "INR 3 Lacs to INR 5 Lacs",
                            "INR 5 Lacs to INR 10 Lacs",
                        ].map((option, i) => (
                            <label key={i} className="flex items-center md:text-lg text-sm gap-2">
                                <input
                                    type="radio"
                                    name="budget"
                                    value={option}
                                    className="md:scale-150 accent-black"
                                    checked={formData.budget === option}
                                    onChange={handleChange}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                {/* button */}
                <button className="bg-[#FC8A10] cursor-pointer sm:mt-10 mt-4 hover:bg-orange-500 md:text-2xl text-base text-white font-semibold sm:py-4 py-2 sm:px-6 px-4 mb-4">
                    Book Free Consultation Call
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

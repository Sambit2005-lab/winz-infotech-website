import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
    {
        question: "Will this work for my specific clinic or specialty?",
        answer: "Yes, whether you're a dentist, dermatologist, gynecologist, general physician, or specialist clinic, we customize everything to fit your practice type, city, and ideal patient profile.",
    },
    {
        question: "I don’t want to run ‘salesy’ or unethical ads.",
        answer: "Neither do we. We follow a 100% ethical, patient-first approach no false claims, no fear-based marketing. Your reputation and ethics stay intact.",
    },
    {
        question:
            "I’m already listed on Practo or JustDial – isn’t that enough?",
        answer: "Those platforms list hundreds of doctors. Our system pulls patients directly to you through performance marketing, content, and automated follow-ups not generic directories.",
    },
    {
        question: "How much time will this take from me?",
        answer: "Less than 1 hour a week. Everything is done-for-you setup, content, automation, ads, and tracking. You stay focused on patients, we handle the rest.",
    },
    {
        question: "I have staff. Why do I need automation?",
        answer: "Even the best staff can forget callbacks, misplace leads, or delay responses. Our system ensures every inquiry gets a response instantly even on Sundays or at 10 PM.",
    },
    {
        question: "What if I don’t get results?",
        answer: "We offer transparent performance reports and clear ROI tracking. If you don't see results in 90 days, we pause everything and work with you to fix it no questions asked.",
    },
    {
        question: "I don’t understand tech. Will I be able to use this?",
        answer: "Absolutely. You don't need to log in or manage anything. You'll get a simple mobile report and alerts. We manage the system end-to-end you just get leads and bookings",
    },
];

const GrowthFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full px-4">
            <h2 className="text-2xl md:text-[40px] font-extrabold underline text-center mb-6">
                Frequently Asked Questions
            </h2>

            <div className="max-w-[820px] mx-auto space-y-4">
                {faqData.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white drop-shadow-lg overflow-y-auto"
                    >
                        <button
                            className="w-full text-left md:px-8 px-3 md:py-8 py-5 flex items-center justify-between focus:outline-none"
                            onClick={() => toggleFAQ(idx)}
                        >
                            <span className="text-sm md:text-xl font-bold">
                                {item.question}
                            </span>
                            <div className="md:size-10 rounded-full bg-white justify-center flex items-center drop-shadow-xl ">
                                <FiChevronDown
                                    className={`transform cursor-pointer transition-transform duration-300 ${
                                        openIndex === idx
                                            ? "rotate-180"
                                            : "rotate-0"
                                    }`}
                                    size={24}
                                />
                            </div>

                        </button>
                        {openIndex === idx && (
                            <div className="md:px-10 px-3 md:pb-4 pb-2 md:text-base text-xs -translate-y-2 text-gray-700">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GrowthFAQ;

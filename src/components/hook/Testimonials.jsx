import tick from "../../assets/icons/tick.png" 
import emoji from "../../assets/icons/emoji.png" 
import lock from "../../assets/icons/lock.png" 
import hospital from "../../assets/icons/hospital.png" 
import { useState } from "react";

function Testimonial() {
    const testimonials = new Array(6).fill({
        name: "Preetam Mehta",
        role: "Managing Director",
        company: "SRN Mehta School",
        image: "/about-us.png", // Replace with real image
    });

    const [playingIndex, setPlayingIndex] = useState(null);
    const [videoMap, setVideoMap] = useState({});

    const trustPoints = [
        {
            icon: tick,
            title: "100% Ethical Approach",
            desc: "No fake urgency, no false promises",
        },
        {
            icon: emoji,
            title: "Built for Busy Doctors",
            desc: "No extra tech or staff needed",
        },
        {
            icon: hospital,
            title: "Medical-Focused Creatives",
            desc: "Designed with compliance, care & empathy",
        },
        {
            icon: lock,
            title: "Privacy & Confidentiality",
            desc: "Respected Always",
        },
    ];

    const localVideos = [
        "vid1.mp4",
        "vid2.mp4",
        "vid4.mp4"
    ];

    const handlePlay = (idx) => {
        const randomIndex = Math.floor(Math.random() * localVideos.length);
        const videoPath = `/videos/${localVideos[randomIndex]}`;

        setVideoMap((prev) => ({ ...prev, [idx]: videoPath }));
        setPlayingIndex(idx);
    };

    return (
        <div>
            {/* what client say about us */}
            <section className="px-4 text-center">
                <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold underline mb-10 md:mb-20">
                    What Clients say about Us
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative border-b-4 border-orange-500 shadow rounded overflow-hidden"
                        >
                            {/* Video or Image */}
                            {playingIndex === idx ? (
                                <video
                                    src={videoMap[idx]}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-cover aspect-video"
                                />
                            ) : (
                            <>
                                <img src={item.image} alt={item.name} className="w-full" />
                                <div className="absolute inset-15 md:-top-13 -top-9 flex flex-col md:flex-row items-center justify-center">
                                    <button 
                                        onClick={() => handlePlay(idx)} 
                                        className="bg-[#FC8A10] cursor-pointer rounded-full md:p-2 "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="white"
                                            viewBox="0 0 24 24"
                                            className="md:w-8 md:h-8 h-6 w-6"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </>
                            )}
                            <div className="p-4">
                                <h3 className="font-semibold md:text-xl text-lg md:my-2 my-1">{item.name}</h3>
                                <p className="md:text-[15px] text-xs font-semibold text-gray-700">
                                    {item.role} 
                                </p>
                                <p className="md:text-sm text-[11px] font-semibold text-gray-700">
                                    {item.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* why doctor trust us */}
            <section className="bg-[#FC8A10] text-white px-4 lg:mt-20 mt-10 py-16 text-center">
                <h2 className="text-2xl sm:text-[40px] tracking-wide text-black font-extrabold underline mb-8">
                    Why Doctor Trust Us ?
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mt-16 mx-auto text-center">
                    {trustPoints.map((point, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center">
                            <div className="md:size-16 sm:size-10 size-14 rounded-full mb-5 bg-white justify-center flex items-center">
                                <img src={point.icon} 
                                    alt="icons" 
                                    className="md:size-8 sm:size-6 size-8 translate-y-1 mb-2"
                                />
                            </div>
                            <p className="font-bold md:text-[22px]">{point.title}</p>
                            <p className="md:font-bold md:text-[22px] text-sm">{point.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Testimonial;

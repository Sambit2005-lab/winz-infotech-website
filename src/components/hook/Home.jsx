import { useState } from "react";

export default function ClinicPromo() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const localVideos = [
        "vid3.mp4",
    ];

    const handlePlay = () => {
        const randomIndex = Math.floor(Math.random() * localVideos.length);
        const selected = `/videos/${localVideos[randomIndex]}`; // assuming they are in public/videos/
        setVideoUrl(selected);
        setIsPlaying(true);
    };

    return (
        <div className="bg-gradient-to-b from-orange-100 to-white px-4 py-8 text-center">

            <header className="mb-8">

                {/* logos */}
                <h1 className="flex items-center justify-center font-bold text-black">
                    <img 
                        src="/logo-code.png" 
                        alt="logo"
                        className="md:size-56 size-30 -mt-10 md:-mt-20" 
                    />
                </h1>
                {/* logos */}
                <h1 className="flex items-center mb-5 justify-center font-bold text-black">
                    <img 
                        src="/machine.png" 
                        alt="logo"
                        className="md:size-12 size-8 -mt-5 md:-mt-10" 
                    />
                </h1>

                <div className="my-2 text-2xl sm:text-3xl md:text-[40px] font-black underline">
                    Dear Doctors, Medical Professionals & Clinic Owners
                </div>
                <p className="text-xl sm:text-4xl mt-5 font-semibold leading-tight">
                    Get 3X More Patient Bookings <br className="sm:hidden block" /> in Just 90 Days
                </p>
                <p className="text-lg sm:text-2xl mt-1 font-semibold leading-snug">
                    with Patient Growth Engine
                </p>

            </header>

            {/* image */}
            <div className="flex justify-center sm:mb-5 mb-2">
                <div className="relative w-full max-w-6xl text-white overflow-hidden shadow-lg">

                    {isPlaying ? (
                        <video
                            src={videoUrl}
                            controls
                            autoPlay
                            className="w-full h-full object-cover"
                        />
                        ) : (
                        <img
                            src="/doctor.png"
                            alt="Doctors"
                            className="w-full h-full object-cover"
                        />
                    )}

                    {/* button */}
                    {!isPlaying && (
                        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 p-4">
                            <button onClick={handlePlay} className="bg-[#FC8A10] cursor-pointer rounded-full p-2 sm:p-4 md:p-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="white"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 sm:w-10 sm:h-10 md:w-16 md:h-16"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

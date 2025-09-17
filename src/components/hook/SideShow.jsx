const testimonials = [
    {
        name: "Dr. Sneha Shah",
        title: "General Physician – Ahmedabad",
        image: "/human-3.png",
        quote: "Now patients find me on Google even before their family doctor refers them.",
    },
    {
        name: "Dr. Kunal B",
        title: "Skin Specialist – Mumbai",
        image: "/human-1.png",
        quote: "I used to post on Instagram randomly. Now my content is professional, and new patients walk in saying, 'I saw your video'!",
    },
    {
        name: "Dr. Mehta",
        title: "Dental Surgeon – Surat",
        image: "/human-2.png",
        quote: "Their team actually understood medical ethics. They don't do aggressive or false ads — just intelligent, patient-first marketing.",
    },
];

const SideShow = () => {
    const repeatedTestimonials = [...testimonials, ...testimonials]; // To loop seamlessly

    return (
        <div className="bg-[#F2F2F2] md:py-16 py-10 overflow-hidden ">
            <h2 className="lg:text-[42px] sm:text-3xl text-xl font-extrabold tracking-tight text-center md:mb-12 mb-8 underline">
                PROOFS & TRUST
            </h2>

            <div className="relative overflow-hidden max-w-[1300px] mx-auto w-full">
                <div className="animate-infinite-scroll gap-4">
                    {repeatedTestimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white w-[420px] p-8 rounded shadow border border-gray-200 flex-shrink-0 mx-auto"
                        >   
                            {/* quote symbol */}
                            <div className="text-orange-500 mb-4">
                                <svg 
                                    width="25" 
                                    height="25" 
                                    viewBox="0 0 30 27" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M26.7928 13.3831H22.2981V9.74781C22.2981 7.74274 23.9106 6.11256 25.8938 6.11256H26.3433C27.0906 6.11256 27.6917 5.50479 27.6917 4.74933V2.02289C27.6917 1.26744 27.0906 0.659668 26.3433 0.659668H25.8938C20.9272 0.659668 16.9045 4.72661 16.9045 9.74781V23.38C16.9045 24.8853 18.1124 26.1065 19.6013 26.1065H26.7928C28.2816 26.1065 29.4896 24.8853 29.4896 23.38V16.1095C29.4896 14.6043 28.2816 13.3831 26.7928 13.3831ZM10.6119 13.3831H6.11725V9.74781C6.11725 7.74274 7.72972 6.11256 9.71299 6.11256H10.1625C10.9097 6.11256 11.5109 5.50479 11.5109 4.74933V2.02289C11.5109 1.26744 10.9097 0.659668 10.1625 0.659668H9.71299C4.74637 0.659668 0.723633 4.72661 0.723633 9.74781V23.38C0.723633 24.8853 1.93158 26.1065 3.42044 26.1065H10.6119C12.1008 26.1065 13.3087 24.8853 13.3087 23.38V16.1095C13.3087 14.6043 12.1008 13.3831 10.6119 13.3831Z" fill="#FC8A10"/>
                                </svg>
                            </div>

                            <p className="font-semibold h-[70px] text-base leading-5 mb-4">
                                {t.quote}
                            </p>
                            <div className="flex items-center border-t-2 border-slate-400 pt-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-10 h-10 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <div className="font-bold">{t.name}</div>
                                    <div className="text-xs text-black font-semibold">
                                        {t.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideShow;

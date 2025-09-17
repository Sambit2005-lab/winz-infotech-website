function Include() {

    const items = [
        {
            title: "Lead Generation",
            image: "/Rectangle-129.png",
            points: [
                "Hyper-targeted Facebook & Google ads to attract ideal patients",
                "Strategic landing pages designed to convert clicks into bookings",
            ],
        },
        {
            title: "Performance Marketing",
            image: "/Rectangle-132.png",
            points: [
                "Real-time campaign tracking, optimization, and ROI reporting",
                "Transparent ad budgets with results you can feel in your calendar",
            ],
        },
        {
            title: "Social Media Management",
            image: "/Rectangle-134.png",
            points: [
                "Professional content that educates, builds trust, and attracts patients",
                "Done-for-you posting across Facebook & Instagram Platforms",
                "Reputation management: comments, reviews, and engagement handled",
            ],
        },
        {
            title: "Tech + Automation",
            image: "/Rectangle-136.png",
            points: [
                "A trust-building online presence that converts visitors to patients",
                "Mobile-optimized booking system with auto-reminders",
                "WhatsApp + Email follow-ups built to convert",
            ],
        },
    ];

    const handleBookNowClick = () => {
        if (window.fbq) {
            window.fbq('track', 'Consultation');
        }
    };

    return (
        <section className="bg-white px-4 py-8 text-center">
            <h2 className="text-2xl sm:text-[42px] tracking-tight font-extrabold underline mb-8">
                What's Included ?
            </h2>

            <div className="space-y-8 max-w-5xl mx-auto">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`border-t-4 border-[#FC8A10] bg-gray-50 overflow-hidden flex flex-col ${
                            idx % 2 === 1
                                ? "md:flex-row-reverse"
                                : "md:flex-row"
                        } text-left p-4 md:gap-8 gap-4`}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full md:w-1/3 object-cover"
                        />
                        <div className="md:w-[60%] flex flex-col">
                            <h3 className="font-bold text-lg sm:text-3xl my-3 underline">
                                {item.title}
                            </h3>
                            <ul className="list-disc pl-7 text-sm sm:text-xl space-y-2">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* button */}
            <button onClick={handleBookNowClick} className="bg-[#FC8A10] cursor-pointer sm:my-10 my-2 hover:bg-orange-500 md:text-2xl text-base text-white font-semibold sm:py-4 py-2 sm:px-6 px-4 mb-4">
                Book Free Consultation Call
            </button>

            {/* horizontal line */}
            <div className="w-full relative my-8">
                <img src="/line.png" alt="" />
            </div>
        </section>
    );
}

export default Include;

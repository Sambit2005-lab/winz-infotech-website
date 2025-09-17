const Page = () => {
    return (
        <div>
            <section className="text-center px-4 sm:px-8 max-w-4xl mx-auto mb-12">
                <button className="bg-[#FC8A10] sm:mb-10 mb-4 hover:bg-orange-500 md:text-2xl text-base text-white font-semibold sm:py-4 py-2 sm:px-6 px-4 ">
                    Book Free Consultation Call
                </button>
                <p className="text-[17px] font-bold leading-6 sm:text-xl md:mb-10 mb-6">
                    You’ve spent years mastering medicine, diagnosis, and
                    care...
                    <br />
                    But your clinic still depends on referrals and random
                    walk-ins.
                </p>
                <p className="text-sm sm:text-xl font-bold max-w-[750px] mx-auto">
                    You heal people. Let us heal your appointment gaps with an
                    AI-powered growth system that runs 24x7.
                </p>
            </section>

            {/* horizontal line */}
            <div className="w-full relative my-8">
                <img src="/line.png" alt="" />
            </div>

            <section className="text-center md:py-5 py-3 px-4 sm:px-8 max-w-[1200px] mx-auto">
                <h2 className="text-lg sm:text-3xl md:text-[40px] font-extrabold underline mb-4">
                    You’re Tired of:
                </h2>
                <p className="md:text-2xl text-lg font-bold mb-8 md:my-8 my-5"></p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-x-20 md:gap-y-10">
                    <div className="border-l-4 border-[#FC8A10] bg-gray-50 p-4 text-left">
                        <h3 className="font-semibold mb-2 text-sm md:text-3xl">Waiting for patients</h3>
                        <div className="md:w-2/3 w-1/2 -translate-y-2 h-1">
                            <img src="/line.png" alt="" className="h-0.5" />
                        </div>
                        <p className="text-xs md:text-xl max-w-[480px] text-slate-800">
                            Instead of serving them, you're constantly worrying
                            about where the next patient will come from.
                        </p>
                    </div>

                    <div className="border-l-4 border-[#FC8A10] bg-gray-50 p-4 text-left">
                        <h3 className="font-semibold mb-2 text-sm md:text-3xl">Staff struggles</h3>
                        <div className="md:w-1/2 w-1/3 -translate-y-2 h-1">
                            <img src="/line.png" alt="" className="h-0.5" />
                        </div>
                        <p className="text-xs md:text-xl max-w-[480px] text-slate-800">
                            Your team has difficulty explaining your services
                            and converting inquiries into appointments.
                        </p>
                    </div>

                    <div className="border-l-4 border-[#FC8A10] bg-gray-50 p-4 text-left">
                        <h3 className="font-semibold mb-2 text-sm md:text-3xl">
                            Less experienced clinics winning
                        </h3>
                        <div className="md:w-full w-4/5 -translate-y-2 h-1">
                            <img src="/line.png" alt="" className="h-0.5" />
                        </div>
                        <p className="text-xs md:text-xl max-w-[480px] text-slate-800">
                            They're getting more patients just because they're
                            more visible online.
                        </p>
                    </div>

                    <div className="border-l-4 border-[#FC8A10] bg-gray-50 p-4 text-left">
                        <h3 className="font-semibold mb-2 text-sm md:text-3xl">Lost time and trust</h3>
                        <div className="md:w-3/5 w-2/5 -translate-y-2 h-1">
                            <img src="/line.png" alt="" className="h-0.5" />
                        </div>
                        <p className="text-xs md:text-xl max-w-[480px] text-slate-800">
                            Because no one followed up with potential patients
                            who showed interest.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Page;

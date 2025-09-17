function Groth() {
    return (
        <section className="bg-white px-4 py-12 text-center">
            
            <p className="text-[15px] sm:text-xl md:text-2xl lg:text-3xl max-w-[940px] mx-auto md:mb-8 mb-6 font-bold">
                You didn't become a doctor to chase leads. But in today's world
                if you're not visible online, you don't exist.
            </p>

            {/* horizontal line */}
            <div className="w-full relative md:my-12 my-8">
                <img src="/line.png" alt="" />
            </div>

            {/* whole text */}
            <div className="border-[2px] md:p-5 md:space-x-4 border-gray-400 overflow-hidden max-w-[1200px] mx-auto flex flex-col md:flex-row text-left">
                {/* orange left wala */}
                <div className="bg-[url(/Rectangle-147.png)] md:bg-contain bg-no-repeat text-white 
                xl:px-5 xl:pt-6 p-4 xl:w-[25%] md:w-[35%] lg:mt-0 md:mt-3 lg:scale-y-100 md:scale-y-110 flex justify-start">
                    <div>
                        <h3 className="hidden lg:leading-12 sm:leading-9 md:block lg:text-4xl md:text-3xl sm:text-2xl font-bold xl:mt-2 lg:mt-4 md:mt-3">
                            The Patient <br /> Growth <br /> Engine
                        </h3>   
                        <h3 className="md:hidden text-2xl font-bold mt-1">
                            The Patient Growth Engine
                        </h3>
                    </div>
                </div>

                {/* right part */}
                <div className="xl:w-[75%] md:w-[70%] md:p-0 p-4">
                    <h3 className="text-base sm:text-xl lg:text-2xl xl:text-4xl xl:leading-10 font-bold lg:mb-4 md:mb-2 mb-4">
                        Designed for Doctors Who Want Peace of Mind and a Full
                        Calendar
                    </h3>
                    <p className="text-[13px] sm:text-base md:text-sm lg:text-lg xl:text-xl lg:leading-6 mb-2">
                        We're not just a marketing agency. We're your Growth
                        Partner building a plug-and-play system that attracts,
                        nurtures, and books patients without chaos or burnout.
                    </p>
                    <p className="text-[13px] sm:text-base md:text-sm lg:text-lg xl:text-xl lg:leading-6 mb-2">
                        Our system works silently while you're in surgery or on
                        rounds, filling tomorrow’s calendar with qualified
                        patients.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Groth;

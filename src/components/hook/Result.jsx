import { PopupButton } from 'react-calendly';

const Results = () => {

    // const handleClick = () => {
    //     console.log("clicked");
    // }

    return (
        <div className="w-full">
            {/* Results Section */}
            <div className="bg-[#FC8A10] text-white py-10 px-4">
                <h2 className="text-2xl sm:text-[40px] tracking-wide text-black font-extrabold underline my-8 text-center">
                    Results That Speak for Themselves
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl md:my-16 my-10 mx-auto text-center">
                    <div className="max-w-[250px]">
                        <p className="md:text-4xl text-3xl md:font-bold font-semibold sm:my-0 my-2">83%</p>
                        <br className="hidden sm:flex" />
                        <p className="md:font-bold font-semibold md:text-2xl">
                            Increase in booked consultations within 90 days
                        </p>
                    </div>
                    <div className="max-w-[220px]">
                        <p className="md:text-4xl text-3xl md:font-bold font-semibold sm:my-0 my-2">2X</p>
                        <br className="hidden sm:flex" />
                        <p className="md:font-bold font-semibold md:text-2xl">
                            patient inquiries via Google & WhatsApp
                        </p>
                    </div>
                    <div className="max-w-[250px]">
                        <p className="md:text-4xl text-3xl md:font-bold font-semibold sm:my-0 my-2">70%</p>
                        <br className="hidden sm:flex" />
                        <p className="md:font-bold font-semibold md:text-2xl">
                            Follow-up recovery from "lost" leads using AI scriptss
                        </p>
                    </div>
                    <div className="max-w-[250px]">
                        <p className="md:text-4xl text-3xl md:font-bold font-semibold sm:my-0 my-2">40+</p>
                        <br className="hidden sm:flex" />
                        <p className="md:font-bold font-semibold md:text-2xl">
                            5-star Google reviews added in under 2 Months
                        </p>
                    </div>
                </div>
            </div>

            {/* Consultation Section */}
            <div className="max-w-7xl mx-auto my-6 py-12 px-4">
                <div className=" text-center border-2 border-gray-300 p-8">
                    <h2 className="text-2xl md:text-[40px] font-extrabold underline mb-4">
                        Claim Your FREE 1-on-1 Growth Consultation
                    </h2>
                    <p className="md:mb-5 mb-2 text-gray-700 md:text-[22px] text-base font-semibold max-w-[550px] mx-auto">
                        We'll audit your current system, show where you're losing patients, and give you a fast-action strategy.
                    </p>
                    <PopupButton
                        url="https://calendly.com/nabinagrawal64/30min" 
                        rootElement={document.getElementById("root")} 
                        text="Book Free Consultation Call" 
                        className="bg-[#FC8A10] cursor-pointer translate-y-5 hover:bg-orange-500 md:text-2xl text-base text-white font-semibold sm:py-4 py-2 sm:px-6 px-4 mb-4"

                        pageSettings={{
                            backgroundColor: 'FFF8F2', // Example: Match your button's background color
                            primaryColor: '#0BB6D3',    // Example: White for primary action elements (e.g., confirm button)
                            textColor: 'FFFFF',       // Example: A common dark grey for text
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Results;

// https://calendly.com/nabinagrawal64/30min

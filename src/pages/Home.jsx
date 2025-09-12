import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import teamImage from "../assets/homeImage.png";
import { FaBullhorn, FaCamera, } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FiTarget } from "react-icons/fi";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/effect-coverflow';
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import InfiniteScroll from "../components/Animations/InfiniteScroll";
import Testimonial from "../components/Testimonial";
import OrangeCard from "../components/OrangeCard";
import { useNavigate } from "react-router-dom";
import TextAnimation from "../components/TextAnimation";
import TextHover from "../components/Animations/TextHover";
import SEO from "../components/SEO";

// images
import s1 from "../assets/service1.png"
import s2 from "../assets/service2.png"
import s3 from "../assets/service3.png"

import image1 from "../assets/case1.png";
import image2 from "../assets/case2.png";
import image3 from "../assets/case3.png";
import { BadgePercent } from "lucide-react";

const services = [
    {
        title: "Logo design",
        desc: "Your brand, beautifully visualized.",
        icon: <HiMiniPaintBrush className="text-[#F68D13] md:text-4xl text-2xl" />,
    },
    {
        title: "Branding",
        desc: "Build trust. Shape perception.",
        icon: <FiTarget className="text-[#F68D13] md:text-4xl text-2xl" />,
    },
    {
        title: "UGC Video",
        desc: "Authentic content that drives action.",
        icon: <MdOutlineSlowMotionVideo className="text-[#F68D13] md:text-4xl text-2xl" />,
    },
    {
        title: "Influencer Marketing",
        desc: "Real voices. Wider reach. Results.",
        icon: <FaBullhorn className="text-[#F68D13] md:text-4xl text-2xl" />,
    },
    {
        title: "Performance Marketing",
        desc: "Build trust. Shape perception.",
        icon: <BadgePercent className="text-[#F68D13] md:size-10 size-7" />,
    },
    {
        title: "Website Developement",
        desc: "Fast. Functional. Conversion-Ready.",
        icon: <FaCamera className="text-[#F68D13] md:text-4xl text-2xl" />,
    },
];

const caseStudies = [
    {
        id: 1,
        title: "Visa & Immigration Consultant",
        subtitle: "CASE STUDY 1",
        city: "Nagpur",
        description: "Position the consultancy as a trusted expert in Nagpur and increase revenue by 3x within 2 months.",
        image: image1,
        detailData: [
            "4× more qualified leads in 60 days",
            "+250% organic engagement from visa-related reels content",
        ]
    },
    {
        id: 2,
        title: "Beauty Salon",
        subtitle: "CASE STUDY 2",
        city: "Mumbai",
        description: "Boost beauty salon bookings, increase the average order value, and enhance brand visibility across Mumbai and its metro suburbs.",
        image: image3,
        detailData: [
            "40% increase in monthly appointments",
            "+1,200 new Instagram followers in 120 days",
        ],
    },
    {
        id: 3,
        title: "Architect",
        subtitle: "CASE STUDY 3",
        city: "Ahmedabad, Gujarat",
        description: "Establish a top-of-mind brand as a visionary architect in Ahmedabad and generate high‑value project enquiries.",
        image: image2,
        detailData: [
            "5 high-value project leads within the first 2 months",
            "Portfolio site saw a 5 minutes+ average session duration",
        ],
    },
    {
        id: 4,
        title: "Dietician",
        subtitle: "CASE STUDY 4",
        city: "Delhi",
        description: "Grow monthly client consultations from 12-15 to 35+, especially among young professionals seeking wellness.",
        image: image1,
        detailData: [
            "Tripled new consultations in 60 days",
            "Downloadable plan converted at 28% CTR",
        ],
    },
    {
        id: 5,
        title: "Real Estate Builder",
        subtitle: "CASE STUDY 5",
        city: "Surat",
        description: "Generate qualified inquiries and increase site visits for the upcoming luxury residential project.",
        image: image3,
        detailData: [
            "Generated 150+ quality leads in the first month",
            "Website engagement time spiked by 62%",
        ],
    },
];

const videos = [
    {
        id: 1,
        title: "Video 1",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101601/IVF_Clinic_nv2fuv.mp4"
    },
    {
        id: 2,
        title: "Video 2",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101581/Image_Consultant_rp1hig.mp4"
    },
    {
        id: 3,
        title: "Video 3",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101573/Architect_ofjrcn.mp4"
    },
    {
        id: 4,
        title: "Video 4",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101571/Wellness_Coach_fqrz6v.mp4"
    },
    {
        id: 5,
        title: "Video 5",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101569/Weight_Loss_Expert_gtr2t2.mp4"
    },
    {
        id: 6,
        title: "Video 6",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101569/Dietician_l45jbi.mp4"
    },
    {
        id: 7,
        title: "Video 7",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101567/Career_Coaching_m3uig4.mp4"
    },
    {
        id: 8,
        title: "Video 8",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101601/IVF_Clinic_nv2fuv.mp4"
    },
    {
        id: 9,
        title: "Video 9",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101581/Image_Consultant_rp1hig.mp4"
    },
    {
        id: 10,
        title: "Video 10",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101573/Architect_ofjrcn.mp4"
    },
    {
        id: 11,
        title: "Video 11",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101569/Weight_Loss_Expert_gtr2t2.mp4"
    },
    {
        id: 12,
        title: "Video 12",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1755101567/Career_Coaching_m3uig4.mp4"
    },
    {
        id: 13,
        title: "Video 13",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1756757677/lv_0_20250829074710_a1ptaq.mp4"
    },
    {
        id: 14,
        title: "Video 14",
        url: "https://res.cloudinary.com/dooejuv06/video/upload/v1756757691/Yoga_Trainer_zkhvso.mp4"
    }
];

const Home = () => {
    const ref = useRef(null);
    const swiperRef = useRef(null);
    const navigate = useNavigate();
    const [playingIndex, setPlayingIndex] = useState(null);

    const colors = [
        s1, s2, s3, s1, s2, s3, s1, s2, s3, s1, s2, s3
    ];

    const handleClick = (index) => {
        // Swipe to center the clicked slide
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index, 500); // 500ms transition
            swiperRef.current.autoplay.stop();
        }
        
        // Set playing index after a small delay to allow slide transition
        setTimeout(() => {
            setPlayingIndex(index);
        }, 300);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const homeStructuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Winz Infotech",
        "url": "https://winzinfotech.com",
        "logo": "https://winzinfotech.com/logoNew.png",
        "description": "Leading digital marketing and web development agency specializing in branding, performance marketing, and creative solutions.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://winzinfotech.com/contact"
        },
        "sameAs": [
            "https://www.linkedin.com/company/winz-infotech",
            "https://www.instagram.com/winzinfotech"
        ],
        "offers": {
            "@type": "AggregateOffer",
            "offerCount": "10",
            "lowPrice": "999",
            "highPrice": "49999",
            "priceCurrency": "INR"
        }
    };

    return (
        <div>
            <SEO
                title="Winz Infotech - Digital Marketing & Web Development Agency | Drive Results"
                description="Transform your business with Winz Infotech's expert digital marketing, web development, branding, and design services. 375+ clients trust us for measurable growth and creative excellence."
                keywords="digital marketing agency, web development, branding services, performance marketing, social media management, logo design, website development, lead generation, graphic design, influencer marketing"
                url="/"
                image="/logoNew.png"
                structuredData={homeStructuredData}
            />
            {/* Main Section */}
            <section className="w-full mt-20 flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-10 xl:px-16 lg:py-10 bg-white">
                {/* Left Content */}
                <div className="w-full md:w-1/2 mt-5 md:mt-0 pb-5">
                    {/* Hero Title */}
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-tight sm:mb-6 mb-3 text-black"
                    >
                        From Scroll to <br className="md:block hidden" />
                        Sale, We {" "}
                        <span className="relative inline-block">
                            Dr
                            <motion.span
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                                className="text-3xl lg:text-4xl xl:text-5xl inline-block"
                            >
                                I
                            </motion.span>
                            <motion.span
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                                className="absolute bottom-0 lg:left-[48%] left-[49%] transform -translate-x-1/2 xl:size-2.5 lg:size-2 size-1.5 bg-[#F68D13] rounded-full"
                            />
                            ve
                        </span>
                        <br className="sm:block hidden" />{" "}
                        Results.
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-gray-600 text-base lg:text-lg xl:leading-10 lg:leading-8 leading-relaxed md:mb-6 mb-3"
                    >
                        We craft scroll-stopping designs and high-converting campaigns that turn
                        attention into action. Whether you're building a brand or boosting sales, we
                        deliver measurable growth creatively and consistently.
                    </motion.p>

                    {/* lets talk */}
                    <div className="flex md:py-0 py-3 md:justify-start justify-center">
                        <motion.button
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="bg-[#F68D13] lg:px-5 lg:h-12 cursor-pointer text-white text-sm font-medium flex items-center"
                            onClick={() => navigate('/contact')}
                        >
                            <TextHover customClass="!text-base" text="Let's Talk" /> <span className="lg:-translate-x-5 -mt-0.5 -translate-x-2 text-lg">→</span>
                        </motion.button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-around md:flex-nowrap md:mt-10 mt-6 gap-6 lg:gap-12">
                        {[
                            { count: "10M+", label: "Reach" },
                            { count: "375+", label: "Clients" },
                            { count: "8+", label: "Years of Experience" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + i * 0.2 }}
                                className="text-center relative md:max-w-[200px] max-w-[80px]"
                            >
                                <p className="lg:text-5xl text-3xl font-medium text-black">{item.count}</p>
                                <p className="text-gray-500 text-sm lg:mt-3 mt-1">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex xl:justify-end justify-center"
                >
                    <img
                        src={teamImage}
                        alt="Team Work"
                        className="w-full md:max-w-md md:h-auto sm:h-[500px] h-[300px] shadow-lg xl:mr-24 xl:scale-x-140"
                    />
                </motion.div>
            </section>

            {/* Our Services */}
            <section className="bg-[#f5f5f5] px-6 lg:px-10 xl:px-16 py-10">
                {/* heading */}
                <div className="mb-12">
                    <h2 className="xl:text-5xl md:text-4xl text-3xl font-medium">
                        Our <span className="text-[#F68D13]">Services</span>
                    </h2>
                    <p className="text-gray-600 tracking-wide mt-4">
                        We deliver design, branding, and marketing solutions tailored to elevate your digital presence. Thoughtfully built. Creatively executed.
                    </p>
                </div>

                {/* Card */}
                <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-x-16 sm:gap-x-10 gap-x-6 gap-y-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white xl:py-16 lg:py-12 sm:py-10 py-6 sm:p-6 p-3 shadow-[#ecad65] shadow text-center transition-shadow duration-300"
                        >
                            <div className="md:mb-4 mb-2.5 flex justify-center">{service.icon}</div>
                            <h3 className="md:text-xl font-medium md:mb-2 mb-1">{service.title}</h3>
                            <p className="text-gray-600 md:text-sm text-xs">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Text animation */}
            <section ref={ref} className="bg-[#F68D13]">
                <div className="md:p-8 py-6 w-full">
                    <p className="leading-relaxed text-center xl:text-6xl lg:text-5xl sm:text-4xl text-xl flex flex-col gap-[1px]">
                        <TextAnimation />
                    </p>
                </div>
            </section>

            {/* Swiper */}
            <section className="w-full bg-[#f5f5f5] mx-auto lg:px-12 px-6 md:py-12 py-8 relative">
                <h2 className="xl:text-5xl md:text-4xl text-3xl font-medium text-center mb-8">
                    <span className="text-[#F68D13]">Growth Stories</span> - Not Just Campaigns
                </h2>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    grabCursor={true}
                    speed={1000}
                    touchRatio={1}
                    resistance={true}
                >
                    {caseStudies.map((current, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                initial={{ x: index % 2 === 1 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="mx-auto space-y-5"
                            >
                                <div className="bg-white min-h-[350px] lg:min-h-[400px] flex flex-col xl:flex-row shadow md:p-8 p-4 text-left">
                                    <div className="xl:w-[70%] w-full flex flex-col justify-between">
                                        <div className="flex-1">
                                            <p className="text-[#F68D13] text-sm font-medium mb-2 md:mb-4">{current.subtitle}</p>
                                            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-3 md:mb-4 lg:mb-6 leading-tight">
                                                {current.title} - <span className="text-[#F68D13]">{current.city}</span>
                                            </h2>
                                            <p className="text-gray-700 mb-4 md:mb-6 md:text-base text-sm leading-relaxed">{current.description}</p>
                                            
                                            {/* Statistics from detailData */}
                                            {current.detailData && current.detailData.length > 0 && (
                                                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-6 py-2 md:py-4">
                                                    {current.detailData.map((stat, index) => {
                                                        // Extract percentage or number from the stat
                                                        const percentageMatch = stat.match(/(\d+)%/);
                                                        const numberMatch = stat.match(/(\d+)×/);
                                                        const displayNumber = percentageMatch ? percentageMatch[1] + '%' : 
                                                                             numberMatch ? numberMatch[1] + '×' : 
                                                                             stat.match(/(\d+)/)?.[1] || '';
                                                        
                                                        return (
                                                            <div key={index} className="text-left">
                                                                <div className="text-[#F68D13] text-xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">
                                                                    {displayNumber}
                                                                </div>
                                                                <div className="text-gray-600 text-xs md:text-sm lg:text-base leading-tight">
                                                                    {stat.replace(/^\d+[%×]?\s*/, '')}
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="flex md:py-0 md:justify-start justify-center mt-auto">
                                            <button 
                                                onClick={() => {
                                                    const slug = current.title
                                                        .toLowerCase()
                                                        .replace(/\s+/g, "-")
                                                        .replace(/&/g, "and");
                                                    navigate(`/case-study/${slug}`, {
                                                        state: { case_study: current.detailData }
                                                    });
                                                }}
                                                className="bg-[#F68D13] md:w-[160px] w-[120px] text-white md:text-base text-sm transition cursor-pointer"
                                            >
                                                <TextHover text="Read more" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="xl:w-[30%] h-full w-full xl:flex hidden items-center justify-center mt-4 xl:mt-0">
                                        <img src={current?.image || s1} alt="swiper" className="max-w-full h-auto object-contain" />
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Infinite Scroll */}
            <section className="w-full bg-white lg:py-10 sm:py-5 mx-auto relative">
                <div className="relative">
                    <InfiniteScroll
                        texts={['Gym • Cafe Fitness & Wellness • Hospital • Real Estate • Fashion • Food & Beverage • Education • E-commerce •']}
                        velocity={80}
                        numCopies={2}
                        className="custom-scroll-text font-medium lg:text-6xl md:text-5xl text-4xl"
                    />
                </div>
            </section>

            {/* Clients Who Trust Us */}
            <section className="w-full bg-[#f5f5f5] py-10">
                {/* heading */}
                <div className="lg:px-10 xl:px-16 px-6">
                    <h2 className="xl:text-5xl md:text-4xl text-3xl font-medium">
                        <span className="text-[#F68D13]">Clients</span> Who Trust Us
                    </h2>
                    <p className="text-gray-600 tracking-wide max-w-2xl leading-relaxed mt-4">
                        We don’t just deliver projects — we build relationships. Hear from the brands who’ve grown with us.
                    </p>
                </div>

                <Testimonial />
            </section>

            {/* Infinite Scroll */}
            <section className="w-full bg-white lg:py-10 sm:py-5 mx-auto relative">
                <div className="relative">
                    <InfiniteScroll
                        texts={['Strategy • Design • Performance •']}
                        velocity={80}
                        numCopies={2}
                        className="custom-scroll-text font-medium lg:text-6xl md:text-5xl text-4xl"
                    />
                </div>
            </section>

            {/* Proof over Promises scrolling color card */}
            <section className="bg-[#f5f5f5] pt-10">
                {/* heading */}
                <div className="lg:px-10 xl:px-16 px-6">
                    <h2 className="xl:text-5xl leading-relaxed md:text-4xl text-3xl font-medium">
                        Proof Over Promises, <br /> Watch the <span className="text-[#F68D13]">Wins.</span>
                    </h2>
                </div>

                {/* Card swiper color bg */}
                <div className="w-full mx-auto py-10 px-8 lg:px-16 xl:px-24">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                            reverseDirection: false,
                        }}
                        loop={true}
                        speed={1000}
                        grabCursor={true}
                        centeredSlides={false}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            0: {
                                spaceBetween: 15,     // mobile
                                slidesPerView: 2,    // mobile shows 2 videos
                                centeredSlides: false,
                            },
                            768: {
                                spaceBetween: 20,     // tablet
                                slidesPerView: 3,    // tablet shows 3 videos
                                centeredSlides: true,
                            },
                            1024: {
                                spaceBetween: 20,
                                slidesPerView: 3,   // laptop and up
                                centeredSlides: true,
                            },
                            1280: {
                                spaceBetween: 30,
                                slidesPerView: 4,   // desktop and up
                                centeredSlides: false,
                            },
                        }}
                        className="portrait-swiper"
                    >   
                        {/* side card */}
                        {colors.map((bg, index) => (
                            <SwiperSlide key={index} className="portrait-slide">
                                <div className="portrait-card-container">
                                    <div className={`portrait-slide-card bg-center transition-all duration-500 ${playingIndex === index ? 'blur-sm' : ''}`} />
                                    <div className={`absolute inset-0 flex flex-col items-center justify-center portrait-slide-top ease-out duration-500 ${playingIndex === index ? 'bg-black/20' : ''}`}>
                                        {
                                            playingIndex == index ? (
                                                <video
                                                    src={videos[index]?.url}
                                                    controls
                                                    autoPlay
                                                    className="w-full object-contain"
                                                    style={{
                                                        aspectRatio: '9/16', // Portrait mode aspect ratio
                                                        height: 'auto',
                                                        minHeight: '100%'
                                                    }}
                                                />
                                            ) : (
                                                <>
                                                    <img src={bg} alt="image" className={`object-cover h-full w-full transition-all duration-500 ${playingIndex !== null && playingIndex !== index ? 'blur-md opacity-60' : ''}`} />
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        {/* button */}
                                                        <button onClick={() => handleClick(index)} className="bg-[#FC8A10] hover:scale-95 duration-300 transition-all cursor-pointer rounded-full p-2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="white"
                                                                viewBox="0 0 24 24"
                                                                className="w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12"
                                                            >
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Orange Box */}
            <section className="bg-[#f5f5f5] py-5 md:py-10 lg:px-10 xl:px-16 px-6">
                <OrangeCard
                    title="Big ideas? Stuck brand? Half-done website?"
                    description="Wherever You Are in Your Journey, We're Here to Understand, Strategize, and Deliver.Just honest conversations, sharp execution, and results that move the business. Let’s explore what’s possible together."
                    buttonText="Speak to Experts"
                />
            </section>

        </div>
    );
};

export default Home;

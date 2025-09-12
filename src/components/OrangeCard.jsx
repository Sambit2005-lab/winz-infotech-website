import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import image from '../assets/orange.png';
import TextHover from './Animations/TextHover';
import { useNavigate } from 'react-router-dom';

const OrangeCard = ({ title, description, buttonText }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate('/contact');
    };

    return (
        <section
            ref={ref}
            className="bg-[#F68D13] w-full text-white px-6 lg:px-12 py-6 xl:py-0 relative overflow-hidden"
        >
            <div className="mx-auto xl:-my-5 flex md:flex-row flex-col items-center md:gap-8">
                {/* Left Side Text Section */}
                <motion.div
                    className="md:w-3/5"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    delay={0.1}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h1 className="md:text-3xl lg:text-4xl xl:text-5xl text-2xl font-medium leading-tight lg:mb-4 mb-2">
                        {title}
                    </h1>
                    <p className="text-white md:text-base text-sm lg:text-lg md:mb-6 mb-4">
                        {description}
                    </p>

                    {/* button */}
                    <div className="flex md:py-0 md:justify-start justify-center">
                        <motion.button
                            onClick={onButtonClick}
                            className="bg-white w-fit text-[#F68D13] font-medium transition"
                        >
                            <TextHover customClass='lg:text-xl px-1.5' text={buttonText} />
                        </motion.button>
                    </div>
                </motion.div>

                {/* Right Side Image Section */}
                <motion.div
                    className="md:w-2/5"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    <img
                        src={image}
                        alt="Illustration"
                        className="md:block hidden w-full h-auto object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default OrangeCard;

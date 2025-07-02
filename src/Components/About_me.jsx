import React from 'react'

const About_me = () => {
    return (
        <div id="About_me " className='max-w-7xl mx-auto text-center mt-16  '>
            <h2 className="my-6 mb-10 text-2xl tracking-tight font-extrabold text-primary-text sm:text-3xl md:text-5xl">
                Turning Data Into Direction </h2>
            <div  className="relative bg-white overflow-hidden max-w-7xl mx-auto rounded-3xl">
                <div className="">

                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white1 transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <div className="pt-1"></div>

                        <main className="mt-10  px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 ">
                            <div className="sm:text-center lg:text-left">
                                <p className="text-secondary-text text-lg md:text-2xl max-w-xl">
                                    I started Data Huaka’i because I saw how many small businesses were overwhelmed by the complexity of their own data. After years of working in systems and analytics, I created a simplified, personalized approach that makes sense for entrepreneurs and small teams. Today, I work closely with businesses across Hawaii to build clarity, confidence, and growth—one insight at a time.
                                </p>
                            </div>
                        </main>
                    </div>
                </div>

                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 rounded-b-3xl">
                    <img
                        className="h-56 w-full object-cover  sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="/images/PXL_20210205_031846143.PORTRAIT.jpg"
                        alt="Profile"
                    />
                </div>
            </div>
        </div>
    );
}

export default About_me
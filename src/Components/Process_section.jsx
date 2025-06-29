
import React from 'react'

const Process_section = () => {

    const steps = [
        {
            number: 1,
            title: "Audit",
            description:
                "And then, you guessed it... we are going to dazzle them with a really informative answer right here. Lorem ipsum dolor amet pickled roof party artisan cray organic.",
        },
        {
            number: 2,
            title: "Planning",
            description:
                "And then, you guessed it... we are going to dazzle them with a really informative answer right here. Lorem ipsum dolor amet pickled roof party artisan cray organic.",
        },
        {
            number: 3,
            title: "Implementation",
            description:
                "And then, you guessed it... we are going to dazzle them with a really informative answer right here. Lorem ipsum dolor amet pickled roof party artisan cray organic.",
        },
        {
            number: 4,
            title: "Measure",
            description:
                "And then, you guessed it... we are going to dazzle them with a really informative answer right here. Lorem ipsum dolor amet pickled roof party artisan cray organic.",
        },
    ];
    return (
        <section className='px-4 py-16 mx-auto max-w-7xl sm:px-6 ' id='Process'>
            <h1 className='text-5xl text-center text-primary-text font-bold'>Our Process</h1>
       
        <div className="relative overflow-hidden ">
            <div className="mt-2 md:mt-0   py-16 overflow-hidden">
                <div className=" relative">
                    <div className="relative mt-8  ">
    
                        <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                            <svg
                                className="w-full"
                                xmlns="http://www.w3.org/2000/svg"
                                width="875"
                                height="48"
                                viewBox="0 0 875 48"
                                fill="none"
                            >
                                <path
                                    d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                                    stroke="#D4D4D8"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeDasharray="1 12"
                                />
                            </svg>
                        </div>

                        {/* Steps */}
                        <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-4 gap-x-8">
                            {steps.map((step) => (
                                <div key={step.number}>
                                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gray-600  border-2 border-gray-200 rounded-full shadow">
                                        <span className="text-xl font-semibold text-white ">
                                            {step.number}
                                        </span>
                                    </div>
                                    <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-gray-900  md:mt-10">
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 sm:mt-4 text-base text-gray-600 ">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Process_section
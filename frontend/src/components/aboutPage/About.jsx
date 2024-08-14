import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
            <p className="text-lg text-center mb-12">
                We are a group of passionate software engineering students from Braude College, working together to develop a social network website as part of our web development course. Our team is made up of four dedicated individuals, each bringing their unique skills and experiences to the project.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4">
                        {/* Dvir's Picture */}
                    </div>
                    <h2 className="text-xl font-semibold">Dvir</h2>
                    <p className="text-gray-600">27 years old</p>
                </div>
                <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4">
                        {/* Katrin's Picture */}
                    </div>
                    <h2 className="text-xl font-semibold">Katrin</h2>
                    <p className="text-gray-600">25 years old</p>
                </div>
                <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4">
                        {/* Lital's Picture */}
                    </div>
                    <h2 className="text-xl font-semibold">Lital</h2>
                    <p className="text-gray-600">26 years old</p>
                </div>
                <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4">
                        {/* Refael's Picture */}
                    </div>
                    <h2 className="text-xl font-semibold">Refael</h2>
                    <p className="text-gray-600">25 years old</p>
                </div>
            </div>
        </div>
    );
}

export default About;

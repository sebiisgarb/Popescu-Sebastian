import React from 'react';

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center">
            <img
                src="/profile.jpg"
                alt="Profile"
                className="w-40 h-40 rounded-full mb-6 border-4 border-yellow-400"
            />
            <h2 className="text-4xl font-bold">
                "I'm" <span className="text-yellow-400">Popescu Sebastian</span>
            </h2>
            <p className="text-lg mt-2">Python Developer</p>
            <a
                href="#contact"
                className="mt-6 px-6 py-6 bg-yellow-400 text-gray-900 rounded hover;bg-yellow-300"
            >
                Contact Me
            </a>
        </section>
    );
}

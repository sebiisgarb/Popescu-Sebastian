import React from 'react';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 fixed w-full top-0 z-10">
            <h1 className="text-yellow-400 font-bold text-lg">Popescu Sebastian</h1>
            <ul className="flex space-x-6">
                <li><a href="#about" className="hover:text-yellow-400">About</a></li>
                <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
        </nav>
    );
}



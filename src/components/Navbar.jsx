import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar fixed w-full transition-all'>
        <div className='container mx-auto px-4'>
            <div className="navbar-box flex items-center justify-between">
                <div className="absolute top-4 left-0 right-0 px-4 md:px-12 flex justify-between items-center z-10">
                    <div className="flex items-center space-x-2">
                        <img src='../src/assets/Logo2.png' alt="Izzi Alfatih Transport Logo" className="h-10" />
                        <span className="text-2xl font-bold text-black">Izzi Alfatih Transport</span>
                    </div>
                        <nav className="hidden md:flex space-x-6 text-black">
                            <a href="#home" className="hover:text-blue-500">Home</a>
                            <a href="#about" className="hover:text-blue-500">About</a>
                            <a href="#services" className="hover:text-blue-500">Services</a>
                            <a href="#news" className="hover:text-blue-500">News</a>
                            <a href="#solutions" className="hover:text-blue-500">Solutions</a>
                        </nav>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar
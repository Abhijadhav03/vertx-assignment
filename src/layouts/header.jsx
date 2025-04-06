import React from "react";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full h-[60px] bg-black shadow-md flex items-center px-2 sm:px-4 border border-gray-800 z-30">
            {/* Logo on top of Utility Bar */}
            <img src="/public/vertxlogo.jpg" alt="Logo" className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] mr-2 sm:mr-4 rounded-full border border-gray-800" />

            {/* Company Name - Hidden on smallest screens */}
            <div className="hidden sm:flex h-[50px] w-[150px] sm:w-[190px] items-center text-white text-lg font-semibold border border-gray-800">
                VertxLabs Inc.
            </div>

            {/* Central Component */}
            <div className="h-[50px] flex-1 flex items-center justify-between mx-2 sm:mx-auto bg-black rounded-lg px-2 sm:px-6 shadow border border-gray-800 max-w-[920px]">
                <span className="text-white text-sm sm:text-base font-medium cursor-pointer hover:text-gray-500">Activity</span>
                <span className="text-white text-sm sm:text-base font-medium cursor-pointer hover:text-gray-500">Analytics</span>
            </div>

            {/* Logout Button */}
            <button className="h-[40px] sm:h-[50px] w-[80px] sm:w-[120px] bg-black text-white text-sm sm:text-base font-medium rounded-lg hover:bg-gray-900 ml-2 sm:ml-4 border border-gray-800">
                Logout
            </button>
        </header>
    );
};


import { Home, Settings } from "lucide-react"; 
import React from "react";

export const Utility = () => {
    return (
        <aside className="fixed left-0 top-[60px] h-[calc(100vh-60px)] w-12 bg-black text-white flex flex-col justify-between p-2 border border-gray-800
        sm:w-14 md:w-16 lg:w-20 xl:w-24 z-10">
            {/* Top Icon */}
            <div className="flex justify-center p-1 sm:p-1 md:p-2 lg:p-3 xl:p-4">
                <Home className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pointer text-white hover:text-gray-500" />
            </div>

            {/* Bottom Icon */}
            <div className="flex justify-center p-1 sm:p-1 md:p-2 lg:p-3 xl:p-4">
                <Settings className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pointer text-white hover:text-gray-500" />
            </div>
        </aside>
    );
};
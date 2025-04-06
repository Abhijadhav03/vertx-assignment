import { forwardRef, useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

export const Sidebar = forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sidebar Toggle Button (only visible on small screens) */}
            <button 
                className="fixed top-[15px] left-4 z-[100] bg-black text-white p-2 rounded-md lg:hidden" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle sidebar"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Component */}
            <aside
                ref={ref}
                className={`fixed left-0 sm:left-12 md:left-14 lg:left-16 xl:left-20 top-[60px] z-20 h-[calc(100vh-60px)] w-[180px] bg-black text-white border-r border-gray-700 flex flex-col items-center py-4 
                transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
            >
                {/* Sidebar Content */}
                <nav className="w-full flex flex-col space-y-2 px-3">
                    <SidebarItem title="Dashboard" />
                    <SidebarItem title="Analytics" />
                    <SidebarItem title="Connect" />
                    <SidebarItem title="Dealroom" />
                    <SidebarItem title="Profile" />
                    <SidebarItem title="Settings" />
                </nav>
            </aside>
        </>
    );
});

Sidebar.displayName = "Sidebar";

/* Sidebar Item Component */
const SidebarItem = ({ title }) => {
    return (
        <div className="h-[40px] w-full flex items-center justify-center cursor-pointer hover:bg-gray-800 rounded-lg px-2">
            {title}
        </div>
    );
};

import logo from "../assets/kawasaki.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="relative w-full h-auto mb-0 pb-0 p-3 bg-black">
            <div className="flex items-center justify-between w-full pb-2">
                {/* Logo Section */}
                <div className="pt-2">
                    <img src={logo} alt="Company logo" />
                </div>

                {/* Navigation Links */}
                <div className="hidden space-x-12 md:flex">
                    <Link to="#" className="text-lime-500 hover:text-white">Pricing</Link>
                    <Link to="#" className="text-lime-500 hover:text-white">Model</Link>
                    <Link to="#" className="text-lime-500 hover:text-white">About Us</Link>
                    <Link to="#" className="text-lime-500 hover:text-white">Careers</Link>
                    <Link to="#" className="text-lime-500 hover:text-white">Showrooms</Link>
                </div>

                {/* Get Started Button */}
                <Link to="#" className="hidden border-2 border-lime-500 p-3 px-6 pt-2 text-white bg-black rounded-full hover:bg-lime-500 hover:text-black md:block mr-6">Get Started</Link>
            </div>

            {/* Mobile Menu (if needed later) */}
            <div className="mobileMenu hidden">
                <div></div>
            </div>
        </nav>
    );
};


export default Navbar;
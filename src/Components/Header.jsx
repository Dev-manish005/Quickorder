
import logo from "../assets/logo.png";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <>
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 space-y-4 sm:space-y-0">
          
          {/* Logo */}
          <div className="flex items-center  space-x-2">
            <img src={logo} alt="Food Point Logo" className="h-10 sm:h-12" />
           
          </div>

          {/* Search bar */}
          
          

          {/* Navigation links */}
          <nav className="flex space-x-4 text-orange-500 text-sm sm:text-base font-semibold">
            <a href="#" className="hover:text-orange-600">Home</a>
            <a href="#" className="hover:text-orange-600">About</a>
            <a href="#" className="hover:text-orange-600">%Offers</a>
            <a href="#" className="hover:text-orange-600">Contact</a>
            <a href="#" className="hover:text-orange-600">Cart</a>
          </nav>

        </div>
      </div>
    
    </header>
    </>
  );
};

export default Header;

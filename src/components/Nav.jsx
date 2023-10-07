import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Disable or enable scrolling on the body based on menu state
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset'; // Enable scrolling
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex max-sm:mr-4 justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} alt='logo' className='w-[250px] h-[100px]' />
        </a>

        <ul className='flex-1 flex justify-center items-end gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat  hover:text-gray-900  leading-normal text-lg text-slate-gray'
                onClick={closeMenu} // Close the menu when a list item is clicked
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='lg:hidden'>
          <img
            src={hamburger}
            alt='hamburger icon'
            width={25}
            height={25}
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="">
          {isMenuOpen && (
            <div className='sidebar-menu bg-opacity-95 items-center absolute flex flex-col  justify-center  mt-2 mb-6  h-screen bg-white w-3/4 right-0'>
              <ul>
                {navLinks.map((item) => (
                  <li key={item.label} className="my-4">
                    <a
                      href={item.href}
                      className='font-montserrat  font-bold  hover:text-gray-500 text-2xl leading-normal  text-gray-900'
                      onClick={closeMenu} // Close the menu when a list item is clicked
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Sidebar Menu */}

      <span className='text-center xl:bg-white text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent  '>
        Complete Mechanical Solution.
      </span>
    </header>
  );
};

export default Nav;

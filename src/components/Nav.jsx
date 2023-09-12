import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

	return (
		<header className='padding-x py-8 absolute z-10 w-full'>
			<nav className='flex justify-between items-center max-container'>
				<a href='/'>
					<img
						src={headerLogo}
						alt='logo'
						className='m-0 w-[100px] h-[50px]'
					/>
				</a>
				<p className='text-sm font-palanquin underline decoration-gray-900 decoration-dashed underline-offset-4 hover:cursor-pointer hover:decoration-wavy text-coral-red'>
					USHA ADVANCE ENGINEERING
				</p>
				<ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className='font-montserrat hover:text-gray-900  leading-normal text-lg text-slate-gray'
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className='flex gap-2 text-md text-gray-900 hover:text-coral-red text-center leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
					<a href='/'>Sign in</a>
					<span>/</span>
					<a href='/'>Explore now</a>
				</div>
				<div className='max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} onClick={toggleMenu} style={{ cursor: 'pointer' }} />
        </div>
			</nav>
		</header>
	);
};

export default Nav;

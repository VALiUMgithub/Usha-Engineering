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
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				{/* <div className='flex gap-2 text-md text-gray-900 hover:text-coral-red text-center leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
					<a href='/'>Contact Us</a>
					<span>/</span>
					<a href='/'>Explore now</a>
				</div> */}
				<div className='lg:hidden'>
					<img
						src={hamburger}
						alt='hamburger icon'
						width={25}
						height={25}
						onClick={toggleMenu}
						style={{ cursor: "pointer" }}
					/>
					{isMenuOpen && (
						<div className='side-menu bg-black absolute flex  justify-center items-center mt-2 mb-6 inset-x-0'>
							<ul>
								{navLinks.map((item) => (
									<li key={item.label}>
										<a
											href={item.href}
											className='font-montserrat mb-2 hover:text-gray-900  leading-normal text-lg text-slate-gray'
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
			<span className='text-center xl:bg-white text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent xl:whitespace-nowrap relative z-10 pr-10'>
				Complete Mechanical Solution.
			</span>
		</header>
	);
};

export default Nav;

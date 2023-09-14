import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";



const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

	return (
		<section
			id='home'
			className='w-full flex  flex-col justify-center min-h-screen gap-10 max-container'
		>
			<div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
				{/* <p className='text-xl font-montserrat text-coral-red'>
					USHA ADVANCE ENGINEERING
				</p> */}

				<h1 className='mt-10 mb-6 font-palanquin text-8xl max-sm:text-[44px] max-sm:leading-[82px] font-bold'>
					<span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
						Precision Metal
					</span>
					<br />
					<span className='text-coral-red inline-block mt-3 '>
						Manufacturing
					</span> and{" "}
					<span className='text-coral-red inline-block mt-3'>Supply</span>
				</h1>

				
				<h3 className='mt-10 mb-6 max-sm:text-xl font-palanquin text-4xl max-sm:text-[44px] max-sm:leading-[82px] font-bold'>
					<span className='xl:bg-white bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent xl:whitespace-nowrap relative z-10 pr-10'>
						Complete Mechanical Solution.
					</span>
				</h3>
				{/* <Button label='Browse Products' iconURL={arrowRight} /> */}
				{/* <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
					{statistics.map((stat, index) => (
						<div key={index}>
							<p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
							<p className='leading-7 font-montserrat text-slate-gray'>
								{stat.label}
							</p>
						</div>
					))}
				</div> */}
			</div>

			
		</section>
	);
};

export default Hero;

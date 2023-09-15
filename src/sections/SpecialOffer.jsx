import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
	return (
		<section
			id='about'
			className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'
		>
			<div className='flex flex-1 flex-col'>
				<h2 className='text-4xl font-palanquin font-bold'>
					Company <span className='text-coral-red '>Profile</span>
				</h2>
				<p className='mt-4 info-text'>
					<span className='font-bold text-xl text-coral-red '>
						Usha Advance Engineering
					</span>{" "}
					is a distinguished leader in precision manufacturing, specializing in
					the production of meticulously crafted components from{" "}
					<span className='font-semibold underline decoration-indigo-400 text-gray-900 decoration-2 hover:decoration-indigo-600'>
						premium-grade metals.
					</span>{" "}
					Our proficiency extends to extensive repair and maintenance services
					for engines and turbines, with the exception of{" "}
					<span className='font-semibold underline decoration-pink-600 hover:decoration-pink-400 text-gray-900 decoration-2'>
						aircraft, vehicle, and bicycle engines.
					</span>
				</p>
				<p className='mt-6 info-text'>
					Also supplies specified{" "}
					<span className='font-semibold underline decoration-green-500 hover:decoration-green-700 text-gray-900 decoration-2'>
						ferrous and non ferrous metals
					</span>{" "}
					in all types and all shapes and sizes
				</p>
				<p className='mt-6 info-text'>
					One of our{" "}
					<span className='font-semibold'>remarkable achievements</span> lies in
					our unparalleled expertise in the rapid production of{" "}
					<span className='font-semibold underline decoration-cyan-500 hover:decoration-cyan-700 text-gray-900 decoration-2'>
						large gun barrels liner in a very short time,
					</span>{" "}
					showcasing our commitment to excellence and efficiency. At Usha
					Advance Engineering, we are dedicated to delivering{" "}
					<span className='font-semibold underline decoration-green-500 hover:decoration-green-700 text-gray-900 decoration-2'>
						top-tier craftsmanship, innovative solutions,
					</span>{" "}
					and unmatched reliability in every project we undertake.
				</p>
				

				{/* <div className='mt-11 flex flex-wrap gap-4'>
					<Button label='Shop now' iconURL={arrowRight} />
					<Button
						label='Learn more'
						backgroundColor='bg-white'
						borderColor='border-slate-gray'
						textColor='text-slate-gray'
					/>
				</div> */}
			</div>
		</section>
	);
};

export default SpecialOffer;

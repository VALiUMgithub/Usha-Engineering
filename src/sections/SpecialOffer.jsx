import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
	return (
		<section id="about" className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
			<div className='flex flex-1 flex-col'>
				<h2 className='text-4xl font-palanquin font-bold'>Comapany Profile</h2>
				<p className='mt-4 info-text'>
					Usha Advance Engineering is skilled in manufacturing accurately parts
					of highly specified metals and work in large repair and maintenance of
					engine and turbines excluding aircraft, vehicle and cycle engine, also
					supplies highly specified metal in all shape and size
				</p>
				<p className='mt-6 info-text'>
					Usha Advance Engineering is skilled in manufacturing accurately parts
					of highly specified metals and work in large repair and maintenance of
					engine and turbines excluding aircraft, vehicle and cycle engine, also
					supplies highly specified metal in all shape and size
				</p>
				<div className='mt-11 flex flex-wrap gap-4'>
					<Button label='Shop now' iconURL={arrowRight} />
					<Button
						label='Learn more'
						backgroundColor='bg-white'
						borderColor='border-slate-gray'
						textColor='text-slate-gray'
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;

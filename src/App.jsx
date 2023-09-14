import { Nav } from "./components";

import {
	CustomerReviews,
	Footer,
	Hero,
	PopularProducts,
	Services,
	SpecialOffer,
	ProductImages,
	Subscribe,
	SuperQuality,
} from "./sections";


const App = () => {
	return (
		<main className='relative'>
			
			<Nav />
			<section className='xl:padding-l wide:padding-r '>
				<Hero />
			</section>
			
			<section className='padding'>
				<SpecialOffer />
			</section>
			<section className='padding'>
				<ProductImages />
			</section>
			<section className='padding'>
				<PopularProducts />
			</section>
			<section className='padding-x py-10'>
				<Services />
			</section>

			
			<section className=' bg-black padding-x padding-t pb-8'>
				<Footer />
			</section>
		</main>
	);
};

export default App;

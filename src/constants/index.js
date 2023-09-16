import {
	facebook,
	instagram,
	shieldTick,
	support,
	truckFast,
	twitter,
} from "../assets/icons";
import {
	bigShoe1,
	bigShoe2,
	bigShoe3,
	customer1,
	customer2,
	shoe4,
	shoe5,
	shoe6,
	shoe7,
	thumbnailShoe1,
	thumbnailShoe2,
	thumbnailShoe3,
	superalloys,
	barrel1,
	barrel2,
	barrel3,
	barrel4,
	barrel5
} from "../assets/images";

export const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#about", label: "About Us" },
	{ href: "#products", label: "Products" },
	{ href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
	{
		thumbnail: thumbnailShoe1,
		bigShoe: bigShoe1,
	},
	{
		thumbnail: thumbnailShoe2,
		bigShoe: bigShoe2,
	},
	{
		thumbnail: thumbnailShoe3,
		bigShoe: bigShoe3,
	},
	// {
	// 	thumbnail: superalloys.svg,
	// 	bigShoe: superalloys.jpg,
	// },
];

export const statistics = [
	{ value: "1k+", label: "Brands" },
	{ value: "500+", label: "Shops" },
	{ value: "250k+", label: "Customers" },
];

export const products = [
	{
		imgURL: bigShoe1,
		name: "Product 1",
		
	},
	{
		imgURL: barrel3,
		name: "Product 2",
		
	},
	{
		imgURL: barrel1,
		name: "Product 3",
		
	},
	{
		imgURL: barrel2,
		name: "Product 4",
		
	},
];

export const services = [
	{
		imgURL: truckFast,
		label: "Diverse customer base",
		subtext: "Enjoy versatility of services to cater different requirements.",
	},
	{
		imgURL: shieldTick,
		label: "One stop solution",
		subtext:
			"All your mechanical needs are found here.",
	},
	{
		imgURL: support,
		label: "Love to help you",
		subtext: "Our dedicated team is here to assist you every step of the way.",
	},
];

export const reviews = [
	{
		imgURL: customer1,
		customerName: "Morich Brown",
		rating: 4.5,
		feedback:
			"The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
	},
	{
		imgURL: customer2,
		customerName: "Lota Mongeskar",
		rating: 4.5,
		feedback:
			"The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
	},
];

export const footerLinks = [
	{
		title: "Address",
		links: [
			{ name: "Ground floor, D-2 Hill View Chsl,", link: "#products" },
			{ name: "Uran-Mora road, Bori Pakhadi, Uran,", link: "#products" },
			{ name: "Dist-Raigad, Navi Mubai-400702", link: "#products" },
			
		],
	},
	{
		title: "Get in touch",
		links: [
			{ name: "kiranawasarmal@gmail.com", link: "mailto:kiranawasarmal@gmail.com" },
			{ name: "8097756605", link: "tel:+918097756605" },
			{ name: "9757426235", link: "tel:+919757426235" },
		],
	},
];

export const socialMedia = [
	{ src: facebook, alt: "facebook logo" },
	{ src: twitter, alt: "twitter logo" },
	{ src: instagram, alt: "instagram logo", link: "https://instagram.com/awasarmal.kiran?igshid=MzRlODBiNWFlZA==" },
];

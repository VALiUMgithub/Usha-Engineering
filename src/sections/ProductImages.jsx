import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const ProductImages = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <div><h2 className='text-4xl -mt-4 mb-6 font-palanquin font-bold'>
     Products
</h2><div className='relative rounded-lg flex-1 flex justify-center items-center sm:w-full  xl:min-h-screen max-xl:py-40 bg-[#e1e1e1] bg-hero bg-cover bg-center'>
    <img
        src={bigShoeImg}
        alt='shoe colletion'
        width={610}
        height={502}
        className='object-contain rounded-lg relative z-10'
    />

    <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map((image, index) => (
            <div key={index}>
                <ShoeCard
                    index={index}
                    imgURL={image}
                    changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                    bigShoeImg={bigShoeImg}
                />
            </div>
        ))}
    </div>
</div></div>
  )
}

export default ProductImages
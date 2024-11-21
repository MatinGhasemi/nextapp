"use client"
import Image from "next/image";

import Carousel from "../components/carousel";
import url from "../production";
import valueType from "../interfaces/relatedValue";
import Related from "../components/related";
import BrandBox from "../components/brandBox";
import JustForYou from "../components/justForYou";
import OpenFashion from "../components/openFashion";
import Collection from "../components/collections";
import LightNavbar from "../components/lightNavbar";
import Link from "next/link";

const Home = () => {
    const values:valueType[] = [
        {src:`${url}woman3.png`,text:"21WN",price:120,heart:false},
        {src:`${url}woman4.png`,text:"21WN",price:120,heart:false},
        {src:`${url}woman5.png`,text:"21WN",price:120,heart:false},
        {src:`${url}woman6.png`,text:"21WN",price:120,heart:false}
    ]

    return (<>
        <LightNavbar />
        <div>
            <Carousel />
            <div className="text-center flex flex-col items-center mt-10">
                <p className="text-2xl tracking-wider font-serif">NEW ARRIVAL</p>
                <Image src={`${url}8.png`} width={100} height={200} alt="hr" />
                <div>
                    <div className="flex justify-center gap-7 mt-5">
                        <div className="relative">
                            <Link href='/products'>
                                <p className="tracking-widest border-b-2 border-price z-10">All</p>
                                <svg width="11" className="absolute z-0 left-1/2 -translate-x-1/2 top-[19px] fill-price" height="11" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4.5" y="1.17008" width="5.15685" height="5.15685" transform="rotate(45 4.5 1.17008)" stroke="none" strokeWidth="1"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="tracking-widest"><Link href='/products'>Apparel</Link></div>
                        <div className="tracking-widest"><Link href='/products'>Dress</Link></div>
                        <div className="tracking-widest"><Link href='/products'>Tshirt</Link></div>
                        <div className="tracking-widest"><Link href='/products'>Bag</Link></div>
                    </div>
                    <Related src={values}/>        
                    <BrandBox />
                    <Collection />  
                    <div className="mt-20 mb-8">
                        <JustForYou />
                    </div>
                    <OpenFashion />
                </div>
            </div>
        </div>
    </>);
}
 
export default Home;
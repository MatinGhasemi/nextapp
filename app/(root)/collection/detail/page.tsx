'use client'

import Navbar from "@/app/components/darkNavbar";
import url from "@/app/production";
import valueType from "@/app/interfaces/relatedValue";
import Related from "@/app/components/related";
import Image from "next/image";
import Link from "next/link";

const CollectionDetail = () => {
    const products:valueType[] = [
        {src:`${url}dress.png`,text:"October Collection",price:120,heart:true},
        {src:`${url}boot.png`,text:"October Collection",price:120,heart:true},
        {src:`${url}ring5.png`,text:"October Collection",price:120,heart:true},
        {src:`${url}ring6.png`,text:"October Collection",price:120,heart:true},
        {src:`${url}ring1.png`,text:"October Collection",price:120,heart:true},
        {src:`${url}ring2.png`,text:"October Collection",price:120,heart:true}
    ]

    return (<>
        <Navbar />
        <div className="bg-background max-w-[440px] mx-auto">
            <div className="px-3 max-w-[440px]">
                <div className="flex justify-center">
                  <div className="relative -bottom-6 bg-11 text-center w-32 h-32">
                    <img className="absolute top-0 left-0 w-full h-full" src={`${url}101.png`} width={80} height={80} alt="10"/>
                    <div className="text-center pt-3 z-10">
                      <p className="text-4xl italic text-foreground">October</p>
                      <p className="text-foreground text-sm font-light tracking-widest">COLLECTION</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative -top-6">
                      <img id="October" src={`${url}image 20.png`} alt="woman" />
                      <div className="absolute bottom-10 -right-4">
                        <img className="w-40 h-32" src={`${url}10.png`} alt="" />
                      </div>
                    </div>
                </div>
                <div className="text-foreground">
                    <Related src={products}/>
                </div>
                <div className="text-foreground">
                    <p className="tracking-wider text-center my-4 text-2xl font-serif">YOU MAY ALSO LIKE</p>
                    <div className="flex gap-3 pb-12 pt-4">
                        <div>
                            <Link href='/collection'>
                                <Image src={`${url}image 21.png`} alt="woman" width={300} height={500}/>
                                <p className="font-serif tracking-wider opacity-90 text-center">Black Collection</p>
                            </Link>
                        </div>
                        <div>
                            <Link href='/collection'>
                                <Image src={`${url}image 22.png`} alt="woman" width={300} height={500}/>
                                <p className="font-serif tracking-wider opacity-90 text-center">Hae By Haekim</p>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>);
}
 
export default CollectionDetail;
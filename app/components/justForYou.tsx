import Image from "next/image";
import url from "../production";
import { useEffect, useRef, useState } from "react";

const JustForYou = () => {  
    const slider = useRef<HTMLDivElement|null>(null);

    const [count,setCount] = useState(1) 

    useEffect(()=>{
        const w = 255 ;
        const interval = setInterval(()=>{
            next(w)
        },4000)
        return ()=>clearInterval(interval);
    },[count])

    const next = (w:number)=>{
        if(slider.current){
            if (count >= 4 )
                setCount(1)
            slider.current.scrollLeft = count >=4 ? 1 : w*count ;
            setCount(preCount => preCount+1);
        }
    }

    return ( 
        <div className="relative">
            <div className="flex flex-col items-center">
                <p className="font-serif font-extralight text-2xl tracking-widest">JUST FOR YOU</p>
                <Image width={100} height={600} alt="hr-8" src={`${url}8.png`}/>
            </div>
            <div className="mt-4">
                <div ref={slider} className="scroll-smooth flex h-[450px] w-[255px] sm:w-[518px] sm:gap-2 lg:w-[860px] lg:gap-8 mx-auto overflow-hidden text-center">
                    <div className="min-w-[255px]">
                        <Image quality={1000} className="w-[255px] h-[380px] rounded-lg" src={`${url}Bitmap6.png`} alt="slide1" width={100} height={300} />
                        <div>
                            <p className="text-background">1WN reversible angora cardian</p>
                            <p className="text-price">$120</p>
                        </div>
                    </div>
                    <div className="min-w-[255px]">
                        <Image quality={1000} className="w-[255px] h-[380px] rounded-lg" src={`${url}Bitmap7.png`} alt="slide1" width={100} height={300} />
                        <div>
                            <p className="text-background">Harris Tweed Three-button Jacket</p>
                            <p className="text-price">$120</p>
                        </div>
                    </div>
                    <div className="min-w-[255px]">
                        <Image quality={1000} className="w-[255px] h-[380px] rounded-lg" src={`${url}Bitmap4.png`} alt="slide1" width={100} height={300} />
                        <div>
                            <p className="text-background">Cashmere Blend Cropped Jacket SW1WJ285-AM</p>
                            <p className="text-price">$120</p>
                        </div>
                    </div>
                    <div className="min-w-[255px]">
                        <Image quality={1000} className="w-[255px] h-[380px] rounded-lg" src={`${url}Bitmap0.png`} alt="slide1" width={100} height={300} />
                        <div>
                            <p className="text-background">Harris Tweed Three-button Jacket</p>
                            <p className="text-price">$120</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default JustForYou;
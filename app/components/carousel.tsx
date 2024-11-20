"use client"

import Image from "next/image";

import url from "../production";
import { useEffect, useReducer, useRef, useState } from "react";

const Carousel = () => {
    const [count,setCount] = useState(1);
    const [w,setW] = useState(384);
    const [img,setImg] = useState([
        {
            src:`${url}image 10.png`,
            text:"LUXURY",
            text2:"FASHION",
            text3:"&ACCESSORIES"
        },{
            src:`${url}woman2.png`,
            text:"OCTOBER",
            text2:"COLLECTION"
        },{
            src:`${url}woman3.png`
        }
    ])

    const carousel = useRef<HTMLDivElement|null>(null); 
    const req1 = useRef<SVGSVGElement|null>(null);
    const req2 = useRef<SVGSVGElement|null>(null);
    const req3 = useRef<SVGSVGElement|null>(null);
    const rectangle = [req1,req2,req3]

    useEffect(()=>{
        if (window.innerWidth > 440)
            setW(440)
        else setW(window.innerWidth)
    },[])

    const next = ()=>{
        navigation(count)
        if (carousel.current){
            setCount(count+1);
            if (count===img.length)
                setCount(1)
            carousel.current.scrollLeft = count !== img.length ? w*count : 0 ;
        }
    }
    
    const navigation = (count:number)=>{
        rectangle.forEach((rec)=>{
            rec.current?.classList.remove("fill-price")
        })
        if (count===3)
            req1.current?.classList.add("fill-price");
        else if (count===1) req2.current?.classList.add("fill-price");
        else if (count===2) req3.current?.classList.add("fill-price");
    }


    return (
        <div className="h-[600px] w-full mx-auto max-w-[440px] relative">
            <div onClick={next} ref={carousel} className="h-[600px] w-full max-w-[440px] scroll-smooth relative overflow-hidden flex">
                {img.map((i,index)=>{
                    return(
                        <div key={index}>
                            <Image width={100} style={{minWidth:`${w}px`}} height={600} className="h-full max-w-[440px]" src={i.src} alt={`imag${index}`} />
                            <div className="noto absolute top-1/2 pl-7 -translate-y-1/2 z-20 text-[40px] opacity-70 text-background">
                                {i.text ? <p>{i.text}</p> : <></>}
                                {i.text2 ? <p className="pl-8">{i.text2}</p> : <></>}
                                {i.text3 ? <p>{i.text3}</p> : <></>}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="absolute flex gap-1 left-1/2 -translate-x-1/2 bottom-5">
                <div>
                    <svg ref={req1} width="13" className="fill-price" height="13" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4.5" y="1.17008" width="5.15685" height="5.15685" transform="rotate(45 4.5 1.17008)" stroke="#F9F9F9" strokeWidth="1"/>
                    </svg>
                </div>
                <div>
                    <svg ref={req2} width="13" className="" height="13" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4.5" y="1.17008" width="5.15685" height="5.15685" transform="rotate(45 4.5 1.17008)" stroke="#F9F9F9" strokeWidth="1"/>
                    </svg>
                </div>
                <div>
                    <svg ref={req3} width="13" className="" height="13" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4.5" y="1.17008" width="5.15685" height="5.15685" transform="rotate(45 4.5 1.17008)" stroke="#F9F9F9" strokeWidth="1"/>
                    </svg>
                </div>
            </div>
        </div>
     );
}
 
export default Carousel;
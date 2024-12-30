"use client"

import Image from "next/image";

import url from "../production";
import { useEffect, useRef, useState } from "react";

const Carousel = () => {
    const [count,setCount] = useState(1);
    const [w,setW] = useState(384);
    const img = [
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
    ]

    const carousel = useRef<HTMLDivElement|null>(null); 
    const req1 = useRef<SVGSVGElement|null>(null);
    const req2 = useRef<SVGSVGElement|null>(null);
    const req3 = useRef<SVGSVGElement|null>(null);
    const rectangle = [req1,req2,req3,req1]

    useEffect(()=>{
        if (window.innerWidth > 440)
            setW(440)
        else setW(window.innerWidth)
    },[])

    const next = ()=>{
        navigation(count,"next")
        if (carousel.current){
            setCount(count+1);
            if (count===img.length)
                setCount(1)
            carousel.current.scrollLeft = count !== img.length ? w*count : 0 ;
        }
    }
    const prev = ()=>{
        navigation(count,"prev")
        if (carousel.current){
            if (count===1){
                setCount(img.length);
                carousel.current.scrollLeft = (img.length - 1) * w ;
            }else{
                setCount(count-1);
                carousel.current.scrollLeft = (count-2) * w ;
            }
        }
    }

    const navigation = (count:number,move:string)=>{
        rectangle.forEach((rec)=>{
            rec.current?.classList.remove("fill-price")
        })

        if (move==="next"){
            rectangle[count].current?.classList.add("fill-price");
        }else{
            if (count===3) req2.current?.classList.add("fill-price");
            else if (count===1) req3.current?.classList.add("fill-price");
            else if (count===2) req1.current?.classList.add("fill-price");
        }
    }

    const leftorright = (e: React.TouchEvent<HTMLDivElement>)=>{
        const client_X =  e.changedTouches[0].clientX
        if (client_X < w / 2){
            next()
        }else {
            prev()
        }
    }

    return (
        <div className="h-[600px] w-screen relative">
            <div className="hidden sm:block">
                <Image className="absolute top-8 w-40" src={`${url}hands_top.png`} height={300} width={300} alt="hand_up"/>
                <svg className="absolute -top-4 -z-20 w-96" width="535" height="702" viewBox="0 0 535 702" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-52.8263 40.4563C-8.12629 11.6563 47.6737 -0.743669 100.274 8.75633C125.374 13.2563 150.474 23.1563 168.074 42.1563C184.474 59.8563 194.074 85.2563 187.574 109.256C181.374 132.256 162.974 149.856 145.374 164.756C125.374 181.756 104.674 197.956 84.8737 215.356C44.6737 250.756 7.17371 289.956 -19.3263 336.856C-45.4263 383.056 -60.8263 435.656 -58.8263 488.956C-56.9263 539.956 -39.1263 589.356 -5.52629 627.956C24.6737 662.656 66.3737 687.856 111.474 697.356C160.774 707.756 213.374 700.356 257.874 676.756C281.374 664.256 300.474 646.156 321.574 630.356C342.374 614.756 365.774 604.356 391.874 602.356C440.274 598.656 484.974 622.856 510.074 663.956C512.874 668.556 515.474 673.356 517.874 678.256C520.274 683.256 523.574 688.356 524.974 693.656C526.674 699.756 536.074 697.156 534.474 691.056C532.874 685.356 532.374 679.456 530.274 673.756C528.174 668.156 525.574 662.656 522.674 657.356C516.974 647.356 509.974 638.156 501.974 629.856C485.474 612.856 464.674 600.056 441.874 593.356C417.274 586.156 390.574 586.056 365.774 592.656C339.174 599.756 317.774 615.356 296.874 632.556C276.774 649.156 256.274 664.156 231.974 673.856C208.174 683.356 182.774 688.656 157.074 689.056C108.574 689.756 61.0737 672.056 24.3737 640.556C-14.2263 607.456 -38.4263 561.756 -45.6263 511.556C-53.3263 457.556 -41.2263 402.356 -16.6263 354.056C8.3737 304.956 45.5737 264.156 86.2737 227.556C106.474 209.356 127.674 192.456 148.474 175.056C166.474 160.056 184.374 143.356 193.574 121.356C202.874 98.9563 199.874 73.5563 187.174 52.9563C174.374 32.0563 153.774 17.9563 130.974 9.75633C82.6737 -7.14367 26.2737 -0.943666 -19.7263 19.5563C-31.6263 24.8563 -43.0263 31.3563 -53.8263 38.7563C-54.8263 39.4563 -53.9263 41.0563 -52.8263 40.4563Z" fill="#FFADF2"/>
                </svg>
                <Image className="absolute -bottom-8 right-0 w-40" src={`${url}hands_bottom.png`} alt="hands_buttom" width={300} height={300}/>
                <svg className="absolute bottom-3 -z-10 right-0" width="233" height="465" viewBox="0 0 233 465" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0480119 368.998C17.448 418.998 66.748 457.698 119.048 464.198C175.948 471.198 228.148 419.998 221.548 362.998C214.448 300.998 157.148 266.298 127.548 215.998C113.348 191.798 106.748 164.398 114.848 136.898C122.948 109.398 142.548 86.2978 165.848 70.0978C192.548 51.5978 223.848 42.0978 255.748 37.0978C286.348 32.2978 320.048 34.3978 348.348 20.1978C354.548 17.0978 360.248 11.3978 365.348 6.69777C369.248 2.99777 363.648 -2.20223 359.648 0.99777C353.748 5.59777 346.948 7.99777 340.148 10.7978C333.448 13.5978 326.548 15.5978 319.548 17.0978C304.248 20.3978 288.348 20.8978 272.848 22.6978C240.648 26.3978 208.648 32.8978 179.648 47.7978C130.748 72.7978 89.348 124.698 101.148 182.398C106.548 208.698 121.948 231.698 138.548 252.298C156.648 274.598 178.348 294.098 193.148 318.898C208.548 344.698 216.448 375.698 204.348 404.398C194.148 428.498 172.348 447.598 147.148 454.498C120.848 461.798 92.4479 454.198 68.8479 441.898C44.6479 429.198 23.948 409.798 10.048 386.198C6.74801 380.498 3.74801 374.598 1.04801 368.598C0.948012 367.698 -0.251988 368.198 0.0480119 368.998Z" fill="#FFADF2"/>
                </svg>
            </div>
            <div onTouchEnd={(e:React.TouchEvent<HTMLDivElement>)=>leftorright(e)} ref={carousel} className="h-[600px] xs:hidden w-full max-w-[440px] scroll-smooth relative overflow-hidden flex">
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
            <div className="absolute flex gap-1 left-1/2 -translate-x-1/2 bottom-5 xs:hidden">
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
            <div className="hidden xs:flex lg:pr-20 pr-4 w-full h-full items-center justify-end">
                <div className="noto absolute -z-10 lg:left-20 left-5 text-[40px] md:text-[60px] opacity-70 text-black">
                    <p>LUXURY</p>
                    <p className="pl-8">FASHION</p>
                    <p>&ACCESSORIES</p>
                </div>
                <div><Image className="h-[600px] object-cover z-10" src={`${url}Bitmap5.png`} width={400} height={600} alt="bitmap_png"/></div>
            </div>
        </div>
     );
}
 
export default Carousel;
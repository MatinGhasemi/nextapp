"use client"
// import axios from "axios";
// import { GetServerSideProps } from "next";
// import RecipeType from "@/app/interfaces/recipes";

// const fetchData = async (id:string): Promise<RecipeType> =>{
//     const response = await axios.get(`http://api.recipeapp.soroushsalari.com/recipes/recipes/${id}`);
//     if (response.status===200)
//         return response.data
//     else 
//         throw new Error("failed to fetch data")
// }
import { useEffect, useRef, useState } from "react";

import url from "@/app/production";
import Related from "@/app/components/related";
import valueType from "@/app/interfaces/relatedValue";
import LightNavbar from "@/app/components/lightNavbar";


const Product = () => {
    const values:valueType[] = [
        {src:`${url}ring1.png`,text:"21WN",price:120,heart:true},
        {src:`${url}Rectangle 344.png`,text:"21WN",price:120,heart:true},
        {src:`${url}ring2.png`,text:"21WN",price:120,heart:true},
        {src:`${url}ring3.png`,text:"21WN",price:120,heart:true}
    ]
    // const { id } = await params
    // const data = await fetchData(id)
    const slider = useRef<HTMLDivElement|null>(null);
    const refresh = useRef<SVGSVGElement|null>(null);
    const shipping = useRef<SVGSVGElement|null>(null);
    const tag = useRef<SVGSVGElement|null>(null);

    const [w,setW] = useState(384);

    useEffect(()=>{
        if (window.innerWidth < 384)
            setW(window.innerWidth)
        else setW(384)
    },[])

    const readShipping = (e:React.MouseEvent<HTMLDivElement>)=>{
        if (shipping.current){
            if (e.currentTarget.offsetHeight < 50){
                e.currentTarget.style.height = "89px";
                shipping.current.style.rotate = "180deg";
            }else{
                e.currentTarget.style.height = "37px";
                shipping.current.style.rotate = "0deg";
                
            }
        }
    }
    const readRefresh = (e:React.MouseEvent<HTMLDivElement>)=>{
        if (refresh.current){
            if (e.currentTarget.offsetHeight < 50){
                e.currentTarget.style.height = "89px";
                refresh.current.style.rotate = "180deg";
            }else{
                e.currentTarget.style.height = "40px";
                refresh.current.style.rotate = "0deg";
            }
        }
    }
    const readTag = (e:React.MouseEvent<HTMLDivElement>)=>{
        if (tag.current){
            if (e.currentTarget.offsetHeight < 50){
                e.currentTarget.style.height = "89px";
                tag.current.style.rotate = "180deg";
            }else{
                e.currentTarget.style.height = "40px";
                tag.current.style.rotate = "0deg";
            }
        }
    }

    const first = (e:React.MouseEvent<HTMLImageElement>)=>{
        document.querySelector(".active")?.classList.remove("active");
        e.currentTarget.classList.add("active")
        if (slider.current)
            slider.current.scrollLeft = 0 ;
    }
    const second = (e:React.MouseEvent<HTMLImageElement>)=>{
        document.querySelector(".active")?.classList.remove("active");
        e.currentTarget.classList.add("active")
        if (slider.current)
            slider.current.scrollLeft = w ;
    } 
    const third = (e:React.MouseEvent<HTMLImageElement>)=>{
        document.querySelector(".active")?.classList.remove("active");
        e.currentTarget.classList.add("active")
        if (slider.current)
            slider.current.scrollLeft = w*2 ;
    }
    const forth = (e:React.MouseEvent<HTMLImageElement>)=>{
        document.querySelector(".active")?.classList.remove("active");
        e.currentTarget.classList.add("active")
        if (slider.current)
            slider.current.scrollLeft = w*3 ;
    }


    

    return (<>
        <LightNavbar />
        <div className="bg-white">
            <div>
                <div className="xl:flex">
                    <div className="flex flex-col items-center justify-center md:flex-row md:gap-6 lg:px-10 lg:gap-24 lg:justify-start">
                        <div className="sm:flex sm:divide-x-2">
                            <div ref={slider} className="overflow-hidden max-w-96 flex scroll-smooth">
                                <div><img style={{minWidth:`${w}px`}} className="h-full object-cover" src={`${url}image 15.png`} alt="ring" /></div>
                                <div><img style={{minWidth:`${w}px`}} className="h-full object-cover" src={`${url}Rectangle 430.png`}/></div>
                                <div><img style={{minWidth:`${w}px`}} className="h-full object-cover" src={`${url}Rectangle 431.png`}/></div>
                                <div><img style={{minWidth:`${w}px`}} className="h-full object-cover" src={`${url}image 17.png`}/></div>
                            </div>
                            <div className="flex justify-center sm:flex-col">
                                <div className="w-1/4 sm:w-28 h-20 sm:h-full active">
                                    <img onClick={e=>first(e)} className="w-full sm:min-w-28 h-full object-cover" src={`${url}image 15.png`} alt="" />
                                </div>
                                <div className="w-1/4 sm:w-28 h-20 sm:h-full">
                                    <img onClick={e=>second(e)} className="w-full sm:min-w-28 h-full object-cover" src={`${url}Rectangle 430.png`} alt="" />
                                </div>
                                <div className="w-1/4 sm:w-28 h-20 sm:h-full">
                                    <img onClick={e=>third(e)} className="w-full sm:min-w-28 h-full object-cover" src={`${url}Rectangle 431.png`} alt="" />
                                </div>
                                <div className="w-1/4 sm:w-28 h-20 sm:h-full">
                                    <img onClick={e=>forth(e)} className="w-full sm:min-w-28 h-full object-cover" src={`${url}image 17.png`} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="px-2 mt-10">
                            <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <p className="tracking-widest">MOHAN</p>
                                    <div>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.8177 4L8.15108 0.666667L4.48442 4" stroke="#333333"/>
                                            <line y1="-0.5" x2="8.66667" y2="-0.5" transform="matrix(0 1 1 0 8.48438 0.666748)" stroke="#333333"/>
                                            <path d="M2.48438 8V14.6667H13.8177V8" stroke="#333333"/>
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-background">Recycle Boucle Knit Cardigan Pink</p>
                                <p className="text-price text-2xl font-light">$120</p>
                            </div>
                            <div className="flex gap-2 my-4">
                                <p className="mr-2">Ring Size</p>
                                <div className="font-light text-sm flex gap-1">
                                    <div className="w-7 h-7 flex justify-center items-center rounded-full bg-background text-foreground">6</div>
                                    <div className="w-7 h-7 flex justify-center items-center rounded-full border bg-foreground text-background">8</div>
                                    <div className="w-7 h-7 flex justify-center items-center rounded-full border bg-foreground text-background">9</div>
                                    <div className="w-7 h-7 flex justify-center items-center rounded-full border bg-foreground text-background">10</div>
                                    <div className="w-7 h-7 flex justify-center items-center rounded-full border bg-foreground text-background">11</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black text-foreground w-full xl:w-72 m-auto xl:rounded-xl">
                        <div className="h-14 flex justify-between items-center px-2">
                            <div className="flex items-center gap-2">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2.80835V17.8083" stroke="#FCFCFC"/>
                                    <path d="M2.5 10.3083H17.5" stroke="#FCFCFC"/>
                                </svg>
                                <p className="font-light">ADD TO BASKET</p>
                            </div>
                            <div>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.77216 4.59638C0.40928 6.95925 0.409282 10.7902 2.77216 13.1531L11.937 22.3179L12 22.255L12.0631 22.318L21.2279 13.1532C23.5908 10.7903 23.5908 6.95933 21.2279 4.59645C18.865 2.23358 15.034 2.23358 12.6712 4.59645L12.3536 4.914C12.1584 5.10927 11.8418 5.10927 11.6465 4.914L11.3289 4.59638C8.96601 2.2335 5.13503 2.2335 2.77216 4.59638Z" stroke="#F9F9F9"/>
                                </svg>
                            </div>
                        </div>
                        <div className="hidden xl:block px-4 pb-4">this is Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quasi, asperiores ex veniam quo architecto commodi. Veniam dolor, nulla reprehenderit quae tempora omnis facilis doloremque in odio eligendi quam maiores!</div>
                    </div>
                </div>
                <div className="mt-6 px-2 sm:px-0">
                    <p className="mb-2 mt-10 pl-2 font-light tracking-wide">GALLERY</p>
                    <div className="sm:flex items-center justify-evenly">
                        <div><img className="w-full" src={`${url}image 16.png`} /></div>
                        <div><img className="w-full" src={`${url}image 17.png`} /></div>
                        <div><img className="w-full" src={`${url}image 18.png`} /></div>
                    </div>
                    <div className="px-2 max-w-[700px] mx-auto">
                        <p className="my-4">CARE</p>
                        <div className="px-4">
                            <div onClick={e=>readShipping(e)} style={{height:"89px"}} className="text-background transition-all overflow-hidden py-2">
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <img src={`${url}Truck.svg`} />
                                        <p className="text-nowrap">Free Flat Rate Shipping</p>
                                    </div>
                                    <div>
                                        <svg ref={shipping} style={{rotate:"180deg"}} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5">
                                            <path d="M19 9.35352L12.0368 16.3167L5.07366 9.35352" stroke="#14142B"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <p className="pl-7 opacity-70">
                                Estimated to be delivered on<br />09/11/2021 - 12/11/2021.
                                </p>
                            </div>
                            <div onClick={e=>readTag(e)} style={{height:'40px'}} className="text-background transition-all overflow-hidden py-2 border-t-2">
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <img src={`${url}Tag.svg`} />
                                        <p className="text-nowrap">COD Policy</p>
                                    </div>
                                    <div>
                                        <svg ref={tag} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5">
                                            <path d="M19 9.35352L12.0368 16.3167L5.07366 9.35352" stroke="#14142B"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <p className=" pl-7 opacity-70">
                                Estimated to be delivered on<br />09/11/2021 - 12/11/2021.
                                </p>
                            </div>
                            <div onClick={e=>readRefresh(e)} style={{height:'40px'}} className="text-background transition-all overflow-hidden py-2 border-t-2">
                                <div className="flex justify-between">
                                    <div className="flex gap-2">
                                        <img src={`${url}Refresh.svg`} />
                                        <p className="text-nowrap">Return Policy</p>
                                    </div>
                                    <div>
                                        <svg ref={refresh} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5">
                                            <path d="M19 9.35352L12.0368 16.3167L5.07366 9.35352" stroke="#14142B"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <p className=" pl-7 opacity-70">
                                Estimated to be delivered on<br />09/11/2021 - 12/11/2021.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-10">
                    <div className="flex justify-center gap-5 font-light text-2xl">
                        <p>YOU</p>
                        <p>MAY</p>
                        <p>ALSO</p>
                        <p>LIKE</p>
                    </div>
                    <div className="flex justify-center mt-2">
                        <img src={`${url}8.png`} />
                    </div>
                    <div className="mb-4">
                        <Related src={values}/>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
 
export default Product;
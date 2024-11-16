"use client";
import { useEffect, useRef, useState } from "react";

import MenuComponent from "./menuComponent";
import SocialMedia from "./socialmedia";

const Navbar = () => {
    const [w,setW] = useState(384);

    useEffect(()=>{
        setW(window.innerWidth);
    },[])

    const rightBar = useRef<HTMLDivElement|null>(null);
    const woman = useRef<HTMLDivElement|null>(null);
    const man = useRef<HTMLDivElement|null>(null);
    const kid = useRef<HTMLDivElement|null>(null);
    const navlinks = [woman,man,kid]
    const scroller = useRef<HTMLDivElement|null>(null);

    const openBar = ()=>{
        if (rightBar.current)
            rightBar.current.style.left = "0";
    }
    const closeBar = ()=>{
        if(rightBar.current)
            rightBar.current.style.left = `-${w}px`;
    }

    const disableAll = ()=>{
        navlinks.forEach((el)=>{
            el.current?.classList.remove("bg-price");
            el.current?.classList.add("bg-gray-600");
        })
    }
    const openWoman = ()=>{
        if (scroller.current){
            disableAll()
            woman.current?.classList.remove("bg-gray-600");
            woman.current?.classList.add("bg-price");
            scroller.current.scrollLeft = 0;
        }
    }
    const openMan = ()=>{
        if (scroller.current){
            disableAll()
            man.current?.classList.remove("bg-gray-600");
            man.current?.classList.add("bg-price");
            scroller.current.scrollLeft = 320
        }
    }
    const openKid = ()=>{
        if (scroller.current){
            disableAll()
            kid.current?.classList.remove("bg-gray-600");
            kid.current?.classList.add("bg-price");
            scroller.current.scrollLeft = 640;
        }
    }

    return (<>    
        <div style={{left:`-${w}px`,width:`${w}px`}} id="rightbar" className="fixed h-full bg-background top-0 bottom-0 z-50 text-foreground transition-all duration-300 p-4" ref={rightBar}>
            <div>
                <svg onClick={closeBar} style={{rotate:'45deg'}} width="25" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2.80835V17.8083" stroke="#FCFCFC"/>
                <path d="M2.5 10.3083H17.5" stroke="#FCFCFC"/>
                </svg>
            </div>
            <div className="my-6">
                <div className="flex gap-10 max-w-80">
                    <span onClick={openWoman} className="tracking-widest w-1/3">WOMEN</span>
                    <span onClick={openMan} className="tracking-widest w-1/3">MAN</span>
                    <span onClick={openKid} className="tracking-widest w-1/3">KIDS</span>
                </div>
                <div className="flex max-w-80">
                    <div ref={woman} className="w-1/3 h-[1px] bg-price"></div>
                    <div ref={man} className="w-1/3 h-[1px] bg-gray-600"></div>
                    <div ref={kid} className="w-1/3 h-[1px] bg-gray-600"></div>
                </div>
            </div>
            <div ref={scroller} className="text-xl scroll-smooth w-80 overflow-hidden flex">
                <MenuComponent func={closeBar}/>
                <MenuComponent func={closeBar}/>
                <MenuComponent func={closeBar}/>
            </div>
            <div>
            <div className="my-10 space-y-4 px-2">
                <a href="tel:09107654010" className="flex gap-3 items-center">
                    <svg width="25" height="25" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.296 0.718169L21.6599 1.42528C21.6599 1.42528 22.367 7.78924 15.296 14.8603C8.22491 21.9314 1.85957 21.2256 1.85957 21.2256L1.15246 14.8617L6.10359 12.0333L8.57777 14.5074C8.57777 14.5074 10.3455 14.1539 12.4669 12.0326C14.5882 9.91125 14.9417 8.14348 14.9417 8.14348L12.4675 5.66929L15.296 0.718169Z" stroke="#F9F9F9"/>
                    </svg>
                    <p>+98 910 765 4010</p>
                </a>
                <div className="flex gap-3 items-center">
                    <svg width='25' height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" stroke="#F9F9F9" strokeWidth="1" strokeLinecap="round"></path> <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#F9F9F9" strokeWidth="1" strokeLinecap="round"></path> </g></svg>
                    <a href="https://royalsite.org" target="_blank">Royalsite.org</a>
                </div>
            </div>
            <div className="flex justify-center mb-8">
                <img src="/8.png" />
            </div>
            <SocialMedia color="#F9F9F9"/>
        </div>
        </div>
        <div className="max-w-96 mx-auto px-3 h-16 grid grid-cols-3 items-center">
            <div className="">
                <svg onClick={openBar} width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1366 12.3989L16.8122 12.3989" stroke="#F9F9F9"/>
                <path d="M1.13647 5.39893L24.523 5.39893" stroke="#F9F9F9"/>
                <path d="M1.13647 19.3989L24.523 19.3989" stroke="#F9F9F9"/>
                </svg>
            </div>
            <div className="mx-auto text-foreground text-right leading-none italianno text-2xl">
                <p>Open</p>
                <p>Fashion</p>
            </div>
            <div className="ml-auto flex gap-3">
                <div>
                    <svg  width="23" height="23" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z" stroke="#F9F9F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.029 16.5295L19.5 19.0005" stroke="#F9F9F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div>
                    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.5285 6C16.5098 5.9193 16.4904 5.83842 16.4701 5.75746C16.2061 4.70138 15.7904 3.55383 15.1125 2.65C14.4135 1.71802 13.3929 1 12 1C10.6071 1 9.58648 1.71802 8.88749 2.65C8.20962 3.55383 7.79387 4.70138 7.52985 5.75747C7.50961 5.83842 7.49016 5.9193 7.47145 6H5.8711C4.29171 6 2.98281 7.22455 2.87775 8.80044L2.14441 19.8004C2.02898 21.532 3.40238 23 5.13777 23H18.8622C20.5976 23 21.971 21.532 21.8556 19.8004L21.1222 8.80044C21.0172 7.22455 19.7083 6 18.1289 6H16.5285ZM8 11C8.57298 11 8.99806 10.5684 9.00001 9.99817C9.00016 9.97438 9.00044 9.9506 9.00084 9.92682C9.00172 9.87413 9.00351 9.79455 9.00718 9.69194C9.01451 9.48652 9.0293 9.18999 9.05905 8.83304C9.08015 8.57976 9.10858 8.29862 9.14674 8H14.8533C14.8914 8.29862 14.9198 8.57976 14.941 8.83305C14.9707 9.18999 14.9855 9.48652 14.9928 9.69194C14.9965 9.79455 14.9983 9.87413 14.9992 9.92682C14.9996 9.95134 14.9999 9.97587 15 10.0004C15 10.0004 15 11 16 11C17 11 17 9.99866 17 9.99866C16.9999 9.9636 16.9995 9.92854 16.9989 9.89349C16.9978 9.829 16.9957 9.7367 16.9915 9.62056C16.9833 9.38848 16.9668 9.06001 16.934 8.66695C16.917 8.46202 16.8953 8.23812 16.8679 8H18.1289C18.6554 8 19.0917 8.40818 19.1267 8.93348L19.86 19.9335C19.8985 20.5107 19.4407 21 18.8622 21H5.13777C4.55931 21 4.10151 20.5107 4.13998 19.9335L4.87332 8.93348C4.90834 8.40818 5.34464 8 5.8711 8H7.13208C7.10465 8.23812 7.08303 8.46202 7.06595 8.66696C7.0332 9.06001 7.01674 9.38848 7.00845 9.62056C7.0043 9.7367 7.00219 9.829 7.00112 9.89349C7.00054 9.92785 7.00011 9.96221 7 9.99658C6.99924 10.5672 7.42833 11 8 11ZM9.53352 6H14.4665C14.2353 5.15322 13.921 4.39466 13.5125 3.85C13.0865 3.28198 12.6071 3 12 3C11.3929 3 10.9135 3.28198 10.4875 3.85C10.079 4.39466 9.76472 5.15322 9.53352 6Z" fill="#F9F9F9"/>
                    </svg>
                </div>
            </div>
        </div>
    </>);
}
 
export default Navbar;

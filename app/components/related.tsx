import Link from "next/link";
import valueType from "../interfaces/relatedValue";


const Related = ({src}:{src:valueType[]}) => {
    const fillHeart = (e:React.MouseEvent<SVGSVGElement>)=>{
        if (e.currentTarget.getAttribute("fill") === "none")
            e.currentTarget.setAttribute("fill","#DD8560");
        else 
            e.currentTarget.setAttribute("fill","none");
    }

    return ( 
        <div className="grid grid-cols-2 xs:flex xs:flex-wrap xs:justify-center md:gap-5 lg:gap-12 xl:gap-20 gap-2 px-2 py-8">
            {src.map((product,i)=>{
                return (
                    <div key={i}>
                        <div className="relative h-64">
                            <Link href='/products/product'>
                                <img className="w-full h-64" src={product.src} />
                            </Link>
                            {
                            product.heart ? 
                            <svg onClick={e=>{fillHeart(e)}} className="z-20 absolute bottom-3 right-3" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.77216 4.59638C0.40928 6.95925 0.409282 10.7902 2.77216 13.1531L11.937 22.3179L12 22.255L12.0631 22.318L21.2279 13.1532C23.5908 10.7903 23.5908 6.95933 21.2279 4.59645C18.865 2.23358 15.034 2.23358 12.6712 4.59645L12.3536 4.914C12.1584 5.10927 11.8418 5.10927 11.6465 4.914L11.3289 4.59638C8.96601 2.2335 5.13503 2.2335 2.77216 4.59638Z" stroke="#DD8560"/>
                            </svg>
                            :    
                            <></>
                            }
                        </div>
                        <p>{product.text}</p>
                        <p className="text-neutral-500 font-light text-sm">reversible angora cardigan</p>
                        <p className="text-price">${product.price}</p>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Related;
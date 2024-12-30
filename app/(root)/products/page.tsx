'use client'
import LightNavbar from "@/app/components/lightNavbar";
import Related from "@/app/components/related";
import valueType from "@/app/interfaces/relatedValue";
import url from "@/app/production";

const Products = () => {
    const products:valueType[] = [
        {src:`${url}ring1.png`,text:"21WN",price:120,heart:true},
        {src:`${url}Rectangle 344.png`,text:"21WN",price:120,heart:true},
        {src:`${url}ring2.png`,text:"21WN",price:120,heart:true},
        {src:`${url}ring3.png`,text:"21WN",price:120,heart:true},
        {src:`${url}ring1.png`,text:"21WN",price:120,heart:true},
        {src:`${url}Rectangle 344.png`,text:"21WN",price:120,heart:true},
        {src:`${url}ring2.png`,text:"21WN",price:120,heart:true},
        {src:`${url}ring3.png`,text:"21WN",price:120,heart:true}
    ]

    return (<>
        <LightNavbar />
        <div className="px-4">
            <div className="flex h-14 items-center justify-between xs:px-4 sm:pr-8">
                <div className="text-background">4500 APPAREL</div>
                <div className="flex gap-4 items-center">
                    <div>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                            <path d="M10.1709 14.2729H16.6473" stroke="#14142B"/>
                            <path d="M10.1902 5.93958H16.6666" stroke="#14142B"/>
                            <rect x="2.17761" y="3.06879" width="5.66667" height="5.66667" stroke="#14142A"/>
                            <rect x="2.17761" y="11.4515" width="5.66667" height="5.66667" stroke="#14142A"/>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <svg width="16" height="10" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.356232V1.18957H15.5V0.356232H0.5ZM6.33333 7.85623H9.66667V7.0229H6.33333V7.85623ZM13 4.5229H3V3.68956H13V4.5229Z" fill="#DD8560"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex gap-1 text-gray-500">
                <p className="px-4 py-1 border-2 rounded-2xl">All Rings &times;</p>
                <p className="px-4 py-1 border-2 rounded-2xl">Products &times;</p>
            </div>
            <div>
                <Related src={products}/>
            </div>
            <div className="mb-5 mt-10 flex justify-center items-center gap-4">
                <div className="w-8 h-8 text-center rounded-md text-foreground bg-background">1</div>
                <div className="w-8 h-8 text-center rounded-md text-background bg-indigo-100">2</div>
                <div className="w-8 h-8 text-center rounded-md text-background bg-indigo-100">3</div>
                <div className="w-8 h-8 text-center rounded-md text-background bg-indigo-100">4</div>
                <div className="w-8 h-8 text-center rounded-md text-background bg-indigo-100">5</div>
                <div className="-rotate-90">
                    <svg width="24" height="25" strokeWidth={3} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                    <path d="M19 9.35352L12.0368 16.3167L5.07366 9.35352" stroke="#343434"/>
                    </g>
                    </svg>
                </div>
            </div>
        </div>
     </>);
}
 
export default Products;
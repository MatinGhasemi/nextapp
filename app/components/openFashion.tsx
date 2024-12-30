import Image from "next/image";
import url from "../production";

const OpenFashion = () => {
    return ( 
        <div className="flex flex-col pt-10 items-center px-3">
            <div className="italianno text-3xl">
                <p className="text-right">Open</p>
                <p>Fashion</p>
            </div>
            <Image src={`${url}8.png`} width={100} height={20} alt="8_devider"/>
            <p className="font-serif mt-4 text-background text-lg">Making a luxurious lifestyle accessible for a generous group of women is our daily drive.</p>
            <div className="max-w-[800px] text-sm text-background grid grid-cols-2 sm:flex sm:flex-wrap lg:gap-20 justify-center py-5 gap-y-10 gap-x-4 px-2">
                <div className="w-52">
                    <div><Image className="w-10 h-8 mx-auto" src={`${url}Miroodles.png`} width={100} height={100} alt="rectangle1"/></div>
                    <p>Fast shipping. Free on orders over $25.</p>
                </div>
                <div className="w-52">
                    <div><Image className="w-10 h-8 mx-auto" src={`${url}Miroodles1.png`} width={100} height={100} alt="rectangle2"/></div>
                    <p>Sustainable process from start to finish.</p>
                </div>
                <div className="w-52">
                    <div><Image className="w-10 h-8 mx-auto" src={`${url}Miroodles2.png`} width={100} height={100} alt="rectangle3"/></div>
                    <p>Unique designs 
                    and high-quality materials.</p>
                </div>
                <div className="w-52">
                    <div><Image className="w-10 h-8 mx-auto" src={`${url}Miroodles3.png`} width={100} height={100} alt="rectangle4"/></div>
                    <p>Fast shipping. 
                        Free on orders over $25.</p>
                </div>
            </div>
            <div className="my-3">
                <Image src={`${url}line.png`} width={100} height={200} alt="rectangle5"/>
            </div>
        </div>
     );
}
 
export default OpenFashion;
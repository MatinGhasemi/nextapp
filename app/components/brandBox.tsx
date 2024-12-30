import Image from "next/image";
import url from "../production";

const BrandBox = () => {
    const brandSrc:{src:string}[] = [
        {src:'Burberry.png'},{src:'Catier.png'},{src:"Gucci.png"},
        {src:'Tiffany & Co.png'},{src:'Boss.png'},{src:'Prada.png'}
    ]
    
    return ( 
        <div className="flex flex-col items-center my-3">
            <Image className="mb-7" alt='8' width={100} height={400} src={`${url}8.png`}/>
            <div className="grid grid-cols-3 sm:flex md:gap-16 lg:gap-28 items-center gap-10 px-6">
                {brandSrc.map((img,i)=>{
                    return <div key={i}><Image className="w-16" alt={`img${i}`} width={100} height={400} src={url+img.src} /></div>
                })}
            </div>
            <Image className="mt-7" alt='2time8' width={100} height={400} src={`${url}8.png`}/>
        </div>
     );
}
 
export default BrandBox;
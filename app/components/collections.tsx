import Image from "next/image";

import url from '../production';
import Link from "next/link";

const Collection = () => {
    return (
        <Link href={'/collection'} className="sm:hidden">
        <div className="max-w-[440px] mx-auto my-5">
            <p className="text-center font-extralight text-2xl font-serif tracking-widest mb-4">COLLECTIONS</p>
            <div className="w-full h-60 relative">
                <Image src={`${url}image 12.png`} alt="black collection" width={600} height={200} />
                <div className="absolute bottom-20 right-1">
                    <Image className="absolute w-48" src={`${url}10.png`} width={80} height={80} alt="10"/>
                    <div className="text-center pt-3 z-10">
                      <p className="text-4xl italic text-white">October</p>
                      <p className="text-foreground text-sm font-light tracking-widest">COLLECTION</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
}
 
export default Collection;
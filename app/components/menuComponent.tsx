import Link from "next/link";

interface test{
    func:()=>void;
}

const MenuComponent:React.FC<test> = ({func}) => {
    const closeHegiht = '38px';
    const openHegiht = "170px";

    const readItem = (e:React.MouseEvent<HTMLDivElement>)=>{
        const subject = document.querySelector(`.${e.currentTarget.dataset.name}`) as HTMLElement ;
    
        if (e.currentTarget.offsetHeight < 45){
            e.currentTarget.style.height = openHegiht;
            subject.style.rotate = "180deg";
        }else{
            e.currentTarget.style.height = closeHegiht;
            subject.style.rotate = "0deg";
        }
    }

    return (
    <div className="min-w-80 w-80">
        <div data-name="new" onClick={e=>readItem(e)} style={{height:closeHegiht}} className="overflow-hidden transition-all">
            <div className="flex justify-between">
                <p>New</p>
                <svg className="new" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                <path d="M19 9.35352L12.0368 16.3167L5.07366 9.35352" stroke="#F9F9F9"/>
                </g>
                </svg>
            </div>
            <div className="text-lg space-y-4 mt-2">
                <div className="pl-4"><Link onClick={()=>func()} href="/collection">October Collection</Link></div>
                <div className="pl-4"><Link onClick={()=>func()} href="/collection">Black Collection</Link></div>
                <div className="pl-4"><Link onClick={()=>func()} href="/blog">Blog</Link></div>
            </div>
        </div>
        <div data-name="apparel" onClick={e=>readItem(e)} style={{height:closeHegiht}} className="overflow-hidden transition-all">
            <div className="flex justify-between">
                <p>Apparel</p>
                <svg className="apparel" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                <path d="M19 9.35352L12.0368 16.3167L5.07366 9.35352" stroke="#F9F9F9"/>
                </g>
                </svg>
            </div>
            <div className="text-lg space-y-4 mt-2">
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>Dress</Link></div>
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>T-shirt</Link></div>
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>Pants</Link></div>
            </div>
        </div>
        <div data-name="bag" onClick={e=>readItem(e)} style={{height:closeHegiht}} className="overflow-hidden transition-all">
            <div className="flex justify-between">
                <p>Bag</p>
                <svg className="bag" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                <path d="M19 9.35352L12.0368 16.3167L5.07366 9.35352" stroke="#F9F9F9"/>
                </g>
                </svg>
            </div>
            <div className="text-lg space-y-4 mt-2">
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>Hermès</Link></div>
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>Céline</Link></div>
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>Gucci</Link></div>
            </div>
        </div>
        <div data-name="shoes" onClick={e=>readItem(e)} style={{height:closeHegiht}} className="overflow-hidden transition-all">
            <div className="flex justify-between">
                <p>Shoes</p>
                <svg className="shoes" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                <path d="M19 9.35352L12.0368 16.3167L5.07366 9.35352" stroke="#F9F9F9"/>
                </g>
                </svg>
            </div>
            <div className="text-lg space-y-4 mt-2">
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>Tommy Hilfinger</Link></div>
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>Toe Warmers</Link></div>
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>Vans</Link></div>
            </div>
        </div>
        <div data-name="beauty" onClick={e=>readItem(e)} style={{height:closeHegiht}} className="overflow-hidden transition-all">
            <div className="flex justify-between">
                <p>Beauty</p>
                <svg className="beauty" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                <path d="M19 9.35352L12.0368 16.3167L5.07366 9.35352" stroke="#F9F9F9"/>
                </g>
                </svg>
            </div>
            <div className="text-lg space-y-4 mt-2">
                <div className="pl-4"><Link href="/products" onClick={()=>{func()}}>L&apos;Oréal</Link></div>
                <div className="pl-4"><Link href="/products" onClick={()=>{func()}}>Estée Lauder</Link></div>
                <div className="pl-4"><Link href="/products" onClick={()=>{func()}}>Johnson & Johnson</Link></div>
            </div>
        </div>
        <div data-name="accessories" onClick={e=>readItem(e)} style={{height:closeHegiht}} className="transition-all overflow-hidden">
            <div className="flex justify-between">
                <p>Accessories</p>
                <svg className="accessories" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                <path d="M19 9.35352L12.0368 16.3167L5.07366 9.35352" stroke="#F9F9F9"/>
                </g>
                </svg>
            </div>
            <div className="text-lg space-y-4 mt-2">
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>Alexander McQueen</Link></div>
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>Marc Jacobs</Link></div>
                <div className="pl-4"><Link href='/products' onClick={()=>{func()}}>Balenciaga</Link></div>
            </div>
        </div>
    </div>
    );
}
 
export default MenuComponent;
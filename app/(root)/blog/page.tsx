import Image from "next/image";

import LightNavbar from "@/app/components/lightNavbar";
import url from "@/app/production";
import BlogType from '@/app/interfaces/blog';

const Blog = () => {
    const blogPosts:BlogType[] = [
        {src:"post.png",text:"2024 Style Guide: The Biggest Fall Trends",hashtags:["Fashion","Tips","Promo"],days:4},
        {src:"post1.png",text:"2024 Style Guide: The Biggest Fall Trends",hashtags:["Fashion","Promo"],days:12},
        {src:"post2.png",text:"2024 Style Guide: The Biggest Fall Trends",hashtags:["Poclicy","Tips","Promo"],days:21},
        {src:"post3.png",text:"2024 Style Guide: The Biggest Fall Trends",hashtags:["Fashion","Lookbook","Tips"],days:27},
    ]

    return (<>
        <LightNavbar />
        <div className="">
            <div className="flex flex-col items-center my-8">
                <p className="font-extralight text-2xl">BLOG</p>
                <Image src={`${url}8.png`} width={100} height={20} alt="hr10" />
            </div>
            <div className="px-3 sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {blogPosts.map((post,i)=>{
                    return(
                        <div className="h-60 w-full mt-8" key={i}>
                            <div className="h-52 w-full relative">
                                <Image className="h-52" src={url + post.src} width={800} height={200} alt={`post${i}`} />
                                <div className="h-16 w-full blog-gradient absolute bottom-0 flex items-center px-4">
                                    <p className="text-foreground">{post.text}</p>
                                </div>
                            </div>
                            <div className="flex justify-between text-gray-400 mt-1 sm:px-2">
                                <div className="flex gap-4">
                                    {post.hashtags.map((tags,i)=>{
                                        return (
                                            <p key={i+blogPosts.length}>#{tags}</p>
                                        )
                                    })}
                                </div>
                                <p>{post.days} days ago</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <div className="h-12 w-56 mx-auto flex justify-center border-2 items-center my-6 gap-4">
                    <p className="tracking-wider">LOAD MORE</p>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2.80835V17.8083" stroke="#000000"/>
                        <path d="M2.5 10.3083H17.5" stroke="#000000"/>
                    </svg>
                </div>
            </div>
        </div>
     </>);
}
 
export default Blog;
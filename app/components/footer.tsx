import SocialMedia from "./socialmedia";

const Footer = () => {
    return ( 
        <div className="bg-white w-screen h-full">
            <div className="p-6 max-w-96 mx-auto">
                <SocialMedia color="#333333"/>
                <div className="flex justify-center my-4">
                    <img src="/nextapp/8.png" alt="" />
                </div>
                <div className="text-sm font-light text-center">
                    <p>royalsite.org@gmail.com</p>
                    <p>+98 910 765 4010</p>
                    <p>08:00 - 22:00 - Everyday</p>
                </div>
                <div className="flex justify-center my-4">
                    <img src="/nextapp/8.png" alt="" />
                </div>
                <div className="flex justify-between ">
                    <p>About</p>
                    <p>Contact</p>
                    <p>Blog</p>
                </div>
            </div>
            <div className="bg-[#C4C4C4] w-full flex justify-center items-center text-sm font-light h-11">
                <p>Copyright© Royalsite All Rights Reserved.</p>
            </div>
        </div>
     );
}
 
export default Footer;
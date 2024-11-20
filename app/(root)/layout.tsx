import React from "react";
import Navbar from "../components/darkNavbar";
import Footer from "../components/footer";


const Layout = ({children}:{children:React.ReactNode}) => {
    return (<>
        {children}
        <Footer />
    </> 
    );
}
 
export default Layout;
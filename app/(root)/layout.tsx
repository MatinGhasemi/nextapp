import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const Layout = ({children}:{children:React.ReactNode}) => {
    return (<>
        <Navbar />
        {children}
        <Footer />
    </> 
    );
}
 
export default Layout;
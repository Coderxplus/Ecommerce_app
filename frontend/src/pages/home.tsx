import { NavigationBar } from "../components/navbar";
import { MainSection } from "../components/mainsection";
import { FooterSection } from "../components/footer";
import { ProductProvider } from "../context/ProductProvider";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export function Home () {
    const user = useContext(AuthContext)
    
    return (
       <>
        <div className="fixed top-0 left-0 w-full z-50">
            <NavigationBar user={user}/>
        </div>

        <div className="pt-20"> {/* Adjust based on Navbar height */}
            <ProductProvider>
                <MainSection />
            </ProductProvider>
            
            <FooterSection />
        </div>
</>

    )
}
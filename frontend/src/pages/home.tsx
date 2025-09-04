import { NavigationBar } from "../components/navbar";
import { MainSection } from "../components/mainsection";
import { FooterSection } from "../components/footer";

export function Home () {

    return (
       <>
        <div className="fixed top-0 left-0 w-full z-50">
            <NavigationBar />
        </div>

        <div className="pt-20"> {/* Adjust based on Navbar height */}
            <MainSection />
            <FooterSection />
        </div>
</>

    )
}
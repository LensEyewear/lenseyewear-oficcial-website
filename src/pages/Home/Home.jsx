import BarInfos from "../../Components/BarInfos/BarInfos";
import { FeaturesHome } from "../../Components/FeaturesHome/FeaturesHome";
import { Footer } from "../../Components/Footer2/Footer";
import Navbar from "../../Components/NavBarTop/Navbar";
import { Newsletter } from "../../Components/Newsletter/Newsletter";
import { SliderHome } from "../../Components/SliderHome/SliderHome";
import "./home.css";

export function Home() {
    return (
        <div className="Home">
            <Navbar/>
            <SliderHome />
            <div className="SectionHome">
                <h3>MAIS VENDIDOS</h3>
            </div>
           <FeaturesHome />
            <div className="SectionHome">
                <h3>LANÇAMENTOS</h3>
            </div>
           <FeaturesHome />
           <BarInfos />
           <Newsletter />
            <Footer/>
        </div>
    )
}
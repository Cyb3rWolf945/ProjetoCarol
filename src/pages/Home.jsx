import CarrouselComments from "../components/CarrouselComments"
import HeroSection from "../components/HeroSection"
import ProductFeatures from "../components/ProductFeatures"

function Home() {
    return (
    <>
        <div className="flex flex-col gap-2">
            <HeroSection/>
            <CarrouselComments/>
            <ProductFeatures/>
        </div>
    </>)
}

export default Home
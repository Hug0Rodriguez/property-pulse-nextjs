import Hero from "@/components/Hero";
import InfoBoxes from "@/components/infoBoxes";
import HomeProperties from "@/components/HomeProperties";
import connectDB from "@/config/databse";

const HomePage = async () => {
    return (
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </>
    );
}

export default HomePage;

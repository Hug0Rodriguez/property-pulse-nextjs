import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
    title:'property pulse',
    keyword: 'rental, property, buy, sell, rent, real estate',
    description: 'Find the perfect rental property',
}
const MainLayout = ({ children }) => {
    return (
        <html>
            <body>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

export default MainLayout;

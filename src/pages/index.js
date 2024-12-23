import Jumbotron from "@/components/jumbotron";
import Footer from "@/components/footer";
import ThreeContainers from "@/components/categoryChoice";
import SearchBar from "@/components/searchBar";
import HeroSection from "@/components/hero";
import AllPlatform from "@/components/allPlatform";
import MostWatch from "@/components/mostWatch";
import FAQ from "@/components/litePengaduan";

export default function Home() {
    return (
        <div className="min-h-screen relative">
            <div className="fixed inset-0 bg-backgroundImg bg-no-repeat bg-cover"></div>
            <main className="relative flex flex-col items-center gap-2">
                <Jumbotron />
                <SearchBar placeholder="Cari pengaduan..." onSearch={(query) => console.log(query)} />
                <ThreeContainers />
                <MostWatch />
                <FAQ />
                <AllPlatform />
                <Footer />
            </main>
        </div>
    );
}
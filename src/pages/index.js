import Jumbotron from "@/components/jumbotron";
import Footer from "@/components/footer";
import ChoiceContainer from "@/components/choiceContainer";

export default function Home() {
    return (
        <div className="min-h-screen relative">
            <div className="fixed inset-0 bg-backgroundImg bg-no-repeat bg-cover"></div>
            <main className="relative flex flex-col items-center gap-2">
                <Jumbotron />
                <ChoiceContainer />
                <Footer />
            </main>
        </div>
    );
}
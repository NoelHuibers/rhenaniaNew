import Aktivenbilder from "~/components/aktivenbilder";
import Footer from "~/components/footer";
import Haus from "~/components/haus";
import Header from "~/components/header";
import MainSection from "~/components/mainsection";
import Veranstaltungen from "~/components/veranstaltungen";

export default function HomePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="w-screen">
        <MainSection />
        <Aktivenbilder />
        <Veranstaltungen />
        <Haus />
      </main>
      <Footer />
    </div>
  );
}

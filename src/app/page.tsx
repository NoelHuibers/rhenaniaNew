import Aktive from "~/components/landingpage/aktive";
import ContactUs from "~/components/landingpage/contactus";
import Footer from "~/components/footer/footer";
import Haus from "~/components/landingpage/haus";
import Header from "~/components/header/header";
import MainSection from "~/components/landingpage/mainsection";
import Veranstaltungen from "~/components/landingpage/veranstaltungen";

export default function HomePage() {
  return (
    <>
      <main className="flex w-screen flex-col">
        <div className="flex h-screen flex-col">
          <Header />
          <MainSection />
        </div>
        <Aktive />
        <Veranstaltungen />
        <Haus />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

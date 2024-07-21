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
        <div
          className="sticky top-0 h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url('/stifi.jpg')`,
          }}
        >
          <Header />
          <MainSection />
        </div>
        <div className="relative z-10 bg-white">
          <Aktive />
          <Veranstaltungen />
          <Haus />
          <ContactUs />
        </div>
      </main>
      <Footer />
    </>
  );
}

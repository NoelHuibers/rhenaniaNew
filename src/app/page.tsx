import Aktivenbilder from "~/components/aktivenbilder";
import ContactUs from "~/components/contactus";
import Footer from "~/components/footer";
import Haus from "~/components/haus";
import Header from "~/components/header";
import MainSection from "~/components/mainsection";
import Veranstaltungen from "~/components/veranstaltungen";

export default function HomePage() {
  return (
    <>
      <main className="flex w-screen flex-col">
        <div className="flex h-screen flex-col">
          <Header />
          <MainSection />
        </div>
        <Aktivenbilder />
        <Veranstaltungen />
        <Haus />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

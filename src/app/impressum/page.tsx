import FooterColored from "~/components/footercolored";
import HeaderColored from "~/components/headercolored";
import Impressum from "~/components/impressum";

export default function HomePage() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <HeaderColored />
      <main className="flex h-full w-full items-center justify-center bg-slate-100 dark:bg-gray-800 md:py-24 lg:py-32">
        <Impressum />
      </main>
      <FooterColored />
    </div>
  );
}

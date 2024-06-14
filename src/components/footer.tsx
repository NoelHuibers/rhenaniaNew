import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-4 py-6 dark:bg-gray-900 md:px-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 text-gray-500 dark:text-gray-400 md:mb-0">
          <div className="flex flex-row space-x-2">
            <p>Telefon:</p>
            <Link className="hover:underline" href="tel:+4971129738">
              +49 711 297308
            </Link>
          </div>
          <div className="flex flex-row space-x-2">
            <p>E-Mail:</p>
            <Link
              className="hover:underline"
              href="mailto:subsenior@rhenania-stuttgart.de"
            >
              subsenior@rhenania-stuttgart.de
            </Link>
          </div>
        </div>
        <Link
          className="text-gray-500 hover:underline dark:text-gray-400"
          href="/impressum"
        >
          Impressum
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

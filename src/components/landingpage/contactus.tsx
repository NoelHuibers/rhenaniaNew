import Link from "next/link";

const ContactUs = () => {
  return (
    <section
      className="flex h-screen w-full items-center justify-center bg-cover bg-center md:h-[60vh]"
      style={{
        backgroundImage: `url('/background.png')`,
      }}
    >
      <Link
        href="/contact"
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        prefetch={false}
      >
        Bewerb dich
      </Link>
    </section>
  );
};

export default ContactUs;

import ContactButton from "./contactbutton";

const ContactUs = () => {
  return (
    <section
      className="flex h-screen w-full items-center justify-center bg-cover bg-center md:h-[60vh]"
      style={{
        backgroundImage: `url('/background.png')`,
      }}
    >
      <ContactButton />
    </section>
  );
};

export default ContactUs;

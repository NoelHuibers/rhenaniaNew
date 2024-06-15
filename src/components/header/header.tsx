import HeaderContent from "./headercontent";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white">
      <HeaderContent />
    </header>
  );
};

export default Header;

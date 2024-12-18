import SocialLink from "./SocialLink";

const Header: React.FC = () => {
  return (
    <header className="bg-[#0c1425] text-white shadow-md sticky top-0 z-50"> 
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-300 transition duration-300 w-40 md:w-60 h-16 flex">
            <img
              src={`/images/watchglamixlogo.png`} // Replace with your actual image URL
              alt="Luxury Watch"
              className="max-w-full object-contain h-auto transform scale-105 hover:scale-110 transition duration-500"
            />
          </a>
        </div>

        {/* Social Links */} 
        <SocialLink />
      </div>
    </header>
  );
};

export default Header;

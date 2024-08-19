import logo from  "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black h-[85px] flex justify-center items-center rounded-t-xl text-white p-4">
        <div className="container mx-auto flex justify-around items-center">
          <div className="flex items-center text-lg">
            <img src={logo} alt="" className="mr-2" />
            <span className="font-medium">Abstract</span>
            <span className="mx-2">|</span>
            <span>Help Center</span>
          </div>
          <div>
            <button className="bg-black text-white border-2 border-gray-400 px-4 py-2 rounded hover:bg-white hover:text-black transition-colors">
              Submit a request
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

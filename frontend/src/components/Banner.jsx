 
import { IoIosArrowRoundForward } from "react-icons/io";

const Banner = ({setQuery}) => {
 
 
  return (
    <div>
      <div className="bg-[#DADBF0] h-[380px] flex items-center text-black py-6 px-4 rounded-b-xl">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-5xl mb-8 font-semibold capitalize">
            How can we help?
          </h1>
          <div className="relative w-full max-w-md  ">
            <input
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 text-gray-900 rounded  border border-black    pr-10"
            />
            <IoIosArrowRoundForward className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

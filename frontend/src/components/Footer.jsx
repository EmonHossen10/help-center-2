import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="  mx-auto flex gap-6 justify-around ">
        <div>
          <h4 className="text-lg font-bold mb-4">Abstract</h4>
          <p className="text-sm">Branches</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Release Note
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Community</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Linkedin
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dribble
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Podcast
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Legal
              </a>
            </li>
            <h4 className="text-lg font-bold pt-4">Contact Us</h4>
            <p className="font-bold">info@abstract.com</p>
          </ul>
        </div>
        <div>
          <img className="pt-40 " width={40} src={logo} alt="" />
          <small>
            <h2>©copyright2022</h2>
          </small>
          <small>
            <h2> Abstract Studio design, Inc. </h2>
          </small>
          <small>
            <h2>All rights reserved</h2>
          </small>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
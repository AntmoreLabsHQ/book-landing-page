import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Button from '../../base/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">Join Our Superhero Community!</h2>
          <p className="text-lg mb-4">Subscribe to our newsletter for the latest updates, exclusive content, and more!</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-l-md text-gray-900 focus:outline-none"
            />
            <Button className='bg-[#2a4dc1] text-white p-2 rounded-r-md hover:bg-[#173bb1] transition duration-300' label='Subscribe'/>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-[#173bb1] transition duration-300">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="#" className="hover:text-[#173bb1] transition duration-300">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="hover:text-[#173bb1] transition duration-300">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
          <a href="#" className="hover:text-[#173bb1] transition duration-300">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        <p className="text-center text-sm opacity-75">
          © {new Date().getFullYear()} Money Mania: Rise of Inflare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

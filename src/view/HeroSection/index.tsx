import bookCover from '../../assets/WhatsApp.jpg';
import cityImage from '../../assets/city.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import '../../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="text-white     mb-16 lg:mb-24 ">
      <div className="relative  lg:h-[900px] flex flex-col lg:flex-row w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden opacity-50 ">
          <img className="w-full h-full object-cover" src={cityImage} alt="Eurocoin Fincity" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Book Cover Section */}
        <div className="w-full mt-10 lg:w-1/2 z-10 flex flex-col items-center justify-center mb-8 lg:mb-0">
          <div className="w-full lg:w-auto shadow-lg">
            <img
              src={bookCover}
              alt="Money Mania Book Cover"
              className="h-[400px] sm:h-[500px] lg:h-[600px] mx-auto transform hover:rotate-3 transition-all duration-500"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 z-10  text-center lg:text-left flex flex-col justify-center lg:justify-between  gap-5 mt-8 lg:mt-0">
          {/* Animated Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-[#1948e2]">Money Mania:</span> Rise of Inflare
          </h1>

          {/* Book Description */}
          <p className="shine-text text-base sm:text-lg lg:text-2xl mb-6">
            In a world where wealth is power, heroes rise, and villains emerge. Brace yourself for an epic clash of extraordinary abilities and unstoppable ambition. Will the forces of good triumph, or will greed rule supreme?
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-[#2a4dc1] py-2 px-4 rounded-md shadow-lg text-white transition duration-300 animate-bounce">
              <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
              Pre Order Now
            </button>
            <button className="bg-transparent border-2 bg-[#2a4dc1] py-2 px-4 rounded-md shadow-lg hover:bg-[#2a4dc1] hover:border-[#2a4dc1] hover:text-white transition duration-300 animate-bounce">
              <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
              Discover the Heroes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

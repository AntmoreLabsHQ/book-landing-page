import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers, faShieldAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import heroImage from '../../assets/WhatsApp.jpg'; 
import {motion} from 'framer-motion';

const AboutBook: React.FC = () => {
  return (
    <motion.div initial={{ y: 10, scale: 0.5 }} whileInView={{ y: 0, scale: 1 }} transition={{ duration: 1 }} className="text-white  px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24" >
      <div className="  mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-500">
            About <span className="text-white">Money Mania: The Rise of Inflare</span>
          </h2>
          <p className="text-lg mt-4">
            Discover the world of <span className="font-bold">heroes</span> and <span className="font-bold">villains</span> as they navigate a society driven by wealth and power.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faBook} className="text-4xl text-green-400" />
              <div>
                <h3 className="text-xl font-bold">A Story of Power and Greed</h3>
                <p className="text-gray-300">
                  Explore a gripping tale where wealth is the ultimate power, and heroes must rise against unimaginable forces.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faUsers} className="text-4xl text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold">A Diverse Cast of Characters</h3>
                <p className="text-gray-300">
                  Meet a variety of heroes and villains, each with their own unique motivations, strengths, and weaknesses.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">Battles That Will Define the Future</h3>
                <p className="text-gray-300">
                  Witness epic confrontations between super-powered individuals that will shape the fate of Eurocoin Fincity.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faGlobe} className="text-4xl text-red-400" />
              <div>
                <h3 className="text-xl font-bold">A World Like No Other</h3>
                <p className="text-gray-300">
                  Set in a futuristic, dystopian world where the economy and superpowers collide in unexpected ways.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <img
              src={heroImage} 
              alt="Book Graphic"
              className="h-[600px] rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
            />
            <div className="absolute top-0 left-0 w-16 h-16 bg-green-400 rounded-full opacity-75 animate-bounce"></div>
            <div className="absolute bottom-8 right-12 w-12 h-12 bg-yellow-400 rounded-full opacity-75 animate-bounce"></div>
            <div className="absolute top-12 right-0 w-10 h-10 bg-blue-400 rounded-full opacity-75 animate-bounce"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutBook;

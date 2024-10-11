import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faSkullCrossbones, faFire, faBolt } from '@fortawesome/free-solid-svg-icons';
import c2 from '../../assets/c2.jpg';
import c3 from '../../assets/c3.jpg';
import c4 from '../../assets/c4.jpg';
import c5 from '../../assets/c5.jpg';
import { motion } from 'framer-motion';

interface Character {
  name: string;
  role: string;
  icon: any;
  description: string;
  imageUrl: string;
}

const Character: React.FC = () => {
  const characters: Character[] = [
    {
      name: 'Inflare',
      role: 'Hero',
      icon: faFire,
      description: 'A fiery superhero with the ability to control and manipulate flames at will.',
      imageUrl: c4,
    },
    {
      name: 'Crypton',
      role: 'Villain',
      icon: faSkullCrossbones,
      description: 'A cunning villain who deals in the black market of crypto weapons and dark tech.',
      imageUrl: c2,
    },
    {
      name: 'PowerFlux',
      role: 'Hero',
      icon: faBolt,
      description: 'A hero with the ability to absorb and redirect energy into powerful blasts.',
      imageUrl: c3,
    },
    {
      name: 'Dark Shield',
      role: 'Villain',
      icon: faShieldAlt,
      description: 'A tactical mastermind with an impenetrable shield and dangerous battle skills.',
      imageUrl: c5,
    },
  ];

  return (
    <motion.div
      initial={{ y: 10, scale: 0.5 }}
      whileInView={{ y: 0, scale: 1 }}
      transition={{ duration: 1 }}
      className="px-8 py-16"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12">Meet the Heroes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {characters.map((character, index) => (
          <div
            key={index}
            className="relative group bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <img
              src={character.imageUrl}
              alt={character.name}
              className="absolute top-0 left-0 inset-0 w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative z-10 p-6 h-[500px] flex flex-col justify-end items-center text-center bg-gradient-to-t from-black to-transparent">
              <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FontAwesomeIcon icon={character.icon} size="3x" className="text-indigo-500" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{character.name}</h3>
              <p className="text-indigo-400 text-lg mb-2">{character.role}</p>
              <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {character.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Character;

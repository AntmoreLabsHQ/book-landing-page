// AuthorSection.js

import authorImage from "../../assets/author.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";
const AboutAuthor: React.FC = () => {
  return (
    <section className="relative  text-white py-16">
      <div className="absolute inset-0 top-0 left-0 opacity-20">
        {/* <img src={heroBackground} alt="Background" className="object-cover w-full h-full" /> */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Author Image */}
          <motion.div
            initial={{ x: -100, scale: 0.5 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="h-[600px] mb-8 md:mb-0 shadow-2xl"
          >
            <img
              src={authorImage}
              alt="Author"
              className="abosolute h-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Author Information */}
          <motion.div
            initial={{ x: 100, scale: 0.5 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 md:pl-10"
          >
            <h2 className="text-4xl font-bold mb-4">
              Meet the <span className="text-[#2a4dc1]">Author</span>
            </h2>
            <p className="text-lg mb-4">
              A visionary storyteller who weaves tales of heroes and legends,
              the author brings life to vibrant characters that leap off the
              pages. Inspired by the essence of anime and superhero narratives,
              each work is an invitation to adventure.
            </p>
            <p className="text-lg mb-4">
              With their debut novel capturing the hearts of readers, this
              author continues to explore realms where imagination knows no
              bounds. Join them in discovering stories that empower, inspire,
              and ignite the imagination!
            </p>
            <p className="text-lg mb-4">
              <strong>Connect with them:</strong>
            </p>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2a4dc1] hover:text-[#173bb1]transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2a4dc1] hover:text-[#173bb1]transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2a4dc1] hover:text-[#173bb1] transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;

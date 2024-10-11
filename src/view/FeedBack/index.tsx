import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import '../../styles/FaqSection.css';

const FeedBack: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative bg-gray-900 py-16 text-white">
     

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Share Your Feedback
        </motion.h2>

        {/* Feedback Form */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Star Rating */}
            <div className="flex justify-center items-center mb-6">
              <p className="mr-4 text-lg">Rate the Book:</p>
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(ratingValue)}
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={`text-3xl ${
                        ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-500'
                      }`}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Feedback Text Area */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <textarea
                className="w-full h-32 p-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a4dc1]"
                placeholder="Write your feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-[#2a4dc1] py-3 rounded-md text-gray-900 font-bold hover:bg-[#1c44c5] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Submit Feedback
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="text-center bg-green-600 p-6 rounded-lg shadow-lg max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Thank you for your feedback!</h3>
            <p>Your feedback has been successfully submitted.</p>
          </motion.div>
        )}
      </div>

      {/* Floating Superhero-Themed Icons */}
      <motion.div
        className="absolute top-10 left-10 z-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <svg width="50" height="50" fill="currentColor" className="text-yellow-400">
          <circle cx="25" cy="25" r="20" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 z-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <svg width="50" height="50" fill="currentColor" className="text-yellow-400">
          <rect width="40" height="40" x="5" y="5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default FeedBack;

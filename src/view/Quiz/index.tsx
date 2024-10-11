import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import quizImage from '../../assets/city.jpg';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "Who is the main hero in the book?",
    options: ["Hero X", "Hero Y", "Hero Z", "Hero A"],
    correctAnswer: "Hero X",
  },
  {
    question: "What is the name of the villain's secret weapon?",
    options: ["Doom Sword", "Chaos Crystal", "Dark Saber", "Nightmare Orb"],
    correctAnswer: "Chaos Crystal",
  },
  {
    question: "Which city does the final battle take place in?",
    options: ["Metropolis", "Gotham", "City of Hope", "Shadowland"],
    correctAnswer: "City of Hope",
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <section className="relative bg-gray-900 py-16 text-white">
      <div className="absolute inset-0 opacity-30 z-0">
        <img src={quizImage} alt="Quiz Background" className="w-full h-full object-cover" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Test Your Knowledge!
        </motion.h2>

        {!showResult ? (
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`w-full py-3 px-5 rounded-md text-left font-medium transition-all ${
                    selectedAnswer === option
                      ? option === questions[currentQuestion].correctAnswer
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  }`}
                  onClick={() => handleAnswerClick(option)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="bg-green-600 p-6 rounded-lg shadow-lg max-w-xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
            <p>Your Score: {score} / {questions.length}</p>
          </motion.div>
        )}

        <motion.div
          className="absolute top-10 left-10 z-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <FontAwesomeIcon icon={faQuestionCircle} className="text-yellow-400 text-5xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 z-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-5xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Quiz;

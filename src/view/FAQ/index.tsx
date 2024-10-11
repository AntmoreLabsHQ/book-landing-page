
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import '../../styles/FaqSection.css';

interface FAQ {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What is the book about?",
      answer: "The book is a thrilling adventure that takes you through the journey of a hero in a fantasy world filled with magic and superheroes."
    },
    {
      question: "Who is the author?",
      answer: "The author is a passionate storyteller inspired by anime and superhero genres, bringing unique characters to life."
    },
    {
      question: "How can I purchase the book?",
      answer: "You can purchase the book from our online store or through major retailers like Amazon and Barnes & Noble."
    },
    {
      question: "Is there a sequel planned?",
      answer: "Yes! The author is currently working on a sequel that will continue the adventures of our hero."
    },
    {
      question: "Can I connect with the author?",
      answer: "Absolutely! You can follow the author on social media platforms to get updates and insights."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked <span className="text-[#2a4dc1]">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg">
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl">{faq.question}</h3>
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  size="2x"
                  className={`text-[#2a4dc1] transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {activeIndex === index && (
                <div className="p-4 border-t border-gray-700 animate-fadeIn">
                  <p className="text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import HeroSection from './components/HeroSection';
import AboutBook from './components/AboutBook';
import PreOrderCTA from './components/Pre_Order_Section';
import CharacterCards from './components/CharacterCards';
import NavBar from './components/NavBar';
import AuthorSection from './components/AboutAuthor';
import FAQSection from './components/FaqSection';
import FooterSection from './components/FooterSection';
import ReviewsSection from './components/ReviewSection';
import FeedbackFormSection from './components/FeedbackFormSection';
import QuizSection from './components/QuizSection';

const App: React.FC = () => {
  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-800'>
      <NavBar />
      <HeroSection />
      <AboutBook />
      <CharacterCards />
      <AuthorSection />
      <ReviewsSection />
      <FeedbackFormSection />
      <FAQSection />
      <QuizSection />
      <PreOrderCTA />
      <FooterSection />
    </div>
  );
}

export default App;

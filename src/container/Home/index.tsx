import React from 'react'
import HeroSection from '../../view/HeroSection'
import AboutAuthor from '../../view/AboutAuthor'
import AboutBook from '../../view/AboutBook'
import Character from '../../view/Characters'
import Review from '../../view/Reviews'
import FeedBack from '../../view/FeedBack'
import FAQ from '../../view/FAQ'
import Quiz from '../../view/Quiz'
import PreOrderCTA from '../../view/PreOrderCTA'

const Home:React.FC = ()=> {
  return (
    <div>
        <HeroSection/>
        <AboutBook/>
        <Character/>
        <AboutAuthor/>
        <Review/>
        <FeedBack/>
        <FAQ/>
        <Quiz/>
        <PreOrderCTA/>
    </div>
  )
}

export default Home
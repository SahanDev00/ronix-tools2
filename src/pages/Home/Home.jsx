import React from 'react'
import Hero from '../../components/Home/Hero'
import Description from '../../components/Home/Description'
import FeaturedProducts from '../../components/Home/FeaturedProducts'
import Features from '../../components/Home/Features'
import Slider from '../../components/Home/Slider'
import Cards from '../../components/Home/Cards'

const Home = () => {
  return (
    <div>
        <Hero />
        <Description />
        <FeaturedProducts />
        <Features />
        <Slider />
        <Cards />
    </div>
  )
}

export default Home
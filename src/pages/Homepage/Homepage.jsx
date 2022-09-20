import React from 'react'
import About from '../../components/About/About'
import BestSeller from '../../components/BestSeller/BestSeller'
import Brand from '../../components/Brand/Brand'
import Header from '../../components/Header/Header'
import News from '../../components/News/News'
import Promo from '../../components/Promo/Promo'
import Recent from '../../components/Recent/Recent'

const Homepage = () => {
  return (
    <>
      <Header />
      <About />
      <Promo />
      <Brand />
      <Recent />
      <BestSeller />
      <News />
    </>
  )
}

export default Homepage
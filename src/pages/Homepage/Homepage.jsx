import React from 'react'
import About from '../../components/About/About'
import Header from '../../components/Header/Header'
import News from '../../components/News/News'
import Recent from '../../components/Recent/Recent'

const Homepage = () => {
  return (
    <>
      <Header />
      <About />
      <News />
      <Recent />
    </>
  )
}

export default Homepage
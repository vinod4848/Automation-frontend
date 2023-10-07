import React from 'react'
import Footer from './Footer'
import Header from './Header'
import FrameComponent2 from './frame-component2'
import FrameComponent3 from './frame-component3'
import FrameComponent4 from './frame-component4'
import FrameComponent5 from './frame-component5'
import FrameComponent6 from './frame-component6'
import FrameComponent7 from './frame-component7'
import FrameComponent8 from './frame-component8'
import FrameComponent9 from './frame-component9'
import Banner from '../components/Banner'

const index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FrameComponent2 /><br />
      <FrameComponent3 /><br />
      <FrameComponent4 /><br />
      <FrameComponent5 /><br />
      <FrameComponent6 /><br />
      <FrameComponent7 /><br />
      <FrameComponent8 /><br />
      <FrameComponent9 />
      <Footer />
    </div>
  )
}

export default index
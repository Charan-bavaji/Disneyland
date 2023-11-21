import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { slide1, slide2, slider3, slider4 } from '../assets/images'
const ImgSlider = () => {
  // sm	640px
  // md	768px	
  // lg	1024px
  // xl	1280px
  // 2xl 1536px
  return (
    <div className=' w-full h-[auto] p-2 '>
      <CCarousel controls >
        <CCarouselItem>
          <CImage className="d-block w-100" src={slide1} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slide2} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slider3} alt="slide 3" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={slider4} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
    </div>
  )
}

export default ImgSlider

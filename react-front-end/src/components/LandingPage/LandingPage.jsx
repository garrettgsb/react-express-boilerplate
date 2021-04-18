import React from 'react'
import ArcticLandscape from 'arctic-landscape'
import CustomAuroraBorealisGradient from './CustomAuroraBorealisGradient'

const LandingPage = () => {

  return (
    <div className='aurora'>
      <CustomAuroraBorealisGradient />
      <ArcticLandscape pose='draw' duration={6000} auroraBorealisGleamGradientId="custom-gradient-element-id" />
    </div>
  )
}

export default LandingPage

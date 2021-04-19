import React from 'react';

const FeaturedPhotos = ({ photo1, photo2, photo3 }) =>(
    <div>
      <img src={photo1}/>
      <img src={photo2}/>
      <img src={photo3}/>
    </div>
  )

export default FeaturedPhotos;
import React from 'react'


const PreviewBox = ({ currentCarouselImageUrl, carouselImages, selectedLightOption, currentCarouselImage, setCurrentCarouselImage }) => (

  <div className="previewBox">

    <div
      className="carousel"
      style={{ backgroundImage: `url(${currentCarouselImageUrl})` }}
    >

      <div className="carouselNav">
        {carouselImages[selectedLightOption].map((images, i) => (
          <div
            key={i}
            className={`navBullet ${i === currentCarouselImage && 'selected'}`}
            onClick={() => setCurrentCarouselImage(i)}
          />
        ))}
      </div>

    </div>

  </div>
)

export default PreviewBox

import React from 'react'

const LightType = ({ setIsInfoPanelOpen, lightOptions, selectedLightOption, setSelectedLightOption, carouselImages }) => (
  <div className="lightType">

    <div className="choseType">
      <div onClick={() => setIsInfoPanelOpen(true)} className="typeInfoBtn">i</div>
      <div className="stepTitle">Выберите цвет свечения</div>
    </div>

    <div className="lightItemBox">

      {lightOptions.map((name, i) => (
        <div
          key={i}
          className={`lightItem ${selectedLightOption === i && 'selectedLightItem'}`}
          onClick={() => setSelectedLightOption(i)}
          style={{ backgroundImage: `url(${carouselImages[i][0]})` }}
        >
          <span className="lightItemName">{name}</span>
          {selectedLightOption === i && <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/checkBox.png'})` }} className="selectedLightItemMark" />}
        </div>
      ))}

    </div>

  </div>
)

export default LightType

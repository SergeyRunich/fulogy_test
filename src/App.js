import React, { useState } from 'react';
import './App.css';
import InfoPanel from './components/InfoPanel';
import LightSpecs from './components/LightSpecs'
import Header from './components/header'
import Footer from './components/footer'
import PreviewBox from './components/previewbox'
import LightType from './components/LightType'

const lightOptions = [
  "Теплый",
  "Дневной",
  "Холодный"
]

const carouselImages = {
  [0]: [
    process.env.PUBLIC_URL + '/day-0.jpg',
    process.env.PUBLIC_URL + '/day-1.jpg',
    process.env.PUBLIC_URL + '/day-2.jpg',
  ],
  [1]: [
    process.env.PUBLIC_URL + '/day-warm-0.jpg',
    process.env.PUBLIC_URL + '/day-warm-1.jpg',
    process.env.PUBLIC_URL + '/day-warm-2.jpg',
  ],
  [2]: [
    process.env.PUBLIC_URL + '/day-warmer-0.jpg',
    process.env.PUBLIC_URL + '/day-warmer-1.jpg',
    process.env.PUBLIC_URL + '/day-warmer-2.jpg',
  ]
}

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLightOption, setSelectedLightOption] = useState(0);
  const [currentCarouselImage, setCurrentCarouselImage] = useState(0);
  const [currentStep, setCurrentStep] = useState(5);
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);

  const currentCarouselImageUrl = carouselImages[selectedLightOption][currentCarouselImage]

  return (
    <main>

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="constBox">

        <InfoPanel isOpen={isInfoPanelOpen} setOpenState={setIsInfoPanelOpen}>
          Мы создаем цифровые интеллектуальные устройства, которые восхищают людей уже при первом знакомстве с ними. Нас объединяет технический опыт, творческий характер и перфекционизм, которые формируют идеи и решения, чтобы поразить вас.
        </InfoPanel>

        <PreviewBox
          currentCarouselImageUrl={currentCarouselImageUrl}
          carouselImages={carouselImages}
          selectedLightOption={selectedLightOption}
          currentCarouselImage={currentCarouselImage}
          setCurrentCarouselImage={setCurrentCarouselImage}
        />

        <div className="settingBox">

          <LightSpecs />

          <LightType
            setIsInfoPanelOpen={setIsInfoPanelOpen}
            lightOptions={lightOptions}
            selectedLightOption={selectedLightOption}
            setSelectedLightOption={setSelectedLightOption}
            carouselImages={carouselImages}
          />

        </div>

      </div>

      <Footer currentStep={currentStep} setCurrentStep={setCurrentStep} />

    </main>
  );
}

export default App;

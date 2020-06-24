import React from 'react'

const steps = [
  "Вариант кухни",
  "Размеры",
  "Сенсор",
  "Питающий Кабель",
  "Блок питания",
  "Цвет свечения",
  "Монтаж",
  "Корзина",
]

const Footer = ({ currentStep, setCurrentStep }) => (
  <footer className="footerSteps">
    {steps.map((s, i) => (
      <div key={i} className={`constStep ${i === currentStep && 'currentStep'}`}>
        {s}
        {i !== currentStep && <div className={i > currentStep ? 'nextStep' : 'passedStep'} />}
      </div>
    ))}
  </footer>
)

export default Footer

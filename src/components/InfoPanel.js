import React from 'react'

const InfoPanel = ({ isOpen, setOpenState, children }) => (
  isOpen ?
    <div className="infoPanel">
      <div className="backBtn" onClick={() => setOpenState(false)}>
        {'<'} Вернуться
      </div>
      {children}
    </div>
    :
    null
)

export default InfoPanel

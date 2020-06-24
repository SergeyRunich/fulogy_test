import React from 'react'

const LightSpecs = () => (
  <div className="lightSpecs">
    <table className="specsTable">
      <tbody>
        <tr>
          <td>Класс:</td>
          <td><span id="kitClass">Standart</span></td>
        </tr>

        <tr>
          <td>Потребляемая мощность:</td>
          <td>59 Вт.</td>
        </tr>

        <tr>
          <td>Сила света:</td>
          <td>3459 Люмен = 7,5 ламп накаливания по 40 Вт.</td>
        </tr>

        <tr>
          <td>Гарантия:</td>
          <td>3 года</td>
        </tr>

        <tr>
          <td>Монтаж</td>
          <td>Да</td>
        </tr>

        <tr>
          <td>Итого сумма</td>
          <td>2594 рублей</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default LightSpecs

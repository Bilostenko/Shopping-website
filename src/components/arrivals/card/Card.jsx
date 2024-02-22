import './card.css'
import arrow from '../../../img/icons/arrow.svg'

const Card = (props) => {

  const { title, img } = props

  return (
    <div className="arrivals__content">
      <div className="arrivals__card">
        <img className="arrivals__card-img" src={img} alt="Hoodies" />
        <div className="arrival__card-body">
          <div className="arrivals__card-text">
            <h3 className="title3">{title}</h3>
            <p className="text">Explore Now!</p>
          </div>
          <div className="arrivals__card-arrow">
            <img src={arrow} alt="Open" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
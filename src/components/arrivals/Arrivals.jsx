import './arriavls.css'
import Card from './card/Card'

const Arrivals = (props) => {

  const { title, cardData } = props

  return (
    <section className="arrivals">
      <div className="section">
        <div className="container">
          <div className="arrivals__header">
            <h2 className="title2">{title}</h2>
          </div>
          <div className="arrivals__content">
            {cardData.map((card, index) => (
              <Card key={index} title={card.titleCard} img={card.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arrivals;
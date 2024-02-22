import './arriavls.css'
import Hoodies from '../../img/categories/cat-01.jpg'
import Coats from '../../img/categories/cat-02.jpg'
import Tshirt from '../../img/categories/cat-03.jpg'
import Card from './card/Card'

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="section">
        <div className="container">
          <div className="arrivals__header">
            <h2 className="title2">NEW ARRIVALS</h2>
          </div>
          <div className="arrivals__content">
            <Card title={"Hoodies & Sweetshirt"} img={Hoodies}/>
            <Card title={"Coats & Parkas"} img={Coats}/>
            <Card title={"Tees & T-Shirt"} img={Tshirt}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arrivals;
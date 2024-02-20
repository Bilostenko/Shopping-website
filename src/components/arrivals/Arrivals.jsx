import './arriavls.css'
import Hoodies from '../../img/categories/cat-01.jpg'
import Coats from '../../img/categories/cat-02.jpg'
import Tshirt from '../../img/categories/cat-03.jpg'
const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="section">
        <div className="container">
          <div className="arrivals__header">
            <h2 className="title2">NEW ARRIVALS</h2>
          </div>
          <div className="arrivals__content">
            {/* 1 */}
            <div className="arrivals__card">
              <div className="arrivals__card-img">
                <img src={Hoodies} alt="Hoodies" />
              </div>
              <div className="arrivals__card-text">
                <h3 className="title3">Hoodies & Sweetshirt</h3>
                <p className="text">Explore Now!</p>
              </div>
            </div>
            {/* 2 */}
            <div className="arrivals__card">
              <div className="arrivals__card-img">
                <img src={Coats} alt="Hoodies" />
              </div>
              <div className="arrivals__card-text">
                <h3 className="title3">Coats & Parkas</h3>
                <p className="text">Explore Now!</p>
              </div>
            </div>
            {/* 3 */}
            <div className="arrivals__card">
              <div className="arrivals__card-img">
                <img src={Tshirt} alt="Hoodies" />
              </div>
              <div className="arrivals__card-text">
                <h3 className="title3">Tees & T-Shirt</h3>
                <p className="text">Explore Now!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arrivals;
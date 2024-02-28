import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Feedback from './components/feedback/Feedback';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MobileApp from './components/mobileApp/MobileApp';
import Payday from './components/payday/Payday';
import Promo from './components/promo/Promo';

import Hoodies from './img/categories/cat-01.jpg'
import Coats from './img/categories/cat-02.jpg'
import Tshirt from './img/categories/cat-03.jpg'

import TwoGirls from './img/images/promo-01.jpg'
import OneGirl from './img/images/promo-02.jpg'
function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals
        title="NEW ARRIVALS"
        cardData={[
          { titleCard: "Hoodies & Sweetshirt", img: Hoodies },
          { titleCard: "Coats & Parkas", img: Coats },
          { titleCard: "Tees & T-Shirt", img: Tshirt }
        ]}
      />
      <Payday />
      <Arrivals
        title="Young’s Favourite"
        cardData={[
          { titleCard: "Trending on instagram", img: TwoGirls },
          { titleCard: "All Under $40", img: OneGirl },
        ]}
      />
      <MobileApp />
      < Feedback />
      < Footer />
    </div>
  );
}

export default App;

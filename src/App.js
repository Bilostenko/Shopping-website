import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header';
import Payday from './components/payday/Payday';
import Promo from './components/promo/Promo';
function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Payday />
      <Arrivals />
    </div>
  );
}

export default App;

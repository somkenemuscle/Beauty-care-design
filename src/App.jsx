import './App.css';
import Navbar from './components/navbar/navbar';
import Carousel from './components/carousel/carousel';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <div className='header-navbar-wrapper' >
        {/* header section */}
        <header >
          <span>GET 2 FREE SAMPLES WITH ANY $45 PURCHASE </span>
        </header>
        {/* navbar section */}
        <Navbar />
      </div>

      {/* carousel section */}
      <Carousel />

      {/* promo section */}
      <section id='promo-section'>
        <h2>OUR SERVICES</h2>
        <p>Get 20% discount on all products which will be effective from 22nd April till 5th May 2024</p>
      </section>


      {/* footer section */}
      <Footer />
    </div>
  );
}

export default App;

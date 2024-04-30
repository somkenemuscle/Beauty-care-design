import './App.css';
import Navbar from './components/navbar/navbar';
import Carousel from './components/carousel/carousel';
import Footer from './components/footer/footer';
import ProductCards from './components/productCards/productCards';
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

      {/* best sellers section */}
      <section id='best-sellers-section'>
        <h4>Meet Our Best Sellers</h4>
        <div className="container text-center">
          <div className="row">
            <div className="best-sellers-div col-xl-3 col-md-6">
              <ProductCards
                src='https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='Vitamin C Serum'
                price='8.15'
              />
            </div>
            <div className="best-sellers-div col-xl-3 col-md-6">
              <ProductCards
                src='https://images.unsplash.com/photo-1564594206491-26734df9237f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='Tumeric Face Mask'
                price='12.45'
              />
            </div>
            <div className="best-sellers-div col-xl-3 col-md-6">
              <ProductCards
                src='https://images.unsplash.com/photo-1629732097571-b042b35aa3ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                name='The Collagen Booster'
                price='87.00'
              />
            </div>
            <div className="best-sellers-div col-xl-3 col-md-6">
              <ProductCards
                src='https://images.unsplash.com/photo-1629732047847-50219e9c5aef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjExfHxza2luY2FyZSUyMHByb2R1Y3RzfGVufDB8fDB8fHww'
                name='Ultra Moisturizer '
                price='30.00'
              />
            </div>
          </div>
        </div>
      </section>
      {/* footer section */}
      <Footer />
    </div>
  );
}

export default App;

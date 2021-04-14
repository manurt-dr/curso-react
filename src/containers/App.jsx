import React from'react';
import Header from'../components/Header';
import Search from'../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import'../assets/styles/App.scss';
import Carrousel from '../components/Carousel';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Search />

      <Categories title="Mi Lista">
          <Carousel>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
          </Carousel>
      </Categories> 

      <Categories title="Tendencias">
          <Carousel>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
          </Carousel>
      </Categories>

      <Categories title="originales de PlatziVideo">
          <Carousel>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
          </Carousel>
      </Categories>

      <Footer />    
    </div>
  );
};

export default App;
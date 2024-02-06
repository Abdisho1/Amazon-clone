import React from 'react'
import './Home.css'
import Product from './Product';
import Slide from './Slide';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <>
          <Slide />
        </>

        <div className="home__row">
          <Product
            id="123"
            title="Panasonic LUMIX G85 4K Digital Camera, 12-60mm Power O.I.S. Lens, 16 Megapixel Mirrorless Camera, 5 Axis In-Body Dual Image Stabilization, 3-Inch Tilt and Touch LCD, DMC-G85MK (Black)"
            price={697.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81TUnaSLzoL._AC_SL1487_.jpg"
          />
          <Product
            id="1234"
            title='MSI Katana 15 15.6" 144Hz FHD Gaming Laptop: 13th Gen Intel Core i7, RTX 4070, 16GB DDR5, 1TB NVMe SSD, USB-Type C, Cooler Boost 5, Win11 Home: Black B13VGK-484US'
            price={1548.23}
            rating={4}
            image="https://m.media-amazon.com/images/I/81K1NR+8WjL._AC_SL1500_.jpg"
          />
          <Product
            id="321"
            title="Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Charcoal"
            price={249.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51EVETDOOeL._AC_SL1000_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1234"
            title="Vospeed 5 IN 1 Stand Mixer, 850W Tilt-Head Multifunctional Electric Mixer with 7.5 QT Stainless Steel Bowl, 1.5L Glass Jar, Meat Grinder, Hook, Whisk, Beater Dishwasher Safe - Black"
            price={209.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71bFtbpmddL._AC_SL1500_.jpg"
          />
          <Product
            id="123"
            title="9-in-1 Vegetable Chopper & Mandoline Slicer for Kitchen - Veggie Chopper Vegetable Cutter, Food Chopper, Onion Chopper Dicer With Container - Black"
            price={16.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81V2fdmi0kL._AC_SL1500_.jpg"
          />
          <Product
            id="1234"
            title='Seropy Roll Up Dish Drying Rack, Over The Sink Dish Drying Rack Kitchen Rolling Dish Drainer, Foldable Sink Rack Mat Stainless Steel Wire Dish Drying Rack for Kitchen Sink Counter (17.8"x11.8")'
            price={8.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71PuaIFVAIL._AC_SL1500_.jpg"
          />
          <Product
            id="321"
            title='HOOJO Refrigerator Organizer Bins - 8pcs Clear Plastic Bins For Fridge, Freezer, Kitchen Cabinet, Pantry Organization and Storage, BPA Free Fridge Organizer, 12.5" Long'
            price={19.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81tptizIOmL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12345"
            title="Samsung LC4RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="123456"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="1234567"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12345678"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="321"
            title="Security Cameras Wireless Outdoor, 1080P Battery Powered AI Motion Detection Spotlight Siren Alarm WiFi Surveillance Indoor Home Camera, Color Night Vision, 2-Way Talk, Waterproof, Cloud/SD Storage"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/610iZX9CHPL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home
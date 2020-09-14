import React from "react";
import "./home.css";
import Product from "./product";
function home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/AMAZON-FASHION/2020/FASHION/PRIME_WARDROBE/AUGUST_FW20_UPDATE/MERCH/GW_HERO_DESK_1500x600._CB408900531_.jpg"
        />
        <div className="home__row">
          <Product
            id="1234 "
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case"
            price={569990}
            image="https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="1235"
            title="Sony Bravia 214.8 cm (85 inches) 4K Ultra HD Certified Android LED TV 85X8000H (Black) (2020 Model)"
            price={569990}
            image="https://m.media-amazon.com/images/I/91wbJpp9BsL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1236"
            title="Maono AU-A04 Condenser Microphone Kit (Black)"
            price={4999}
            image="https://m.media-amazon.com/images/I/61jOIJwE9YL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />

          <Product
            id="1237"
            title="FURNY Carson 1 Seater Dried Treated Leatherette Manual with German Recliner Mechanism Sofa with U Shaped Seating"
            price={21999}
            image="https://m.media-amazon.com/images/I/61fZpMHe5tL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="1238"
            title="Haier 531 L Inverter Frost-Free Side-by-Side Refrigerator (HRB-550KG, Black,Convertible)"
            price={60000}
            image="https://m.media-amazon.com/images/I/513Fzyfyn7L._AC_UL480_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1239"
            title="Amazon Brand - Solimo Victoria Fabric 3 seater sofa (Brown & Beige)"
            price={15499}
            image="https://images-na.ssl-images-amazon.com/images/I/81rLlJjQ9dL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default home;

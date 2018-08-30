import React from "react";
import Slider from "react-slick"
import Product from './Product';
import './slider.css'

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
    };
    const products = [
      {
        name: 'Name 1',
        price: '$200.00',
        img: 'https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-c740_por_01_c_1.jpg'
      },
      {
        name: 'Name 2',
        price: '$220.00',
        img: 'https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-c724_anb_01_f.jpg'
      },
      {
        name: 'Name 3',
        price: '$240.00',
        img: 'https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-c719_pap_02_c.jpg'
      },
      {
        name: 'Name 4',
        price: '$260.00',
        img: 'https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-c728_chk_01_f.jpg'
      },
      {
        name: 'Name 5',
        price: '$280.00',
        img: 'https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-c725_blk_02_f.jpg'
      },
      {
        name: 'Name 6',
        price: '$300.00',
        img: 'https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-2886_blk_01_f.jpg'
      },
    ]
    return (
      <Slider {...settings}>
        {
          products.map((product, index) => (
            <div key={index} className="slide-holder">
              <Product product={product} />
            </div>
          ))
        }
      </Slider>
    );
  }
}

export default SimpleSlider;
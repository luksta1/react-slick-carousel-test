import React from "react";
import Slider from "react-slick"
import './slider.css'

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <Slider {...settings}>
        <div className="slide-holder">
          <div className="inner">
            <img alt="img1" src="https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-c740_por_01_c_1.jpg" />
            <h3>Name</h3>
            <p>Price</p>
          </div>
        </div>
        <div className="slide-holder">
          <div className="inner">
            <img alt="img2" src="https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-c724_anb_01_f.jpg" />
            <h3>Name</h3>
            <p>Price</p>
          </div>
        </div>
        <div className="slide-holder">
          <div className="inner">
            <img alt="img3" src="https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-c719_pap_02_c.jpg" />
            <h3>Name</h3>
            <p>Price</p>
          </div>
        </div>
        <div className="slide-holder">
          <div className="inner">
            <img alt="img4" src="https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-c728_chk_01_f.jpg" />
            <h3>Name</h3>
            <p>Price</p>
          </div>
        </div>
        <div className="slide-holder">
          <div className="inner">
            <img alt="img5" src="https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-c725_blk_02_f.jpg" />
            <h3>Name</h3>
            <p>Price</p>
          </div>
        </div>
        <div className="slide-holder">
          <div className="inner">
            <img alt="img6" src="https://www.bailey44.com/media/catalog/product/cache/1/small_image/636x788/9df78eab33525d08d6e5fb8d27136e95/4/0/408-2886_blk_01_f.jpg" />
            <h3>Name</h3>
            <p>Price</p>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
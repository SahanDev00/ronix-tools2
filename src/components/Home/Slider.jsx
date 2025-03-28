import React from "react";
import Slider from "react-slick";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = () => {
  const products = [
    {
      name: "test item 1",
      image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg",
    },
    {
      name: "test item 2",
      image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg",
    },
    {
      name: "test item 3",
      image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg",
    },
    {
      name: "test item 4",
      image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg",
    },
    {
      name: "test item 5",
      image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg",
    },
    {
      name: "test item 6",
      image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg",
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    slidesToShow: 4, // Show 4 items in xl
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // lg screen
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // md screen
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm screen
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-gray-200 min-h-[300px] pb-10">
      <div className="w-[80%] sm:w-[67%] mx-auto">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-1 sm:px-3">
              <div className="w-full h-[310px] border border-black cursor-pointer relative bg-white">
                <img
                  src={product.image}
                  className="w-full h-[280px] object-contain p-5"
                  alt={product.name}
                />
                <p className="text-sm w-full flex items-center justify-center mx-auto text-center bg-[#800080] h-[30px] text-white">
                  {product.name}
                </p>
                <div className="w-full h-[280px] bg-white absolute flex items-center justify-center inset-0 opacity-0 hover:opacity-90 duration-300">
                  <MdOutlineDoubleArrow className="size-10 text-purple-600" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;

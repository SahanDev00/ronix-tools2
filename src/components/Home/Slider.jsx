import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  
  const [items, setItems] = useState([]);
  const [productImages, setProductImages] = useState({}); // Store images by item IDs

  const fetchImageData = async (itemID) => {
      try {
          const apiKey = process.env.REACT_APP_API_KEY;
          const response = await fetch(`${process.env.REACT_APP_API_URL}/ImageData/${itemID}`, {
          headers: {
              'APIKey': apiKey,
          },
          });
          const data = await response.json();

          if (data.success && data.data.length > 0) {
              setProductImages(prevImages => ({
                  ...prevImages,
                  [itemID]: `${process.env.REACT_APP_IMG_URL}/${data.data[0].imageID}.png`
              }));
          }
          } catch (error) {
              console.error('Fetch error:', error);
          }
      };
      useEffect(() => {
          items.forEach(item => {
              fetchImageData(item.itemID);
          });
  },[items])

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await axios.get(`${process.env.REACT_APP_API_URL}/Item?IsSpecial=y`, {
                  headers: {
                      APIKey: process.env.REACT_APP_API_KEY
                  }
              })
              setItems(response.data.data)
          } catch (err) {
              console.log(err)
          }
      };
      fetchProducts();
  }, [])

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
          {items.map((item, index) => (
            <div key={index} className="px-1 sm:px-3">
              <Link to={`/product/${item.itemID}`}>
                <div className="w-full h-[310px] border border-black cursor-pointer relative bg-white">
                  <img
                    src={productImages[item.itemID]}
                    className="w-full h-[280px] object-contain p-5"
                    alt={item.itemName}
                    />
                  <p className="text-sm w-full flex items-center justify-center mx-auto text-center bg-[#800080] h-[30px] text-white">
                    {item.itemName}
                  </p>
                  <div className="w-full h-[280px] bg-white absolute flex items-center justify-center inset-0 opacity-0 hover:opacity-90 duration-300">
                    <MdOutlineDoubleArrow className="size-10 text-purple-600" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "react-router-dom";

const RelatedProducts = ({ subCategoryID }) => {
  const [productImages, setProductImages] = useState({}); // Store images by item IDs
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/Item?CategorySubID=${subCategoryID}`,
          {
            headers: {
              APIKey: process.env.REACT_APP_API_KEY,
            },
          }
        );
        setItems(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [subCategoryID]);

  const fetchImageData = async (itemID) => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/ImageData/${itemID}`,
        {
          headers: {
            APIKey: apiKey,
          },
        }
      );
      const data = await response.json();

      if (data.success && data.data.length > 0) {
        setProductImages((prevImages) => ({
          ...prevImages,
          [itemID]: `${process.env.REACT_APP_IMG_URL}/${data.data[0].imageID}.png`,
        }));
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  useEffect(() => {
    items.forEach((item) => {
      fetchImageData(item.itemID);
    });
  }, [items]);

  return (
    <div className="w-full min-h-[350px] pt-10 md:mt-0 pb-10 bg-gradient-to-r from-[#bf0000] to-[#bf1882]">
      <h1 className="text-center font-bold text-3xl md:text-4xl font-poppins text-white uppercase">
        Related products
      </h1>
      <div className="w-[90%] sm:w-[70%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-7">
        {items.map((item) => (
          <div className="w-full h-[310px] bordercursor-pointer relative bg-white">
            <Link
              to={`/product/${item.itemID}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={productImages[item.itemID]}
                className="w-full h-[280px] object-contain p-5"
                alt=""
              />
              <p className="text-sm w-full flex items-center justify-center mx-auto text-center bg-[#923333] h-[30px] text-white">
                {item.itemName}
              </p>
              <div className="w-full h-[280px] bg-white absolute flex items-center justify-center inset-0 opacity-0 hover:opacity-90 duration-300">
                <MdOutlineDoubleArrow className="size-10 text-[#bf0000]" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

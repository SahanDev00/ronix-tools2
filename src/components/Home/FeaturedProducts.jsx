import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const Navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState([]);
  const [productImages, setProductImages] = useState({}); // Store images by item IDs

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/Item?IsFeatured=y`,
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
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      Navigate(`/search/${searchQuery.trim()}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="w-full min-h-[350px] mt-10 md:mt-0 pb-10">
      <h1 className="text-center font-bold text-3xl md:text-4xl font-poppins text-gray-700 uppercase">
        Featured products
      </h1>
      <div className="flex items-center justify-center w-full h-full mt-5">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search"
          className="w-[80%] sm:w-[500px] h-[40px] pl-3 border outline-none"
        />
        <button
          type="submit"
          onClick={() => handleSearch()}
          className="w-[40px] h-[40px] flex items-center justify-center bg-gray-200 text-gray-700 font-karla"
        >
          <FaSearch />
        </button>
      </div>
      <div className="w-[90%] sm:w-[70%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-7">
        {items.map((item) => (
          <div className="w-full h-[310px] border border-black cursor-pointer relative bg-white">
            <Link to={`/product/${item.itemID}`}>
              <img
                src={productImages[item.itemID]}
                className="w-full h-[280px] object-contain p-5"
                alt=""
              />
              <p className="text-sm w-full flex items-center justify-center mx-auto text-center bg-[#bf0000] h-[30px] text-white">
                {item.itemName}
              </p>
              <div className="w-full h-[280px] bg-white absolute flex items-center justify-center inset-0 opacity-0 hover:opacity-90 duration-300">
                <MdOutlineDoubleArrow className="size-10 text-purple-600" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

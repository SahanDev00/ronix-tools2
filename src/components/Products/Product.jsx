import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";

const Product = () => {
  const { itemID } = useParams();
  const [item, setItem] = useState(null);
  const [specifications, setSpecifications] = useState([]);
  const [mainImage, setMainImage] = useState(""); // State for main image
  const [images, setImages] = useState([]);
  const [zoomLens, setZoomLens] = useState({ x: 0, y: 0, show: false });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 105;
    const y = ((e.clientY - top) / height) * 110;

    setZoomLens({ x, y, show: true });
  };

  const handleMouseLeave = () => {
    setZoomLens({ ...zoomLens, show: false });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/Item/${itemID}`,
          {
            headers: {
              APIKey: process.env.REACT_APP_API_KEY,
            },
          }
        );
        setItem(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [itemID]);

  useEffect(() => {
    const fetchSpecifications = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/Specification?ItemID=${itemID}`,
          {
            headers: {
              APIKey: process.env.REACT_APP_API_KEY,
            },
          }
        );
        setSpecifications(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSpecifications();
  }, [itemID]);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/ImageData/${itemID}`,
          {
            headers: { APIKey: process.env.REACT_APP_API_KEY },
          }
        );
        const data = await response.json();
        if (data.success && data.data.length > 0) {
          setImages(data.data);
        }
        // Set the first image as the default main image
        if (data.data.length > 0) {
          setMainImage(
            `${process.env.REACT_APP_IMG_URL}/${data.data[0].imageID}.png`
          );
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (itemID) {
      fetchImageData();
    }
  }, [itemID]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen font-karla">
      {/* Banner */}
      <div className="w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[260px] bg-gradient-to-r from-[#bf0000] to-[#bf1882]">
        <div className="w-[90%] md:w-[60%] mx-auto h-full flex items-center">
          <h1 className="text-3xl md:text-4xl text-white font-bold uppercase">
            {item?.itemName || "Loading..."}
          </h1>
        </div>
      </div>

      {/* Product Details */}
      <div className="grid md:grid-cols-2 md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto gap-6 mt-10 font-karla pb-20">
        <div>
          <div className="relative">
            {/* Main Image */}
            <img
              src={mainImage || "/placeholder.png"}
              className="w-full h-[300px] md:h-[400px] p-2 object-contain border-r"
              alt={item?.itemName || "Product Image"}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />

            {/* Zoom Lens */}
            {zoomLens.show && (
              <div
                className="absolute w-[150px] h-[150px] border-2 border-gray-500 rounded-full overflow-hidden pointer-events-none"
                style={{
                  left: `calc(${zoomLens.x}% - 110px)`,
                  top: `calc(${zoomLens.y}% - 100px)`,
                  backgroundImage: `url(${mainImage})`,
                  backgroundSize: "450%",
                  backgroundPosition: `${zoomLens.x}% ${zoomLens.y}%`,
                }}
              ></div>
            )}
          </div>

          <div className="flex items-center justify-center mt-4 gap-5 flex-wrap">
            {images.map((img, idx) => (
              <img
                key={img.imageID}
                src={`${process.env.REACT_APP_IMG_URL}/${img.imageID}.png`} // Use imageID for thumbnail URL
                className="w-[60px] sm:w-[100px] md:w-[100px] md:h-[100px] cursor-pointer object-contain"
                alt={`Gallery ${idx}`}
                onClick={() =>
                  setMainImage(
                    `${process.env.REACT_APP_IMG_URL}/${img.imageID}.png`
                  )
                } // Update main image on click
              />
            ))}
          </div>
        </div>

        <div className="w-[90%] mx-auto md:w-full h-full">
          <p className="mb-2">{item?.description || ""}</p>

          <div className="border p-3 border-black">
            {/* Specifications */}
            {specifications.length > 0 ? (
              specifications.map((spec) => (
                <div key={spec.id} className="mb-2">
                  <p className="font-bold">{spec.caption}</p>
                  <p className="font-light text-gray-700">{spec.description}</p>
                </div>
              ))
            ) : (
              <p>No specifications available.</p>
            )}
          </div>

          {/* Order Form */}
          <p className="mt-4 font-bold text-2xl mb-2 text-[#bf0000]">
            Order {item?.itemName}
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              className="border p-2 focus:border-amber-500 outline-none"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="border p-2 focus:border-amber-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Address"
              className="border p-2 focus:border-amber-500 outline-none"
            />
            <input
              type="number"
              placeholder="Quantity"
              className="border p-2 focus:border-amber-500 outline-none"
            />
            <textarea
              placeholder="Type your request in detail"
              className="border p-2 focus:border-amber-500 outline-none"
            />
            <button className="bg-gradient-to-r from-[#bf0000] to-[#bf1882] text-white py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
      <RelatedProducts subCategoryID={item?.categorySubID} />
    </div>
  );
};

export default Product;

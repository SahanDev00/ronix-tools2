import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ToolsAccessories = () => {

    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [productImages, setProductImages] = useState({}); // Store images by item IDs
    const [selectedMainCategory, setSelectedMainCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

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

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/CategoryMain`, {
                headers: {
                    APIKey: process.env.REACT_APP_API_KEY
                }
            })
            setCategories(response.data.data);
        } catch (err) {
            console.log(err)
        }
    };

    const fetchSubCategories = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/CategorySub`, {
                headers: {
                    APIKey: process.env.REACT_APP_API_KEY
                }
            })
            setSubCategories(response.data.data)
        } catch (err) {
            console.log(err)
        }
    };

    const fetchCategoryProducts = async (categoryMainID) => {
        try {
            if (selectedMainCategory === categoryMainID) {
                // Unselect category and fetch all products
                setSelectedMainCategory(null);
                fetchProducts();
            } else {
                // Fetch category products
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/Item?CategoryMainID=${categoryMainID}`,
                    { headers: { APIKey: process.env.REACT_APP_API_KEY } }
                );
                setItems(response.data.data);
                setSelectedMainCategory(categoryMainID);
                setSelectedSubCategory(null); // Reset subcategory
            }
        } catch (err) {
            console.log(err);
        }
    };
    
    const fetchSubCategoryProducts = async (categorySubID) => {
        try {
            if (selectedSubCategory === categorySubID) {
                // Unselect subcategory and fetch all products
                setSelectedSubCategory(null);
                fetchProducts();
            } else {
                // Fetch subcategory products
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/Item?CategorySubID=${categorySubID}`,
                    { headers: { APIKey: process.env.REACT_APP_API_KEY } }
                );
                setItems(response.data.data);
                setSelectedSubCategory(categorySubID);
                setSelectedMainCategory(null); // Reset main category
            }
        } catch (err) {
            console.log(err);
        }
    };
    

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/ItemCategoryMainID=CTM_0018`, {
                headers: {
                    APIKey: process.env.REACT_APP_API_KEY
                }
            })
            setItems(response.data.data)
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
      fetchCategories();
      fetchSubCategories();
    }, [])
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
  return (
    <div className='w-full pt-20 font-karla'>
        <div className='w-full lg:h-[350px] relative'>
            <img src="https://www.shutterstock.com/image-photo/all-tools-supplies-home-construction-600nw-1964203402.jpg" className='w-full h-full object-cover' alt="" />
            <div className='absolute w-full h-full flex items-center justify-center inset-0 bg-black opacity-60' />
            <div className='absolute w-[80%] mx-auto h-full flex items-center inset-0'>
                <h1 className='text-4xl md:text-6xl text-white font-bold font-karla opacity-100 uppercase'>Ronix Tools and Accessories</h1>
            </div>
        </div>

        {/* Products */}
        <div className='w-[95%] lg:w-[90%] 2xl:w-[80%] mx-auto min-h-[500px] sm:flex mt-10'>
            {/* Categories side bar */}
            <div className='w-[90%] mx-auto sm:mx-0 sm:w-[250px] lg:w-[300px] xl:w-[400px] mb-10 sm:mb-0'>
                <h1 className='text-gray-700 font-semibold text-lg mb-2'>Categories</h1>
                <hr />
                {categories.map((category) => (
                    <div key={category.categoryMainID} className='w-full mt-2 text-lg text-gray-800 font-light'>
                        <div className='flex gap-2 list-none'>
                            <input type="checkbox" name="mainCat" id="mainCat" className='w-[17px]' 
                                checked={selectedMainCategory === category.categoryMainID}
                                onChange={() => fetchCategoryProducts(category.categoryMainID)}
                            />
                            <li>{category.categoryMainName}</li>
                        </div>
                        {/* Filter subcategories by the current category */}
                        <ul className='pl-4 mb-2 border-l'>
                            {subCategories
                                .filter(subCategory => subCategory.categoryMainID === category.categoryMainID)
                                .map(subCategory => (
                                    <div key={subCategory.categorySubID} className='flex gap-2'>
                                        <input type="checkbox" name="subCat" id="subCat" 
                                            checked={selectedSubCategory === subCategory.categorySubID}
                                            onChange={() => fetchSubCategoryProducts(subCategory.categorySubID)}
                                        />
                                        <li className='text-gray-700'>{subCategory.categorySubName}</li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                ))}
            </div>

            {/* products grid */}
            <div className='w-full h-full pb-10'>
                <div className='w-[95%] grid grid-cols-2 md:grid-cols-3 mx-auto gap-4 sm:gap-10'>
                    {items.length !== 0 ? 
                        items.map((item) => (
                            <div className='w-full lg:h-[250px] xl:h-[340px] border border-black cursor-pointer relative'>
                                <Link to={`/product/${item.itemID}`}>
                                    <img src={productImages[item.itemID]} className='w-full lg:h-[220px] xl:h-[310px] object-contain p-3' alt="" />
                                    <p className='text-sm w-full flex items-center justify-center mx-auto text-center bg-[#800080] h-[30px] text-white'>{item.itemName}</p>
                                    <div className='w-full lg:h-[200px] xl:h-[300px] bg-white absolute flex items-center justify-center inset-0 opacity-0 hover:opacity-90 duration-300'>
                                        <MdOutlineDoubleArrow className='size-10 text-purple-600' />
                                    </div>
                                </Link>
                            </div>
                        )) : (
                            <p>No Items Available</p>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToolsAccessories
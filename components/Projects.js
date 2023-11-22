"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ImageSlider = () => {
  const [apiData, setApiData] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Move it here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = process.env.NEXT_PUBLIC_API_KEY;


        const response = await axios.get(`${apiUrl}/api/projects?populate=*`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        setApiData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (!apiData || apiData.length === 0) {
    return <div>Loading...</div>;
  }

  return apiData.map((project, index) => {
    const { attributes } = project;
    const { title, description, image1, image2 } = attributes;

    // Construct the image URLs
    const imageUrl1 = `${apiUrl}${image1.data.attributes.url}`; // Update this line
    const imageUrl2 = `${apiUrl}${image2.data.attributes.url}`; // Update this line
    return (
      <div key={index} className="-mb-6">
        {/* Add "mb-4" class to set margin-bottom to 1rem (adjust as needed) */}
        <div className="flex items-center justify-center text-4xl pt-6 font-bold bg-gray-200 mt-6 bg-gray">
          {index === 0 && (
            <h2 className=" pl-6 lg:pl-0 pr-6 lg:pr-0  text-lg  xl:text-4xl text-blue-700 sm:text-4xl md:text-3xl lg:text-4x">
              Image Annotations
            </h2>
          )}
        </div>

        <div className="flex lg:flex-row flex-col bg-gray-200 lg:pl-16 lg:pr-16">
          {/* Left side with the image slider taking 40% screen width on large screens */}
          <div className="lg:w-2/5 w-full p-8">
            <ReactCompareSlider
              boundsPadding={0}
              itemOne={
                <ReactCompareSliderImage
                  alt="Image one"
                  src={imageUrl1}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  alt="Image two"
                  src={imageUrl2}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              }
              keyboardIncrement="5%"
              position={50}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>

          {/* Right side with title and paragraph taking 60% screen width on large screens */}
          <div className="lg:w-3/5 w-full pl-6 pr-6">
            <h2 className="text-3xl font-bold lg:mt-16">{title}</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify mt-2">
              {description}
            </p>
          </div>
        </div>

        {index < apiData.length - 1 && (
          <hr className="w-full flex mx-auto border border-blue-700" />
        )}
      </div>
    );
  });
};

export default ImageSlider;

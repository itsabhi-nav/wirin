"use client";
// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Gallery = () => {
//   const images = [
//     "images/construct1.png",
//     "images/construct2.png",
//     "images/construct3.png",
//     "images/construct4.png",
//     "images/construct5.png",
//   ];

//   return (
//     <div className="pl-4 pr-4 sm:pl-16 sm:pr-16 mx-auto w-full sm:w-7/10 lg:w-3/5">
//       <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-500 mt-8 mb-4 ml-8 text-center">
//         Gallery
//       </h2>
//       <Carousel
//         showArrows
//         autoPlay
//         infiniteLoop
//         renderArrowPrev={(onClickHandler, hasPrev, label) =>
//           hasPrev && (
//             <button
//               type="button"
//               onClick={onClickHandler}
//               title={label}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-white focus:outline-none"
//             >
//               {"<"}
//             </button>
//           )
//         }
//         renderArrowNext={(onClickHandler, hasNext, label) =>
//           hasNext && (
//             <button
//               type="button"
//               onClick={onClickHandler}
//               title={label}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-white focus:outline-none"
//             >
//               {">"}
//             </button>
//           )
//         }
//       >
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt={`Image ${index + 1}`} />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );

// };

// export default Gallery;
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = process.env.NEXT_PUBLIC_API_KEY;
        const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Add this line

        const response = await axios.get(
          `${apiUrl}/api/galleries?populate=*`, // Use the environment variable here
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        setImages(response.data.data[0]?.attributes?.gallery?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pl-4 pr-4 sm:pl-16 sm:pr-16 mx-auto w-full sm:w-7/10 lg:w-3/5">
      <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700 mt-8 mb-4 ml-8 text-center">
        Gallery
      </h2>
      <Carousel showArrows autoPlay infiniteLoop>
        {images.map((image) => {
          const { id, attributes } = image;
          const {
            name,
            width,
            height,
            formats: { thumbnail },
          } = attributes;

          // Construct the image URL
        const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}${thumbnail.url}`;

          return (
            <div key={id}>
              <img src={imageUrl} alt={name} width={width} height={height} />

              {/* Additional information can be displayed as needed */}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Gallery;

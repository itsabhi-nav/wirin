// import React from "react";

// const Contact = () => {
//   return <div>Contacts</div>;
// };

// export default Contact;


"use client";


import axios from "axios";
import React, { useEffect, useState } from "react";
     
const Products = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const authToken =
      "480eb70911e4b312b00ecbaac9c04d06b36fa5d3387a2b1a4be7c46fecbea205a5b625525664fd437b361a23658d7fb1e7e45019a819bfea9737e87e8e4401907b9f93f27fad4ec058308baa9e1fd843116b34ea14e2517fc36a1f6e6d900e5989ae53738f12e424ed65600b9a3a1b94dec20c1118733e8c2a3f83eb8dbf3a7f";

    axios
      .get("http://localhost:1337/api/tests?populate=*", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => setMyData(res.data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Product List - My Shop
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {myData.map((post) => {
              const { id, attributes } = post;
              const { title, description, Price, image } = attributes;

              // Construct the image URL
              const imageUrl = `http://localhost:1337${image.data.attributes.url}`;

              return (
                <div className="xl:w-1/4 md:w-1/2 p-4" key={id}>
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={imageUrl}
                      alt="content"
                    />
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {title}
                    </h2>
                    <p className="leading-relaxed text-base">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

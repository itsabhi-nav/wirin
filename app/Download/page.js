"use client";
// import { useState, useEffect } from "react";
// import axios from "axios";

// // Define the Download component
// const Download = () => {
//   // State variables
//   const [datasets, setDatasets] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     collegeName: "",
//   });
//   const [selectedDataset, setSelectedDataset] = useState(null);

//   // Function to open the form
//   const openForm = () => {
//     setShowForm(true);
//   };

//   // Function to close the form
//   const closeForm = () => {
//     setShowForm(false);
//     setSelectedDataset(null); // Reset selected dataset when form is closed
//   };

//   // Function to handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Fetch datasets from the API on component mount
//   useEffect(() => {
//     // Replace "YOUR_AUTH_TOKEN" with the appropriate token for fetching datasets
//     const authToken =
//       "9e8d1812210f8e0ce80ceff967f22a34704ecc77e013b703cb061418ef1ac00bb839beb58f46100754b332584e5db41ba742c75b0f2441019590b490be545200e74ec62126e953945d8798b1e5ce59dc44bfb5827bff8043d8082023acf48f036b1ca6800adf27d46dcaa1989f7434b6faebaa6a03e9f75b14a6d0510734d74d";

//     axios
//       .get("http://localhost:1337/api/downloads?populate=*", {
//         headers: {
//           Authorization: `Bearer ${authToken}`,
//         },
//       })
//       .then((res) => {
//         setDatasets(res.data.data);
//       })
//       .catch((error) => console.error("Error fetching datasets:", error));
//   }, []);

//   // Function to handle card click
//   const handleCardClick = (dataset) => {
//     setSelectedDataset(dataset);
//     openForm();
//   };

//   // Function to handle form submission
//   const handleSubmit = async () => {
//     try {
//       // Replace "YOUR_STRAPI_AUTH_TOKEN" with your actual authentication token for the Strapi backend
//       const authToken =
//         "9e8d1812210f8e0ce80ceff967f22a34704ecc77e013b703cb061418ef1ac00bb839beb58f46100754b332584e5db41ba742c75b0f2441019590b490be545200e74ec62126e953945d8798b1e5ce59dc44bfb5827bff8043d8082023acf48f036b1ca6800adf27d46dcaa1989f7434b6faebaa6a03e9f75b14a6d0510734d74d";

//       const response = await axios.post(
//         "http://localhost:1337/api/forms/",
//         {
//           data: formData,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );

//       console.log("Form submitted:", response.data);

//       // Redirect to the download link associated with the selected dataset after successful submission
//       if (selectedDataset) {
//         window.location.href = selectedDataset.attributes.downloadLink;
//       } else {
//         console.error("No dataset selected.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   // JSX for rendering the component
//   // JSX for rendering the component
//   return (
//     <div>
//       {/* New Section */}
//       <section className="w-full mx-auto">
//         <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700  mt-10 lg:pl-8 mb-4 ml-8">
//           Datasets Available
//         </h2>

//         <div className="mb-8">
//           <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-16 lg:pl-16 lg:w-90%">
//             The datasets for which you have not requested download permissions
//             are listed below. Click the download button to generate the download
//             token.
//           </p>
//         </div>
//       </section>
//       {/* Existing Section */}
//       <section className="text-gray-600 -mt-20 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-wrap -m-4">
//             {datasets.map((dataset) => {
//               const {
//                 id,
//                 attributes: {
//                   title,
//                   description,
//                   image: { data: imageArray },
//                   downloadLink,
//                 },
//               } = dataset;

//               const imageUrl = `http://localhost:1337${imageArray[0].attributes.url}`;

//               return (
//                 <div className="p-4 md:w-1/3" key={id}>
//                   <div
//                     className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col download-card"
//                     onClick={() => handleCardClick(dataset)}
//                   >
//                     <img
//                       className="lg:h-full md:h-full w-full object-cover object-center"
//                       src={imageUrl}
//                       alt={title}
//                     />
//                     <div className="p-6 flex-grow">
//                       <div className="mb-4">
//                         <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                           {title}
//                         </h1>
//                         <p className="leading-relaxed text-justify">
//                           {description}
//                         </p>
//                       </div>
//                       <div className="flex items-center justify-center mt-auto">
//                         <button
//                           onClick={openForm}
//                           className="text-indigo-500 inline-flex items-center bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
//                         >
//                           Download Now
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Form Modal */}

//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg relative">
//             <button
//               onClick={closeForm}
//               className="absolute top-2 right-2 text-gray-500 cursor-pointer"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="h-6 w-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//             <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full border-gray-300 rounded-md p-2"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full border-gray-300 rounded-md p-2"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="phoneNumber" className="block text-gray-700">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleInputChange}
//                   className="w-full border-gray-300 rounded-md p-2"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="collegeName" className="block text-gray-700">
//                   College Name
//                 </label>
//                 <input
//                   type="text"
//                   id="collegeName"
//                   name="collegeName"
//                   value={formData.collegeName}
//                   onChange={handleInputChange}
//                   className="w-full border-gray-300 rounded-md p-2"
//                 />
//               </div>

//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Export the component
// export default Download;

// Import necessary modules
import { useState, useEffect } from "react";
import axios from "axios";

// Define the Download component
const Download = () => {
  // State variables
  const [datasets, setDatasets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
  });
  const [selectedDataset, setSelectedDataset] = useState(null);

  // Function to open the form
  const openForm = () => {
    setShowForm(true);
  };

  // Function to close the form
  const closeForm = () => {
    setShowForm(false);
    setSelectedDataset(null); // Reset selected dataset when form is closed
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fetch datasets from the API on component mount
  useEffect(() => {
    // Replace "YOUR_AUTH_TOKEN" with the appropriate token for fetching datasets
    const authToken = process.env.NEXT_PUBLIC_API_KEY;

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/downloads?populate=*`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
        console.log("Datasets:", res.data.data);
        setDatasets(res.data.data);
      })
      .catch((error) => console.error("Error fetching datasets:", error));
  }, []);

  // Function to handle card click
  const handleCardClick = (dataset) => {
    setSelectedDataset(dataset);
    openForm();
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      const authToken = process.env.NEXT_PUBLIC_API_KEY;

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/forms/`,
        { data: formData },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log("Form submission response:", response.data);

      // Redirect to the download link associated with the selected dataset after successful submission
      if (selectedDataset) {
        window.location.href = selectedDataset.attributes.downloadLink;
      } else {
        console.error("No dataset selected.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // JSX for rendering the component
  return (
    <div>
      {/* Datasets Available Section */}
      <section className="w-full mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700 mt-10 lg:pl-8 mb-4 ml-8">
          Datasets Available
        </h2>

        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed text-justify pl-6 pr-6 lg:pr-16 lg:pl-16 lg:w-90%">
            The datasets for which you have not requested download permissions
            are listed below. Click the download button to generate the download
            token.
          </p>
        </div>
      </section>

      {/* Dataset Cards Section */}
      <section className="text-gray-600 -mt-20 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {datasets.map((dataset) => {
              const {
                id,
                attributes: {
                  title,
                  description,
                  image: { data: imageArray },
                  downloadLink,
                },
              } = dataset;

              const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}${imageArray[0].attributes.url}`;

              return (
                <div className="p-4 md:w-1/3" key={id}>
                  <div
                    className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col download-card"
                    onClick={() => handleCardClick(dataset)}
                  >
                    <img
                      className="lg:h-full md:h-full w-full object-cover object-center"
                      src={imageUrl}
                      alt={title}
                    />
                    <div className="p-6 flex-grow">
                      <div className="mb-4">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {title}
                        </h1>
                        <p className="leading-relaxed text-justify">
                          {description}
                        </p>
                      </div>
                      <div className="flex items-center justify-center mt-auto">
                        <button
                          onClick={openForm}
                          className="text-indigo-500 inline-flex items-center bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                          Download Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg relative">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-500 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
            <form>
              {/* Name Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Phone Number Input */}
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>

              {/* College Name Input */}
              <div className="mb-4">
                <label htmlFor="collegeName" className="block text-gray-700">
                  College Name
                </label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the component
export default Download;

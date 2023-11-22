import React from "react";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
      <p className="text-base mb-6">Your form has been submitted.</p>
      <p className="text-base mb-6">
        You will be redirected to the main web page in 5 seconds.
      </p>
      <p className="text-base">
        If you are not redirected automatically, please click{" "}
        <Link href="https://www.google.com">
          <a className="btn">here</a>
        </Link>
      </p>
    </div>
  );
};

export default ThankYouPage;

import React from "react";

const NewsletterSection = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-pink-500 via-red-400 to-orange-400 rounded-3xl text-white p-12 text-center">
      {/* Text Center */}
      <p className="uppercase tracking-widest text-sm font-medium">
        Get Newsletter
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        Sign Up to Newsletter
      </h2>
     

      {/* Input & Button (Below Text) */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="px-4 py-3 rounded-full text-gray-700 w-full sm:w-80 outline-none"
        />
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium w-full sm:w-auto">
          Subscribe Now →
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;

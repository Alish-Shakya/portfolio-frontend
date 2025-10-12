import React from "react";
import Info from "./Info";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row max-w-5xl w-full rounded-xl shadow-lg overflow-hidden">
        {/* Info Section */}
        <div className="md:w-1/2 p-8 md:mt-35 text-white">
          <Info />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 border-2 border-green-400 rounded-2xl ">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;

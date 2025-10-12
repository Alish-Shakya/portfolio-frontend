import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = {
      fullName: fullName,
      email: email,
      message: message,
    };
    try {
      let data = await axios({
        url: "http://localhost:5000/contact/create",
        method: "post",
        data: result,
      });
      console.log(data);
      alert("message sent successfully");
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="space-y-6">
      <ToastContainer theme="dark" />
      <div>
        <label htmlFor="fullName" className="block mb-2 font-semibold">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Hary"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          className="w-full px-4 py-3 rounded-md border border-green-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="example@gmail.com"
          className="w-full px-4 py-3 rounded-md border border-green-200 bg-green-50 text-black focus:outline-none focus:ring-2 focus:ring-green-300"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-semibold">
          Your Message
        </label>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id="message"
          name="message"
          placeholder="Write your message here..."
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-green-200 bg-green-50 text-black focus:outline-none focus:ring-2 focus:ring-green-300"
        />
      </div>

      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full py-3 bg-green-400 text-white font-bold rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

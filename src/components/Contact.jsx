import React from "react";

const Contact = () => {
  return (
    <div className="mb-20 mt-4 ">
      <div className="p-6 max-w-md mx-auto rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center  mb-8">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            placeholder="example@example.com"
            className="input input-bordered w-full max-w-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Subject</label>
          <input
            type="text"
            placeholder="Enter subject"
            className="input input-bordered w-full max-w-sm "
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Message</label>
          <textarea
            className="textarea textarea-bordered w-full max-w-sm"
            placeholder="Your message"
          ></textarea>
        </div>

        <div className="text-center mt-6">
          <button className="btn w-full max-w-sm">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

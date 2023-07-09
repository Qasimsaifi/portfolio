import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineFileText,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://backend.kasimsaifi.tech/api/v1/portfolio/contacts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset the form data
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          subject: "",
          message: "",
        });
        setIsLoading(false);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error occurred while submitting the form", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto md:px-6">
      <div className="flex justify-center items-center min-h-fit mt-28 mb-16 ">
      <div className="bg-gray-100 dark:bg-black p-8 rounded-lg shadow-lg w-full sm:max-w-md ">
        <h1 className="text-2xl font-bold mb-6">Send us a message</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
            
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Phone"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Message"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none"
            type="submit"
          >
            {isLoading ? "Sending" : "Send Message"}
          </button>
        </form>
      </div>
      </div>
      <section className="mb-32">
      <div className="block rounded-lg bg-gray-100 dark:bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <div className="flex flex-wrap items-center">
          <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <div className="h-[500px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3581444.865410429!2d77.9856!3d28.7642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b391a5c6f2a91%3A0x1044d040f5ef39e!2sGawan%20-%20Anupshahar%20Rd%2C%20Gawan%2C%20Uttar%20Pradesh%20243727!5e0!3m2!1sen!2sin!4v1688897821575!5m2!1sen!2sin"
                className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <AiOutlineInfoCircle className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Website Feedback
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      feedback@kasimsaifi.tech
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +91 9758334481
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <AiOutlineUser className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Partnerships
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      partnerships@kasimsaifi.tech
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +91 9758334481
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <AiOutlineTeam className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Collaborations
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      collaborations@kasimsaifi.tech
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +91 9758334481
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full shrink-0 grow-0 basis-auto px-3md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <AiOutlinePhone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      General Inquiries
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      info@kasimsaifi.tech
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      +91 9758334481
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactForm;

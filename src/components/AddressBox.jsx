import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlinePhone,
} from "react-icons/ai";

const AddressBox = () => {
  return (
    <div>
      {" "}
      <section className="mb-24 mt-4">
        <div className="block rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
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
                      <p className="mb-2 font-bold ">
                        Website Feedback
                      </p>
                      <p className="">
                        kasimthecoder@gmail.com
                      </p>
                      <p className="">
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
                      <p className="mb-2 font-bold ">
                        Partnerships
                      </p>
                      <p className="">
                        kasimthecoder@gmail.com
                      </p>
                      <p className="">
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
                      <p className="mb-2 font-bold ">
                        Collaborations
                      </p>
                      <p className="">
                        kasimthecoder@gmail.com
                      </p>
                      <p className="">
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
                      <p className="mb-2 font-bold ">
                        General Inquiries
                      </p>
                      <p className="">
                        kasimthecoder@gmail.com
                      </p>
                      <p className="">
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

export default AddressBox;

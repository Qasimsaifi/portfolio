import React from 'react';
import NavBar from '@/components/Navbar';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <NavBar />
      <section className="bg-white dark:bg-black mt-16">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mb-6 text-center">
              My Story
            </h1>
            <div className="flex items-center  justify-center mb-8">
              <Image
                src="/profile-image.png"
                alt="Profile Image"
                width={200}
                height={200}
                className="rounded-full border-solid border-2 border-purple-500 "
              />
            </div>
            <p className="text-gray-600 dark:text-white text-lg text-center mb-8">
              Hi there! I'm Qasim Saifi, a passionate web developer hailing from Gawan, a picturesque town nestled in Uttar Pradesh, India. With over 2 years of experience, I have devoted myself to mastering the art of web development and crafting extraordinary online experiences.
            </p>
            <p className="text-gray-600 dark:text-white text-lg text-center mb-8">
              Born in 2007, I grew up alongside the rapid evolution of the digital landscape. Fascinated by the boundless possibilities that technology presents, I am driven by an unwavering curiosity to create innovative and visually stunning websites that leave a lasting impact.
            </p>
            <p className="text-gray-600 dark:text-white text-lg text-center mb-8">
              My journey into web development began at a young age when I discovered the power of HTML and CSS. Since then, I have continued to expand my skill set, immersing myself in various front-end and back-end technologies such as JavaScript, React.js, Node.js, and more. This continuous learning has allowed me to stay at the forefront of industry trends and deliver cutting-edge solutions to my clients.
            </p>
            <p className="text-gray-600 dark:text-white text-lg text-center mb-8">
              Over the years, I have had the privilege of working on diverse projects, ranging from personal blogs to e-commerce platforms. Each project has provided me with invaluable experience and reinforced my belief in the transformative power of well-designed and functional websites. I take great pride in my ability to understand clients' unique requirements and translate them into visually appealing and user-friendly digital experiences.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-gray-800 mb-6">
              My Mission
            </h2>
            <p className="text-gray-600 dark:text-white text-lg mb-8">
              At our company, we are driven by a mission to empower individuals, entrepreneurs, and businesses to establish a remarkable online presence. We believe that every idea, no matter how big or small, deserves a platform to thrive. Our goal is to provide comprehensive web development services that are accessible, affordable, and tailored to our clients' unique needs.
            </p>
            <p className="text-gray-600 dark:text-white text-lg mb-8">
              We are committed to going above and beyond mere aesthetics. Our focus lies in creating websites that not only captivate visitors with stunning visuals but also engage and convert them into loyal customers. By incorporating the latest design trends, implementing seamless functionality, and optimizing for performance and search engine visibility, we ensure that our clients' websites stand out in today's competitive digital landscape.
            </p>
            <p className="text-gray-600 dark:text-white text-lg mb-8">
              Education and knowledge-sharing are at the core of our mission. We believe in the power of learning and continuously enhancing our skills. As part of our commitment to fostering a vibrant and inclusive developer community, we offer budget-friendly web development courses. These courses provide aspiring developers with the tools and guidance they need to embark on a successful career in web development.
            </p>
            <p className="text-gray-600 dark:text-white text-lg mb-8">
              Our ultimate aim is to make a positive impact by enabling individuals and businesses to thrive in the digital realm. We take pride in the long-term relationships we build with our clients, providing ongoing support and guidance as their online presence evolves. Together, we can shape the digital landscape, one exceptional website at a time.
            </p>
            
            {/* Add more sections or content as needed */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

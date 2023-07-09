import React from "react";
import NavBar from "@/components/Navbar";
import Head from "next/head";
import {
  FaUser,
  FaLightbulb,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdWeb } from "react-icons/md";
import Image from "next/image";
import FeatureSkills from "@/components/FeatureSkills";
import Link from "next/link";

const About = () => {
  return (
    <>
    <Head>
        <title>About Me</title>
      </Head>
      <NavBar />
      <section className="bg-white dark:bg-black mt-16">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-purple-500 mb-6 text-center">
              My Story
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="relative w-48 h-48 overflow-hidden inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-75 rounded-full">
                <Image
                  src="/profile-image.png"
                  alt="Your Photo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <p className="text-gray-600 dark:text-white text-lg text-center mb-8">
              Hi there! I'm Qasim Saifi, a passionate web developer hailing from
              Gawan, a picturesque town nestled in Uttar Pradesh, India. With
              over 2 years of experience, I have devoted myself to mastering the
              art of web development and crafting extraordinary online
              experiences.
            </p>
            <p className="text-gray-600 dark:text-white text-lg text-center mb-8">
              Born in 2007, I grew up alongside the rapid evolution of the
              digital landscape. Fascinated by the boundless possibilities that
              technology presents, I am driven by an unwavering curiosity to
              create innovative and visually stunning websites that leave a
              lasting impact.
            </p>
            <p className="text-gray-600 dark:text-white text-lg text-center mb-8">
              My journey into web development began at a young age when I
              discovered the power of HTML and CSS. Since then, I have continued
              to expand my skill set, immersing myself in various front-end and
              back-end technologies such as JavaScript, React.js, Node.js, and
              more. This continuous learning has allowed me to stay at the
              forefront of industry trends and deliver cutting-edge solutions to
              my clients.
            </p>
            <p className="text-gray-600 dark:text-white text-lg text-center mb-8">
              Over the years, I have had the privilege of working on diverse
              projects, ranging from personal blogs to e-commerce platforms.
              Each project has provided me with invaluable experience and
              reinforced my belief in the transformative power of well-designed
              and functional websites. I take great pride in my ability to
              understand clients' unique requirements and translate them into
              visually appealing and user-friendly digital experiences.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-purple-500 mb-6 mt-12">
              My Resume
            </h2>
            <div className="flex items-center mb-8">
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500  font-semibold border border-purple-500 hover:bg-purple-500 hover:text-white rounded-md py-3 px-6 transition duration-300 ease-in-out"
              >
                Download My Resume
              </Link>
            </div>

            <FeatureSkills />

            <h2 className="text-2xl md:text-3xl font-bold text-purple-500 mb-6 mt-6">
              My Mission
            </h2>
            <p className="text-gray-600 dark:text-white text-lg mb-8">
              At our company, we are driven by a mission to empower individuals,
              entrepreneurs, and businesses to establish a remarkable online
              presence. We believe that every idea, no matter how big or small,
              deserves a platform to thrive. Our goal is to provide
              comprehensive web development services that are accessible,
              affordable, and tailored to our clients' unique needs.
            </p>
            <div className="flex justify-center items-center space-x-12 mb-8">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center">
                <FaUser className="text-3xl text-white" />
              </div>
              <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center">
                <FaLightbulb className="text-3xl text-white" />
              </div>
              <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
            </div>
            <p className="text-gray-600 dark:text-white text-lg mb-8 text-center">
              As a web developer, I possess a diverse range of skills and
              qualities. These include:
            </p>
            <ul className="text-gray-600 dark:text-white text-lg mb-8 text-left list-disc list-inside ml-8">
              <li>Strong proficiency in HTML, CSS, and JavaScript</li>
              <li>
                Experience with modern web development frameworks React.js,
                Next.js, and Svelte
              </li>
              <li>
                Knowledge of server-side technologies like Node.js and Django
              </li>
              <li>
                Proficiency in Django REST Framework for building RESTful APIs
              </li>
              <li>Python programming skills for backend development</li>
              <li>
                Understanding of frontend development concepts and technologies
              </li>
              <li>Ability to work with databases and integrate APIs</li>
              <li>Problem-solving and debugging skills</li>
              <li>Attention to detail and a strong eye for design</li>
              <li>Effective communication and collaboration abilities</li>
              <li>Continuous learning and keeping up with industry trends</li>
              <li>Passion for creating exceptional user experiences</li>
            </ul>
            <p className="text-gray-600 dark:text-white text-lg mb-8 text-center">
              We are committed to going above and beyond mere aesthetics. Our
              focus lies in creating websites that not only captivate visitors
              with stunning visuals but also engage and convert them into loyal
              customers. By incorporating the latest design trends, implementing
              seamless functionality, and optimizing for performance and search
              engine visibility, we ensure that our clients' websites stand out
              in today's competitive digital landscape.
            </p>
            <div className="flex justify-center items-center space-x-12 mb-8">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center">
                <GiSkills className="text-3xl text-white" />
              </div>
              <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center">
                <MdWeb className="text-3xl text-white" />
              </div>
              <div className="w-16 h-16 bg-purple-500 rounded-full flex justify-center items-center">
                <FaLaptopCode className="text-3xl text-white" />
              </div>
            </div>
            <p className="text-gray-600 dark:text-white text-lg mb-8 text-center">
              Education and knowledge-sharing are at the core of our mission. We
              believe in the power of learning and continuously enhancing our
              skills. As part of our commitment to fostering a vibrant and
              inclusive developer community, we offer budget-friendly web
              development courses. These courses provide aspiring developers
              with the tools and guidance they need to embark on a successful
              career in web development.
            </p>
            <p className="text-gray-600 dark:text-white text-lg mb-8 text-center">
              Our ultimate aim is to make a positive impact by enabling
              individuals and businesses to thrive in the digital realm. We take
              pride in the long-term relationships we build with our clients,
              providingongoing support and guidance as their online presence
              evolves. Together, we can shape the digital landscape, one
              exceptional website at a time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

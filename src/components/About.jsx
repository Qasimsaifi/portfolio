import React from 'react';

function About() {
  return (
    <div className="py-12 mt-4 mb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold  mb-6">About Me</h2>
          <p className="text-lg">
            Hey there! I'm Kasim Saifi, a full-stack web developer based in the vibrant city of Uttar Pradesh, India. I'm passionate about crafting digital experiences that are not only beautiful but also functional.
          </p>
          <p className="text-lg mt-4">
            My journey in web development began with a fascination for creating interactive websites. Over the years, I've honed my skills in front-end technologies like HTML, CSS, and JavaScript, and I'm equally comfortable working on the back end with Python and Node.js.
          </p>
          <p className="text-lg mt-4">
            When I'm not coding, you can find me exploring the latest trends in web development, experimenting with new frameworks and libraries, or seeking inspiration from design and tech communities. I believe in the power of lifelong learning, and I'm always excited to take on new challenges.
          </p>
          <p className="text-lg mt-4">
            I'm here to bring your ideas to life and create web applications that leave a lasting impression. Let's collaborate and turn your vision into reality!
          </p>
          <div className="mt-8">
            <button className="btn">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

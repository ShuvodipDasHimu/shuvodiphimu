import React from 'react';
import { Link } from 'react-router';

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      {/* https://i.postimg.cc/BvcNS1mv/shuvodip.png */}
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://i.postimg.cc/BvcNS1mv/shuvodip.png"
      className="rounded-lg shadow-2xl max-w-3/5 md:max-w-8/12 px-8"
    />
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-center">Hello!</h1>
      <p className="py-6 text-xl md:text-2xl text-justify px-8">
        I’m Shuvodip Das Himu, a passionate Technologist and MERN Stack Developer dedicated to building efficient, scalable, and visually engaging web applications. Skilled in MongoDB, Express.js, React, Node.js, along with tools like Next.js, Firebase, and Tailwind CSS, I approach every project with a blend of creativity and technical precision. My goal is to craft solutions that not only solve problems but also inspire innovation and push the boundaries of what’s possible.
      </p>
      <Link className="ml-8 btn text-lg md:text-xl bg-white text-black py-6 btn-xs md:btn-md" target='_blank' to="https://flowcv.com/resume/8k7hsib1tvqn">View My Resume</Link>
    </div>
  </div>
</div>
  );
};

export default About;
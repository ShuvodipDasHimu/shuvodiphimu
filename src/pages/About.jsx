import React from 'react';

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      {/* https://i.postimg.cc/BvcNS1mv/shuvodip.png */}
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://i.postimg.cc/BvcNS1mv/shuvodip.png"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Hello!</h1>
      <p className="py-6 text-2xl text-justify">
        I’m Shuvodip Das Himu, a passionate Technologist and MERN Stack Developer dedicated to building efficient, scalable, and visually engaging web applications. Skilled in MongoDB, Express.js, React, Node.js, along with tools like Next.js, Firebase, and Tailwind CSS, I approach every project with a blend of creativity and technical precision. My goal is to craft solutions that not only solve problems but also inspire innovation and push the boundaries of what’s possible.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default About;About
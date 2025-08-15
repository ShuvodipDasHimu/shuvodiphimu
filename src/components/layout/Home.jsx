import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <img
        src={"https://i.postimg.cc/jqgTqD1v/Batman2.jpg"}
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        alt="Shuvodip Das Himu"
      />
      <div className="hero min-h-screen relative z-10 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={"https://i.postimg.cc/W3ZsxX5K/Me.jpg"}
            className="max-w-9/12 rounded-lg shadow-2xl"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Hi, I’m Shuvodip Das Himu 🥷</h1>
            <h2 className="text-2xl md:text-3xl font-semibold">Frontend Engineer 💻</h2>
            <p className="py-6 text-2xl w-2/3 text-center">
              I specialize in MERN Stack, JavaScript, React Router, Firebase,
              Tailwind CSS & daisyUI — crafting sleek, responsive, and
              user-focused web experiences.
            </p>
            <a href="mailto:shuvodipwork@gmail.com?subject=Hello%20Shuvodip&body=I%20want%20to%20get%20started">
              <Link
                to="/contact"
                className="btn text-xl bg-white text-black py-6"
              >
                Get In Touch
              </Link>
              {/* <button className="btn text-xl bg-sky-700 py-6">Get In Touch</button> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

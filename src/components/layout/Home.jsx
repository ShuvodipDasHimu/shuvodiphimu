import React from "react";

const Home = () => {
  return (
    <>
    <div>
      <img
        src="/src/assets/Batman2.jpg"
        className="absolute max-w-4/5 mx-auto opacity-40"
        alt="Shuvodip Das Himu"
      />
    </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={"https://i.postimg.cc/W3ZsxX5K/Me.jpg"}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Hi, I’m Shuvodip Das Himu</h1>
            <h2 className="text-3xl">💻 Frontend Engineer</h2>
            <p className="py-6 text-2xl w-2/3 text-justify">
               I specialize in MERN Stack, JavaScript, React Router, Firebase, Tailwind CSS & daisyUI — crafting sleek, responsive, and user-focused web experiences.
            </p>
            <button className="btn bg-sky-700">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
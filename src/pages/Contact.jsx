import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaGithub, FaDiscord, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebook className="text-blue-600 text-6xl" />,
      link: "https://www.facebook.com/shuvodipdashimuu",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-green-500 text-6xl" />,
      link: "https://wa.me/8801614043396",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-500 text-6xl" />,
      link: "https://instagram.com/shuvodipdashimuu",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800 text-6xl" />,
      link: "https://github.com/shuvodipdashimu",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin className="text-blue-600/100 text-6xl" />,
      link: "https://github.com/shuvodipdashimu",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-red-500 text-6xl" />,
      link: "mailto:shuvodipwork@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="max-w-6xl mx-auto px-4 md:mt-16">
        <h2 className="text-4xl font-bold text-center mb-10">Connect With Me</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card bg-base-100 shadow-xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <div>{social.icon}</div>
              <h3 className="text-lg font-semibold mt-4">{social.name}</h3>
            </a>
          ))}

          {/* Discord special card */}
          <div
            onClick={() => navigator.clipboard.writeText(".shuvodip")}
            title="Click to copy username"
            className="card bg-base-100 shadow-xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <FaDiscord className="text-indigo-500 text-6xl" />
            <h3 className="text-lg font-semibold mt-4">Discord</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
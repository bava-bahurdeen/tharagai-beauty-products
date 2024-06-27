import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const linksList = [
  {
    id: 1,
    name: "About Us",
    url: "#",
  },
  {
    id: 2,
    name: "Contact Us",
    url: "#",
  },
  {
    id: 3,
    name: "Best Deals",
    url: "#",
  },
  {
    id: 4,
    name: "FAQs",
    url: "#",
  },
];

const categoriesList = [
  {
    id: 1,
    name: "Bath & Body",
    url: "#",
  },
  {
    id: 2,
    name: "Skin Care",
    url: "#",
  },
  {
    id: 3,
    name: "Hair Care",
    url: "#",
  },
  {
    id: 4,
    name: "Face Wash & Packs",
    url: "#",
  },
  {
    id: 5,
    name: "Body Care & Soaps",
    url: "#",
  },
];

const socialList = [
  {
    id: 1,
    url: "",
    emoji: <FaInstagram />,
  },
  {
    id: 2,
    url: "",
    emoji: <FaFacebook />,
  },
  {
    id: 3,
    url: "",
    emoji: <FaTwitter />,
  },
  {
    id: 4,
    url: "",
    emoji: <FaYoutube />,
  },
];

export default function Footer() {
  return (
    <footer className="p-6 bg-white border-t border-borderLine">
      <section className="container mx-auto flex-wrap flex mb-10">
        <div className="w-[50%] md:w-[40%] lg:w-[20%]">
          <h1 className="font-medium text-xl mb-6">Useful Links</h1>
          <div className="flex flex-col gap-2">
            {linksList.map((link) => {
              return (
                <div key={link.id}>
                  <a
                    href={link.url}
                    className="font-hind text-sm  text-[#000000B3] hover:text-secondary"
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[50%] md:w-[40%] lg:w-[20%] ">
          <h1 className="font-medium text-xl mb-6">Categories</h1>
          <div className="flex flex-col gap-2">
            {categoriesList.map((link) => {
              return (
                <div key={link.id}>
                  <a
                    href={link.url}
                    className="font-hind text-[#000000B3] text-sm hover:text-secondary"
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[50%] md:w-[40%] lg:w-[20%] ">
          <h1 className="font-medium text-xl mb-6">Contact Us</h1>
          <p className="font-hind text-[#000000B3] text-sm hover:text-secondary">
            123 Fifth Avenue, New York,
            <br />
            NY 10160
          </p>
          <a
            href=""
            className="font-hind text-[#000000B3] text-sm hover:text-secondary"
          >
            929-242-6868
          </a>{" "}
          <br />
          <a
            href=""
            className="font-hind text-[#000000B3] text-sm hover:text-secondary"
          >
            contact@info.com
          </a>
          <ul className="flex gap-4 mt-5">
            {socialList.map((social) => {
              return (
                <li key={social.id}>
                  <a
                    href=""
                    className="font-hind text-xl text-secondary hover:text-success"
                  >
                    {social.emoji}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-[100%] md:w-[30%]  ">
          <h1 className="font-medium text-xl mb-6">Subscribe Now</h1>
          <input
            type="text"
            placeholder="Email"
            className="outline-0 border p-2 w-full mb-8"
          />

          <a
            href=""
            className="bg-secondary hover:bg-success text-white p-3 px-8 mt-5"
          >
            Submit
          </a>
        </div>
      </section>
    </footer>
  );
}

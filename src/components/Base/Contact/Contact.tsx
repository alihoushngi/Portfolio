import Image from "next/image";
import Link from "next/link";
import React from "react";

const myContact = [
  {
    name: "Instagram",
    logo: "/static/images/instagram.png",
    url: "https://instagram.com/alihoushngii?igshid=MmIzYWVlNDQ5Yg==",
  },
  {
    name: "Telegram",
    logo: "/static/images/telegram.png",
    url: "https://t.me/Alihoushangi",
  },
  {
    name: "Whatsapp",
    logo: "/static/images/whatsapp.png",
    url: "https://wa.me/message/6U2Z43SF4XZKB1",
  },
  {
    name: "Linkedin",
    logo: "/static/images/linkedin.png",
    url: "https://www.linkedin.com/in/blumy/",
  },
  {
    name: "Github",
    logo: "/static/images/github.png",
    url: "https://github.com/alihoushngi",
  },
  {
    name: "Phone",
    logo: "/static/images/call.png",
    url: "tel:+989039539334",
  },
];

const Contact = () => {
  return (
    <section className="flex flex-col min-h-screen justify-center" id="contact">
      <div className="bg-secondary m-24 rounded-xl h-full pt-12 pb-12">
        <h4 className="font-bold text-4xl text-center w-full pt-10 text-white ">
          Contact with me
        </h4>
        <div className="flex justify-center p-10">
          <div className="flex gap-8 flex-wrap justify-center">
            {myContact.map((data, index) => {
              return (
                <div key={index} className="flex gap-4 items-center">
                  <Link
                    href={data.url}
                    className="flex flex-col gap-4 items-center"
                    target="_blank"
                  >
                    <Image
                      src={data.logo}
                      alt={data.name}
                      width={120}
                      height={120}
                    />
                    <div className="flex flex-col text-white">
                      <span>{data.name}</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

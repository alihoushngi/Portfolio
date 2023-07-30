import React from "react";

const companies = [
  {
    name: "Khazar Informatic",
    date: "1397 - 1399",
    des: "lorem",
  },
  {
    name: "Nilasoft",
    date: "1399 - 1400",
    des: "lorem",
  },
  {
    name: "Pezhvak Dadeh Khazar",
    date: "1400 - 1401",
    des: "lorem",
  },
];

const About = () => {
  return (
    <section
      className="flex w-full flex-col min-h-screen p-28 text-secondary"
      id="about"
    >
      <div className="flex flex-shrink">
        <div className="w-[50%]">
          <h2 className="text-center text-[30px] uppercase font-bold mb-14">
            Evrything about me
          </h2>
          <span className="leading-8 text-lg ">
            👋 Greetings! I am an adventurous and dedicated Frontend Developer
            with a burning passion for all things web development. 🚀 With 3
            years of hands-on experience under my belt, I ve immersed myself in
            the enchanting realms of NextJs and Typescript, mastering the art of
            weaving intricate digital experiences.
            <br />
            <br />
            🛠️ Armed with my trusty tools like React, JavaScript, Bootstrap, and
            Sass, I ve honed my craft to perfection. My ultimate mission is to
            create responsive and eye-catching user interfaces that leave a
            lasting impression on every visitor.
            <br />
            <br />
            🌌 As a curious explorer of the digital landscape, I never stop
            learning. Each new challenge is an opportunity to discover more, to
            push my boundaries, and to grow as a developer. There is nothing
            more satisfying than transforming complex code conundrums into
            elegant solutions.
            <br />
            <br />
            🎯 My quest is to contribute my magical expertise to web projects
            that make a real impact, where innovation and creativity merge to
            cast a spell of enchantment on users.
          </span>
        </div>
        <div className="w-[50%]">
          <h2 className="text-center text-[30px] uppercase font-bold mb-14">
            Experincess
          </h2>
          <div className="flex gap-8 flex-col ps-28 pe-28">
            {companies.map((data, index) => {
              return (
                <div key={index}>
                  <div className="flex gap-3">
                    <span className="font-extralight text-xl bg-blue-500 w-8 h-8 rounded-[100%] text-center leading-8 text-white">
                      {index + 1}
                    </span>
                    <h4 className="font-medium text-4xl">{data.name}</h4>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-extralight text-gray-800 text-md">
                      {data.date}
                    </span>
                    <span className="font-medium text-xl">{data.des}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

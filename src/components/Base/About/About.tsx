import React from "react";

const companies = [
  {
    name: "Khazar Informatic",
    date: "1397 - 1399",
    des: "Khazar Informatic is a hardware repair and sales company located in Rasht. I have been working in this company as the Technical Department Manager, responsible for tasks such as installing Windows and software, as well as repairing and replacing hardware components and assembling computer cases.",
  },
  {
    name: "Nilasoft",
    date: "1399 - 1400",
    des: "Nilasoft is a web development and design company specializing in web development under various web programming platforms. They also engage in WordPress website design for their clients. My responsibility at the company was focused on WordPress website design, and I delivered fully customized websites to the clients.",
  },
  {
    name: "Pezhvak",
    date: "1400 - 1401",
    des: "Pajhwak is a web development and design company with several products. One of their products was related to urban and intercity transportation. I designed the website dashboard panel for this product called Pikaap I delivered this dashboard using ReactJS and Bootstrap. It was a great experience for me at the beginning of my programming journey.",
  },
];

const About = () => {
  return (
    <section
      className="md;min-h-screen md:pt-16 text-secondary w-[90%] mx-auto "
      id="about"
    >
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-center text-xl md:text-[30px] uppercase font-bold mb-11">
            Evrything about me
          </h1>
          <span className="leading-8 text-lg ">
            👩‍💻 As a frontend developer, I have been actively engaged in the
            field for the past three years, honing my skills and expanding my
            knowledge. Throughout my journey, I have immersed myself in various
            technologies, specializing in Next.js and TypeScript, which have
            become my forte.
            <br />
            <br />
            <span className="max-md:hidden">
              My expertise extends beyond these core technologies. I have
              garnered a deep understanding of React, mastering its nuances and
              utilizing it to build dynamic and responsive user interfaces.
              JavaScript has been the backbone of my coding endeavors, allowing
              me to craft interactive and seamless web experiences.
              <br />
              Moreover, I have harnessed the power of Bootstrap and Sass to
              enhance the visual appeal and aesthetics of web applications,
              ensuring they not only function impeccably but also look stunning.
              <br />
              One of the aspects I take immense pride in is my problem-solving
              acumen. My experience has equipped me with the ability to tackle
              complex challenges, identify bottlenecks, and devise elegant
              solutions. I am excited to take on new challenges, push
              boundaries, and continue evolving as a developer in this rapidly
              evolving tech landscape. 💻🚀
            </span>
          </span>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-center text-xl md:text-[30px] uppercase font-bold mb-11">
            Experincess
          </h2>
          <div className="flex gap-8 flex-col">
            {companies.map((data, index) => {
              return (
                <div key={index} className="flex gap-2 flex-col">
                  <div className="flex gap-3">
                    <span className="font-extralight text-md md:text-xl bg-secondary w-5 h-5 leading-5 md:w-8 md:h-8 rounded-[100%] text-center md:leading-8 text-white">
                      {index + 1}
                    </span>
                    <span className="font-medium md:text-4xl">{data.name}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-extralight text-sm text-gray-800 md:text-md">
                      {data.date}
                    </span>
                    <span className="font-light text-lg">{data.des}</span>
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

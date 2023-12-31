import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { projectType } from "@base/Projects/Projects";
import Image from "next/image";

interface ExCardProps {
  projectData: projectType[];
}

const ExCard: React.FC<ExCardProps> = ({ projectData }) => {
  return (
    <>
      <Swiper
        className="w-full h-full max-md:max-h-[200px]"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >: 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >: 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        // navigation
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {projectData.map((data, index) => {
          return (
            <SwiperSlide
              key={index}
              className="bg-secondary text-white rounded-lg h-full"
            >
              <div>
                <div>
                  <Image
                    src={data.photo}
                    alt={data.en_name}
                    width={400}
                    height={100}
                    className="rounded-ss-lg rounded-se-lg"
                  />
                </div>
                <div className="p-4 w-full">
                  <h5 className="text-xl mb-2">{data.en_name}</h5>
                  <span className="text-gray-100 font-thin text-md max-h-40 line-clamp-4">
                    {data.en_des}
                  </span>
                  <div className="flex justify-end w-full mt-3">
                    <span className="after:transition-all after:duration-300 after:ease-linear hover:text-primary after:border-b after:border-white after:w-full after:block after:scale-0 hover:after:scale-100 after:origin-left after:delay-150 text-sm">
                      Read more
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ExCard;

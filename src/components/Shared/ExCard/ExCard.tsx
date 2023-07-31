import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { projectType } from "@base/Projects/Projects";
import Image from "next/image";
import Link from "next/link";

interface ExCardProps {
  projectData: projectType[];
}

const ExCard: React.FC<ExCardProps> = ({ projectData }) => {
  return (
    <>
      <Swiper
        className="w-full h-full"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
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
              className="bg-secondary text-white rounded-lg "
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
                    <Link
                      href="#"
                      className="transition-all ease-linear p-2 text-sm hover:text-lg rounded-sm"
                    >
                      Read more ...
                    </Link>
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

import React, { useContext } from "react";
import img_1 from "../assets/image.png";
import img_2 from "../assets/slide1.jpg";
import img_3 from "../assets/slide2.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { contextApi } from "../AuthProvider/AuthContext";
import Loading from "./Loading";

const Slider = () => {
  const { loading } = useContext(contextApi);

  const slides = [
    {
      image: img_1,
      title: "Run for a Cause, Run for Glory",
      description:
        "Every step you take brings hope, change, and a brighter future for those in need. Join the journey!",
      buttonText: "Join the Race",
    },
    {
      image: img_2,
      title: "Push Your Limits, Inspire Others",
      description:
        "Challenge yourself and inspire your community to achieve greatness. Be part of something extraordinary.",
      buttonText: "Register Now",
    },
    {
      image: img_3,
      title: "Together, We Achieve More",
      description:
        "From personal triumphs to charitable milestones, this marathon unites us in purpose and spirit.",
      buttonText: "Learn More",
    },
  ];
  

  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-[400px] md:h-[500px] bg-cover"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4 ">
                  <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-white text-base md:text-lg mb-6">
                    {slide.description}
                  </p>
                  <button className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-600 transition">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
};

export default Slider;

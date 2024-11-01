import React from "react";

import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    id: 1,
    name: "Pegasus Jogja",
    company: "Kursus Sepatu Roda 2",
    imageUrl: "",
    testimoni:
      "Pelatihan sepatu roda sangat efektif dan instruktur sangat berpengalaman. Kursus ini benar-benar membantu saya meningkatkan keterampilan.",
  },
  {
    id: 2,
    name: "Cleanee",
    company: "Waste Management & Recycling",
    imageUrl: "",
    testimoni:
      "Cleanee sangat terbantu dengan solusi yang diberikan, membantu meningkatkan efisiensi operasional dalam pengelolaan limbah.",
  },
  {
    id: 3,
    name: "SMK Muhammadiyah Gamping",
    company: "Yogyakarta",
    imageUrl: "",
    testimoni:
      "Layanan dari GMT sangat memuaskan. Sistem yang dikembangkan sesuai dengan kebutuhan kami.",
  },
  {
    id: 4,
    name: "SMA Al-Ikhsan",
    company: "Bogor",
    imageUrl: "",
    testimoni:
      "Kami sangat berterima kasih atas layanan yang diberikan. Platform digital sangat membantu dalam proses pembelajaran.",
  },
];

export default function Testimonial() {
  return (
    <section className="container mx-auto">
      <Fade direction="up">
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Testimonials
        </h1>
      </Fade>
      <Fade direction="up" delay={500}>
        <p className="font-light text-lg text-gray-400 text-center mb-3 sm:mb-3 xl:mb-4">
          What they said about us.
        </p>
      </Fade>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex-col xl:w-full rounded-2xl shadow-xl sm:shadow-2xl border px-8 py-6 mx-2 mb-6 mt-6 xl:mx-auto sm:mx-6 sm:mb-12">
              <div className="flex items-center mb-5">
                <div className="flex-col pl-5">
                  <h2 className="text-theme-blue text-2xl">{item.name}</h2>
                  <p className="font-light text-gray-400">{item.company}</p>
                </div>
              </div>
              <p className="font-light text-2xl text-gray-400 pl-5 pt-3 pb-1">
                {item.testimoni}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

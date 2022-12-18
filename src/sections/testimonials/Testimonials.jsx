import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./testimonials.css";
import testimonials from "./data";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>What My Clients Say</h2>
      <p>These are unbiased testimonials from some of my clients</p>
      <div className="container">
        <Swiper
          // 모바일 기본으로해서 slidesPerView의 default를 1로
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            // 태블릿에선 slidesPerView를 2로,
            601: { slidesPerView: 2 },
            // PC에선 slidesPerView를 3으로
            1025: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

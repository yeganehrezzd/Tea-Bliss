import React from "react";
import styles from "../../../styles/Slider.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Slider() {
  return (
    <Swiper
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className={styles.swiper}
    >
      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: 'url("/images/slider-1.jpg")' }}
      >
        <div
          className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h1 className="display-1 text-white m-0">Tea Bliss</h1>
        </div>
      </SwiperSlide>

      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: 'url("/images/slider-2.jpg")' }}
      >
        <div
          className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h1 className="display-1 text-white m-0">Tea Bliss</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;

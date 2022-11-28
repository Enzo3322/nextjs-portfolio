import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./styles.module.scss";
import { useDeviceDetect } from "../../hooks/useDevice";
import { Autoplay } from "swiper";

export const Carousel = ({ items }) => {
  const { isMobile } = useDeviceDetect();
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={isMobile ? 3 : 5}
        className={styles.swiperContainer}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div>
              <picture className={styles.imgContainer}>
                <img src={item.url} alt="" />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

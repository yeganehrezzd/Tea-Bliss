import styles from "../../../styles/Product.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Comments = ({ data }) => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="section-title-bg text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            TESTIMONIAL
          </h4>
          <h1 className="display-4">What our Customers Say</h1>
        </div>
        <div className="row">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
            }}
            modules={[Pagination]}
            className={styles.swiper}
          >
            {data.length > 0 ? (
              data.slice(0, 6).map((comment) => (
                <SwiperSlide className={styles.swiper_slide} key={comment.id}>
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid"
                        width={100}
                        src={comment.profile}
                        alt={comment.username}
                      />
                      <div className="ml-3">
                        <h4>{comment.username}</h4>
                        <p className="text-left mb-0">Herbal Tea Lover</p>
                      </div>
                    </div>
                    <p className="m-0 mb-4">{comment.body}</p>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <div className="no-comments  section-title">
                <h4>There are no comments yet.</h4>
                <p>We would be happy if you would be the first to comment.</p>
              </div>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Comments;

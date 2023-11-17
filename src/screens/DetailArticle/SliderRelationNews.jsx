import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
} from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../node_modules/swiper/swiper-bundle.min.js";
import { SingleArticleDetail } from "./SingleArticleDetail";

import "../../../node_modules/swiper/modules/virtual";
import { useQuery } from "react-query";
// import { Virtual } from 'swiper/modules';

import { getAllNewsPure } from "../../core/services/api/news";
import { useNavigate } from "react-router-dom";


const SliderRelationNews = () => {
  const navigate = useNavigate();

  const { data, isLoading, status } = useQuery({
    queryKey: ["newsList"],
    queryFn: () => {
      return getAllNewsPure().then((data) => {
        console.log(data.news);
        return data;
      });
    },
  });

  return (
    <div className="px-2 pb-2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
        spaceBetween={50}
        breakpoints={{
          // when window width is >= 640px

          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={1}
        navigation={true}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        // scrollbar={{ draggable: true }}
      >
        <div className=" flex flex-row gap-16  ">
          { status === "success" && data.news?.map((card, index) => {
            return (
              <SwiperSlide key={card}>
                <SingleArticleDetail
                  key={index}
                  id={card.id}
                  title={card.title}
                  date={card.insertDate}
                  pic={card.currentImageAddressTumb}
                  onClick = {() => navigate("/NewsArticle/menudetail/" + card.id)}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};
export { SliderRelationNews };

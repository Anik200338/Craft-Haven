import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';

const Baner = () => {
  const { fakeData } = useLoaderData(); // Destructure 'estates' from the data fetched
  console.log(fakeData);
  return (
    <div data-aos="flip-left">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {fakeData.map(house => (
          <SwiperSlide house={house} key={house.id}>
            <div
              className="hero min-h-80 lg:h-[600px]  rounded-3xl "
              style={{
                backgroundImage: `url(${house.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="hero-overlay bg-opacity-40 rounded-3xl"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md animate__heartBeat">
                  <h1 className="mb-5 text-4xl font-bold">
                    <span className="text-[#6dd79f]">
                      Discover Exclusivity:
                    </span>
                    <br />
                    Luxury Real Estate at its Finest
                  </h1>
                  <p className="mb-5 text-xl">
                    Explore luxury living with our exclusive real estate
                    collection. From beachfront villas to opulent mansions,
                    discover unparalleled elegance.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Baner;

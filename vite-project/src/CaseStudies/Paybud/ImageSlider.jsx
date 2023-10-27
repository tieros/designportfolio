import Pay from './assets/Pay.png';
import Send from './assets/Send.png';
import Request from './assets/Request.png';
import Others from './assets/OtherScreens.png';
import Others2 from './assets/OtherScreens2.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ImageSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <img src={Pay} alt='Pay Screens' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Send} alt='Send Screens' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Request} alt='Request Screens' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Others} alt='Other Screens' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Others2} alt='Other Screens' />
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default ImageSlider;

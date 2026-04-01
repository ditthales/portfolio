import { useTranslation } from "react-i18next";
import FeedbackGui from "./components/FeedbackGui";
import MemojiFeedbacks from "./components/MemojiFeedbacks";
import { TestimonialInfo } from "./components/TestimonialsInfo";

import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Feedbacks = (_props: {windowWidth:number}) => {

    const { t } = useTranslation()

    const testimonials: TestimonialInfo[] = [
        {
            name: "Gui",
            text: "feedback_gui",
            imageUrl: "./foto_gui.png",
        },
        {
            name: "Migge",
            text: "feedback_migge",
            imageUrl: "./foto_migge.png",
        },
    ];

    return (
        <div className="flex flex-col gap-[24px]">
            <div className="flex flex-row justify-between">
                <h3 className=" font-semibold text-[28px]">{t('feedbacks')}</h3>
                <MemojiFeedbacks />
            </div>
            <Swiper className="container testimonials__container max-w-[720px] pb-8"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className='feedback'>
                        <FeedbackGui key={index} name={testimonial.name} text={t(testimonial.text)} imageUrl={testimonial.imageUrl} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>  
    )
}

export default Feedbacks;
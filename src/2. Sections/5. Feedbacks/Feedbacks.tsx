import { useTranslation } from "react-i18next";
import FeedbackGui from "./components/FeedbackGui";
import MemojiFeedbacks from "./components/MemojiFeedbacks";
import { useEffect, useState } from "react";
import { TestimonialInfo } from "./components/TestimonialsInfo";

import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Feedbacks = (props: {windowWidth:number}) => {

    const [infoLoaded, setInfoLoaded] = useState(false);
    const [testimonials, setTestimonials] = useState<TestimonialInfo[]>([]);

    const fetchFeedbacks = async (): Promise<TestimonialInfo[]> => {
        try {
            const response = await fetch(`https://portfolio-back-74d75b4d278b.herokuapp.com/getTestimonials`);
            const data: TestimonialInfo[] = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            return [];
        }
    }

    useEffect(() => {
        fetchFeedbacks().then((testimonials) => {
            setTestimonials(testimonials);
            setInfoLoaded(true);
        })
    }, [])

    const { t } = useTranslation()

        return infoLoaded ? (
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
        ) : (
            <p>Carregando...</p>
        )
}

export default Feedbacks;
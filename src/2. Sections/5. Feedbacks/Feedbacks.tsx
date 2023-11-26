import { useTranslation } from "react-i18next";
import FeedbackGui from "./components/FeedbackGui";
import MemojiFeedbacks from "./components/MemojiFeedbacks";
import Carousel from "./components/Carousel";
import { useEffect, useState } from "react";
import { TestimonialInfo } from "./components/TestimonialsInfo";


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
            console.error('Error fetching translations:', error);
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
                <Carousel>
                    {testimonials.map((testimonial, index) => (
                        <FeedbackGui key={index} name={testimonial.name} text={t(testimonial.text)} imageUrl={testimonial.imageUrl} />
                    ))}
                </Carousel>
            </div>  
        ) : (
            <p>Carregando...</p>
        )
}

export default Feedbacks;
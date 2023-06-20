import * as C from "../style/Style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselImgData {
    id: number;

    img: string;
}
interface CarouselData {
    id: number;
    name: string;
    background: string;
    img: CarouselImgData[];
    category: string;
    day: string;
    person: string;
    bold: string;
    about: string;
    skill: { id: number; name: string; color: string }[];
    myPart: {
        id?: number;
        name: string;
        content: { id: number; content: string }[];
    }[];
    review: { id: number; content: string }[];
}

interface CarouselProps {
    data: CarouselData;
}

export default function Carousel({ data }: CarouselProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <button type="button" className="slick-prev"></button>,
        nextArrow: <button type="button" className="slick-next"></button>,
    };

    return (
        <C.CarouselContainer {...settings} className="slider">
            {data.img.map((e: CarouselImgData) => {
                return <C.CarouselImg src={e.img} key={e.id} alt="왜안돼?" />;
            })}
        </C.CarouselContainer>
    );
}

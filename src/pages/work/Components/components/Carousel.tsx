import * as C from "../style/Style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ data }: any) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <button type="button" className="slick-prev"></button>,
        nextArrow: <button type="button" className="slick-next"></button>,
    };
    console.log(data.img.map((e: any) => e.img));

    return (
        <C.CarouselContainer {...settings} className="slider">
            {data.img.map((e: any) => {
                return <C.CarouselImg src={e.img} key={e.id} alt="왜안돼?" />;
            })}
        </C.CarouselContainer>
    );
}

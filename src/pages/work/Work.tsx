import * as W from "./Style.js";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TITLE from "./data/title.json";

interface WorkProps {
    onMoveMain: () => void;
}

const Work = ({ onMoveMain }: WorkProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <button type="button" className="slick-prev"></button>,
        nextArrow: <button type="button" className="slick-next"></button>,
    };
    return (
        <>
            <W.Container>
                {TITLE.map((e) => {
                    return (
                        <W.WorkBox key={e.id}>
                            <W.Background
                                onClick={
                                    e.small === "Portfolio"
                                        ? onMoveMain || (() => {})
                                        : undefined
                                }
                                style={{ backgroundImage: `url(${e.img})` }}
                            >
                                <Link to={e.link}>
                                    <W.Gif src={e.src} />
                                </Link>
                            </W.Background>
                            <W.BigTitle>{e.big}</W.BigTitle>
                            <W.SmallTitle>{e.small}</W.SmallTitle>
                        </W.WorkBox>
                    );
                })}
            </W.Container>
            <W.Mobile {...settings}>
                {TITLE.map((e) => {
                    return (
                        <W.WorkBox key={e.id}>
                            <W.Background
                                onClick={
                                    e.small === "Portfolio"
                                        ? onMoveMain || (() => {})
                                        : undefined
                                }
                            >
                                <Link to={e.link}>
                                    <W.Gif src={e.Msrc} alt="" />
                                </Link>
                            </W.Background>
                            <W.BigTitle>{e.big}</W.BigTitle>
                            <W.SmallTitle>{e.small}</W.SmallTitle>
                        </W.WorkBox>
                    );
                })}
            </W.Mobile>
        </>
    );
};
export default Work;

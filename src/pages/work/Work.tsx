import { motion } from "framer-motion";
import styled from "styled-components";
import Dwae from "../../asset/img/dwae-gitarian.gif";
import Petwithu from "../../asset/img/petwithu.gif";
import Smartinside from "../../asset/img/smartinside.gif";
import DwaeP from "../../asset/img/dweaP.png";
import PetP from "../../asset/img/petP.png";
import SmartP from "../../asset/img/smartP.png";
import { Link } from "react-router-dom";

const Container = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    width: 70vw;
    height: 70vh;
    border: 1px solid #fff;
    z-index: 10;
`;
const WorkBox = styled.div`
    width: 50%;
    height: 50%;
    border: 1px solid #fff;
    background-color: rgb(0, 0, 0, 0.7);
    transition: all ease-in-out 0.3s;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    p {
        position: absolute;
    }
    &:hover {
        background-color: transparent;
        p {
            display: none;
        }
        section {
            opacity: 1;
            img {
                display: block;
            }
        }
    }
`;
const BigTitle = styled.p`
    font-family: "monoton";
    font-size: 3.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const SmallTitle = styled.p`
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
    font-family: "sunflower";
    font-weight: 700;
    margin-top: 10px;
    top: 60%;
`;

const Background = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
    opacity: 0.5;
    background: no-repeat center center;
    background-size: 100% 100%;
`;
const Gif = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
`;
const Work = ({ onMoveMain }: any) => {
    return (
        <Container>
            {TITLE.map((e) => {
                return (
                    <WorkBox key={e.id}>
                        <Background
                            onClick={
                                e.small === "Portfolio" ? onMoveMain : null
                            }
                            style={{ backgroundImage: `url(${e.img})` }}
                        >
                            <Link to={e.link}>
                                <Gif src={e.src} alt="" />
                            </Link>
                        </Background>
                        <BigTitle>{e.big}</BigTitle>
                        <SmallTitle>{e.small}</SmallTitle>
                    </WorkBox>
                );
            })}
        </Container>
    );
};
export default Work;
const TITLE = [
    {
        id: 1,
        big: "WEB",
        small: "Dae-Getaian",
        src: Dwae,
        img: DwaeP,
        link: "/dt",
    },
    {
        id: 2,
        big: "WEB",
        small: "Pet With U",
        src: Petwithu,
        img: PetP,
        link: "/pw",
    },
    {
        id: 3,
        big: "WEB",
        small: "SmartInside-Internship",
        src: Smartinside,
        img: SmartP,
        link: "/intern",
    },

    {
        id: 4,
        big: "WEB",
        small: "Portfolio",
        link: "/",
    },
];

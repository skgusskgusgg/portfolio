import styled from "styled-components";
import { motion } from "framer-motion";
import Slider from "react-slick";

export const Container = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    width: 70vw;
    height: 70vh;
    border: 1px solid #fff;
    z-index: 10;
    @media screen and (max-width: 992px) {
        display: none;
    }

    @media screen and (min-width: 992px) {
        display: flex;
    }
`;
export const Mobile = styled(Slider)`
    @media screen and (min-width: 992px) {
        display: none;
    }

    @media screen and (max-width: 992px) {
        display: flex;
        z-index: 100;
        width: 70vw;
        height: 70vh;
        .slick-list {
            width: 100%;
            height: 100%;
        }
        .slick-track {
            width: 100%;
            height: 100%;
        }
        .slick-slide {
            div {
                height: 100%;
            }
        }
        .slick-dots {
            bottom: -35px;
            display: flex;
            justify-content: center;
            width: 100%;
        }
    }
`;
export const WorkBox = styled.div`
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
export const BigTitle = styled.p`
    font-family: "monoton";
    font-size: 3.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const SmallTitle = styled.p`
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
    font-family: "sunflower";
    font-weight: 700;
    margin-top: 10px;
    top: 60%;
`;

export const Background = styled.section`
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
export const Gif = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
`;

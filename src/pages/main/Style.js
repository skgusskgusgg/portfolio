import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg:first-child {
        font-size: 50px;

        @media screen and (max-width: 992px) {
            font-size: 40px;
        }
    }
`;
export const dash = keyframes`
    to{
        stroke-dashoffset: 0;
        fill: transparent;
    }
    from{
        fill: transparent;
    }
`;
export const fill = keyframes`
    0%,50% { fill: #fff; fill-opacity: 0; }
    90% { fill: #fff; fill-opacity: 1; }
    100% { fill: #fff; fill-opacity: 1; }
`;

export const Line = styled.svg`
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation: ${dash} 7s linear infinite, ${fill} 7s ease-in forwards infinite;
    font-size: 100px;
    font-family: ${(props) => props.theme["animation-font"]};
    margin-bottom: 10px;
    @media screen and (max-width: 992px) {
        font-size: 80px;
    }
`;

export const Text = styled.text``;

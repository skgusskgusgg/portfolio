import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #015c92;
    transition: ease-in-out 0.5s;

    div {
        ::selection {
            background: #fff;
            color: #000;
        }
    }
`;

export const Wrapper = styled(motion.div)`
    width: 100%;
`;
export const DivBox = styled(motion.div)`
    .div {
        width: 70vw;
        height: 70vh;
        border: 1px solid #fff;
        z-index: 10;
        transition: all ease-in-out 0.5s;
        &:hover {
            background-color: #000;
            border: 1px solid #000;
        }
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

export const varints = {
    entry: {
        opacity: 0,
        transition: { duration: 0.5, delay: 0.5 },
    },
    while: {
        opacity: 1,
        transition: { duration: 0.5, delay: 0.5 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5, delay: 0.5 },
    },
};

export const changeColor = [
    "#015c92",
    "#053c5e",
    "#cd9489",
    "#1f2933",
    "#85a3c5",
];

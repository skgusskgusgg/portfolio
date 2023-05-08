import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    button {
        border: none;
        background-color: inherit;
        color: #fff;
        font-weight: 300;
        font-size: 18px;
        font-family: ${(props) => props.theme["main-font"]};
    }
`;
const MainBtn = styled(motion.button)``;
const WorkBtn = styled(motion.button)``;
export default function Nav({ onMoveMain, onMoveWork }: any) {
    return (
        <Container>
            <MainBtn onClick={onMoveMain}>Main</MainBtn>
            <WorkBtn onClick={onMoveWork}>Work</WorkBtn>
        </Container>
    );
}

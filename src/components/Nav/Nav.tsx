import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
`;
export default function Nav({ onMoveMain, onMoveWork }: any) {
    return (
        <Container>
            <button onClick={onMoveMain}>Main</button>
            <button onClick={onMoveWork}>Work</button>
        </Container>
    );
}

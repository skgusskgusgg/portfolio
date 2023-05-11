import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
    height: 100vh;
`;

export default function Connect() {
    return <Container className="div">Connect</Container>;
}

import { motion } from "framer-motion";
import React, { forwardRef } from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
    height: 100vh;
`;
interface RefProps {
    ref: React.Ref<HTMLDivElement>;
}

const Work = () => {
    return <Container className="div">Work</Container>;
};
export default Work;

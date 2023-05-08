import { motion } from "framer-motion";
import { forwardRef } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled(motion.div)`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg:first-child {
        font-size: 50px;
    }
`;
const dash = keyframes`
    to{
        stroke-dashoffset: 0;
        fill: transparent;
    }
    from{
        fill: transparent;
    }
`;
const fill = keyframes`
    0%,50% { fill: #fff; fill-opacity: 0; }
    90% { fill: #fff; fill-opacity: 1; }
    100% { fill: #fff; fill-opacity: 1; }
`;

const Line = styled.svg`
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
    animation: ${dash} 7s linear infinite, ${fill} 7s ease-in forwards infinite;
    font-size: 100px;
    font-family: ${(props) => props.theme["animation-font"]};
    margin-bottom: 10px;
`;

const Text = styled.text``;

interface RefProps {
    ref: React.Ref<HTMLDivElement>;
}

const Main = () => {
    return (
        <Container>
            <Line height="100" stroke="#fff" strokeWidth="1" width="100%">
                <Text
                    x="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    y="50%"
                >
                    KwonNaHyun's
                </Text>
            </Line>
            <Line height="100" stroke="#fff" strokeWidth="1" width="100%">
                <Text
                    x="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    y="60%"
                >
                    Portfolio
                </Text>
            </Line>
        </Container>
    );
};
export default Main;

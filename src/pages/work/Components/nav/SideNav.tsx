import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    margin: 0 auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
const BtnBox = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
    border: 1px solid #fff;
    background-color: inherit;
    border-top: none;
    padding: 10px;
    transition: ease-in-out 0.3s all;
    background-color: #000;
    &:hover {
        border: 1px solid #000;
        border-top: none;
    }
`;
const Btn = styled(motion.div)`
    border: none;
    background-color: inherit;
    color: #fff;
    font-weight: 100;
    font-size: 16px;
    font-family: ${(props) => props.theme["point-font"]};
    cursor: pointer;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: all 0.5s ease-in-out;
    }
    &:hover::after {
        width: 100%;
    }
`;

export default function SideNav() {
    return (
        <Container>
            <BtnBox>
                <Btn>
                    <Link to={"/"}>KWON NA HYUN</Link>
                </Btn>
            </BtnBox>
        </Container>
    );
}

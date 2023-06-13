import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
export const BtnBox = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
    border: 1px solid #fff;
    background-color: inherit;
    border-top: none;
    padding: 10px;
    transition: ease-in-out 0.3s all;
    &:hover {
        background-color: #000;
        border: 1px solid #000;
        border-top: none;
    }
`;
export const Btn = styled(motion.div)`
    border: none;
    background-color: inherit;
    color: #fff;
    font-weight: 100;
    font-size: 16px;
    font-family: ${(props) => props.theme["point-font"]};
    cursor: pointer;
    position: relative;

    @media screen and (max-width: 992px) {
        font-size: 0.8rem;
    }

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
export const blink = keyframes`
      0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  } 
`;
export const ScrollBox = styled.div`
    position: absolute;
    bottom: 8%;
    left: 50%;
    z-index: 2;
    display: inline-block;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    color: #fff;
    font: sans-serif;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: opacity 0.3s;
    span {
        position: absolute;
        top: 0;
        left: 50%;
        width: 15px;
        height: 15px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        -webkit-animation: ${blink} 2s infinite;
        animation: ${blink} 2s infinite;
        opacity: 0;
        box-sizing: border-box;
    }
    span:nth-of-type(1) {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }
    span:nth-of-type(2) {
        top: 13px;
        -webkit-animation-delay: 0.15s;
        animation-delay: 0.15s;
    }
    span:nth-of-type(3) {
        top: 26px;
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }
`;

import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const Container = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100vh;
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
    &:hover {
        background-color: #000;
        border: 1px solid #000;
        border-top: none;
    }
    .active {
        color: #000;
    }
`;
const Btn = styled(motion.div)`
    border: none;
    /* background-color: inherit; */
    color: #fff;
    font-weight: 100;
    font-size: 16px;
    font-family: ${(props) => props.theme["main-font"]};
    cursor: pointer;
`;
const blink = keyframes`
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
const ScrollBox = styled.div`
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

export default function Nav({
    onMoveMain,
    onMoveWork,
    onMoveIntro,
    onMoveConnect,
}: any) {
    const BTN = [
        {
            id: 1,
            name: "KWON NA HYUN",
            click: onMoveMain,
        },
        {
            id: 2,
            name: "ABOUT",
            click: onMoveIntro,
        },
        {
            id: 3,
            name: "WORK",
            click: onMoveWork,
        },
        {
            id: 4,
            name: "CONNECT",
            click: onMoveConnect,
        },
    ];

    return (
        <Container>
            <BtnBox>
                {BTN.map((e) => {
                    return (
                        <Btn key={e.id} onClick={e.click}>
                            {e.name}
                        </Btn>
                    );
                })}
            </BtnBox>
            <ScrollBox>
                <span></span>
                <span></span>
                <span></span>
            </ScrollBox>
        </Container>
    );
}

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Main from "../pages/main/Main";
import Introdution from "../pages/introdution/Introdution";
import Work from "../pages/work/Work";
import Connect from "../pages/connect/Connect";
import Nav from "./Nav/Nav";

const Cotainer = styled(motion.div)`
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

const Wrapper = styled(motion.div)`
    width: 100%;
`;
const DivBox = styled(motion.div)`
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

const varints = {
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
const changeColor = ["#015c92", "#053c5e", "#cd9489", "#1f2933", "#85a3c5"];

export default function Container() {
    const bgRef = useRef<HTMLDivElement>(null);
    const [scrollValue, setScrollValue] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const [dateNow, setDateNow] = useState(Date.now());
    const mainRef = useRef<HTMLDivElement>(null);
    const workRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const connectRef = useRef<HTMLDivElement>(null);

    const onMoveMain = () => {
        mainRef.current?.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
    };

    const onMoveWork = () => {
        workRef.current?.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
    };
    const onMoveIntro = () => {
        introRef.current?.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
    };
    const onMoveConnect = () => {
        connectRef.current?.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });
    };
    const handleChangecolor = (e: Event) => {
        const target = e.target as Window;
        const { scrollY } = target;
        setScrollValue(scrollValue + scrollY * 0.01);
        const timePassed = Date.now() - dateNow;

        if (timePassed > 1000 && scrollValue > 5) {
            setDateNow(Date.now());
            setColorIndex((prev) => prev + 1);
            if (bgRef.current) {
                bgRef.current.style.backgroundColor =
                    changeColor[colorIndex % changeColor.length];
            }
            setScrollValue(0);
            if (colorIndex > changeColor.length - 1) {
                setColorIndex(0);
            }
        }
        if (timePassed > 1000 && scrollValue < 5) {
            setDateNow(Date.now());
            setColorIndex((prev) => prev - 1);
            if (colorIndex < 0) {
                setColorIndex(changeColor.length - 1);
            }
            if (bgRef.current) {
                bgRef.current.style.backgroundColor =
                    changeColor[colorIndex % changeColor.length];
            }
            setScrollValue(0);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleChangecolor);
        return () => {
            window.removeEventListener("scroll", handleChangecolor);
        };
    }, [colorIndex]);

    return (
        <>
            <Nav
                onMoveMain={onMoveMain}
                onMoveWork={onMoveWork}
                onMoveIntro={onMoveIntro}
                onMoveConnect={onMoveConnect}
            />
            <Cotainer ref={bgRef}>
                <Wrapper>
                    <motion.div
                        variants={varints}
                        initial="entry"
                        whileInView="while"
                        exit="exit"
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        ref={mainRef}
                    >
                        <Main />
                    </motion.div>
                    <DivBox
                        variants={varints}
                        initial="entry"
                        whileInView="while"
                        exit="exit"
                        ref={introRef}
                    >
                        <Introdution />
                    </DivBox>
                    <DivBox
                        variants={varints}
                        initial="entry"
                        whileInView="while"
                        exit="exit"
                        ref={workRef}
                    >
                        <Work onMoveMain={onMoveMain} />
                    </DivBox>
                    <DivBox
                        variants={varints}
                        initial="entry"
                        whileInView="while"
                        exit="exit"
                        ref={connectRef}
                    >
                        <Connect />
                    </DivBox>
                </Wrapper>
            </Cotainer>
        </>
    );
}

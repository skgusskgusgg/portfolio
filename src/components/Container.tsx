import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Main from "../pages/main/Main";
import Introdution from "../pages/introdution/Introdution";
import Work from "../pages/work/Work";
import Connect from "../pages/connect/Connect";
import Nav from "./Nav/Nav";

const Cotainer = styled(motion.div)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    scroll-snap-align: center;
    perspective: 500px;
    background-color: #015c92;
    transition: ease-in-out 0.5s;
`;

const Wrapper = styled(motion.div)`
    position: relative;
    max-height: 90vh;
    width: 70%;
    height: 400px;
    overflow: hidden;
    margin: 20px;
`;

const varints = {
    entry: {
        opacity: 0,
    },
    while: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5 },
    },
};
const changeColor = ["#015c92", "#053c5e", "#cd9489", "#1f2933", "#85a3c5"];

export default function Container({ id }: { id: number }) {
    const motionRef = useRef(null);
    const bgRef = useRef<any>(null);
    const [scrollValue, setScrollValue] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const [dateNow, setDateNow] = useState(Date.now());

    const handleChangecolor = (e: any) => {
        setScrollValue(scrollValue + e.currentTarget.scrollY * 0.01);
        const timePassed = Date.now() - dateNow;
        console.log(e);

        if (timePassed > 1000 && scrollValue > 5) {
            setDateNow(Date.now());
            setColorIndex((prev) => prev + 1);
            bgRef.current.style.backgroundColor = changeColor[colorIndex];
            setScrollValue(0);
            console.log(colorIndex);
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
            bgRef.current.style.backgroundColor = changeColor[colorIndex];
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
            <Nav />
            <Cotainer ref={bgRef} key={id}>
                <Wrapper ref={motionRef}>
                    {id === 1 ? (
                        <motion.div
                            variants={varints}
                            initial="entry"
                            whileInView="while"
                            exit="exit"
                        >
                            <Main />
                        </motion.div>
                    ) : id === 2 ? (
                        <motion.div
                            variants={varints}
                            initial="entry"
                            whileInView="while"
                            exit="exit"
                        >
                            <Introdution />
                        </motion.div>
                    ) : id === 3 ? (
                        <motion.div
                            variants={varints}
                            initial="entry"
                            whileInView="while"
                            exit="exit"
                        >
                            <Work />
                        </motion.div>
                    ) : id === 4 ? (
                        <motion.div
                            variants={varints}
                            initial="entry"
                            whileInView="while"
                            exit="exit"
                        >
                            <Connect />
                        </motion.div>
                    ) : null}
                </Wrapper>
            </Cotainer>
        </>
    );
}

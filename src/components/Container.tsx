import { useEffect, useRef, useState } from "react";
import * as C from "./style";
import Nav from "./Nav/Nav";
import SectionMain from "./SectionMain";
import SectionIntroduction from "./SectionIntroduction";
import SectionWork from "./SectionWork";
import SectionConntect from "./SectionConntect";

export default function Container() {
    const bgRef = useRef<HTMLDivElement>(null);
    const [scrollValue, setScrollValue] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const [dateNow, setDateNow] = useState(Date.now());
    const sectionRefs = {
        mainRef: useRef(null),
        workRef: useRef(null),
        introRef: useRef(null),
        connectRef: useRef(null),
    };
    const onMove = (ref: any) => {
        ref.current?.scrollIntoView({
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
                    C.changeColor[colorIndex % C.changeColor.length];
            }
            setScrollValue(0);
            if (colorIndex > C.changeColor.length - 1) {
                setColorIndex(0);
            }
        }
        if (timePassed > 1000 && scrollValue < 5) {
            setDateNow(Date.now());
            setColorIndex((prev) => prev - 1);
            if (colorIndex < 0) {
                setColorIndex(C.changeColor.length - 1);
            }
            if (bgRef.current) {
                bgRef.current.style.backgroundColor =
                    C.changeColor[colorIndex % C.changeColor.length];
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
                onMoveMain={() => onMove(sectionRefs.mainRef)}
                onMoveWork={() => onMove(sectionRefs.workRef)}
                onMoveIntro={() => onMove(sectionRefs.introRef)}
                onMoveConnect={() => onMove(sectionRefs.connectRef)}
            />
            <C.Container ref={bgRef}>
                <C.Wrapper>
                    <SectionMain ref={sectionRefs.mainRef} />
                    <SectionIntroduction ref={sectionRefs.introRef} />
                    <SectionWork
                        ref={sectionRefs.workRef}
                        onMoveMain={() => onMove(sectionRefs.mainRef)}
                    />
                    <SectionConntect ref={sectionRefs.connectRef} />
                </C.Wrapper>
            </C.Container>
        </>
    );
}

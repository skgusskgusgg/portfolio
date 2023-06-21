import React from "react";
import * as C from "./style";
import Introdution from "../pages/introdution/Introdution";

interface SectionIntroProps {
    ref: React.RefObject<HTMLDivElement>;
}

const SectionIntroduction = React.forwardRef<HTMLDivElement, SectionIntroProps>(
    (props, ref) => {
        return (
            <C.DivBox
                ref={ref}
                variants={C.varints}
                initial="entry"
                whileInView="while"
                exit="exit"
            >
                <Introdution />
            </C.DivBox>
        );
    }
);
export default SectionIntroduction;

import React from "react";
import * as C from "./style";
import Connect from "../pages/connect/Connect";

interface SectionConnectProps {
    ref: React.RefObject<HTMLDivElement>;
}

const SectionConntect = React.forwardRef<HTMLDivElement, SectionConnectProps>(
    (props, ref) => {
        return (
            <C.DivBox
                ref={ref}
                variants={C.varints}
                initial="entry"
                whileInView="while"
                exit="exit"
            >
                <Connect />
            </C.DivBox>
        );
    }
);
export default SectionConntect;

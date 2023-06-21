import React from "react";
import * as C from "./style";
import Work from "../pages/work/Work";

interface SectrionWorkProps {
    onMoveMain: () => void;
    ref: React.RefObject<HTMLDivElement>;
}

const SectionWork = React.forwardRef<HTMLDivElement, SectrionWorkProps>(
    ({ onMoveMain }, ref) => {
        return (
            <C.DivBox
                ref={ref}
                variants={C.varints}
                initial="entry"
                whileInView="while"
                exit="exit"
            >
                <Work onMoveMain={onMoveMain} />
            </C.DivBox>
        );
    }
);
export default SectionWork;

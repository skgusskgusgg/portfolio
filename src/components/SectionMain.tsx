import React from "react";
import { motion } from "framer-motion";
import * as C from "./style.js";
import Main from "../pages/main/Main";

interface SectionMainProps {
    ref: React.RefObject<HTMLDivElement>;
}

const SectionMain = React.forwardRef<HTMLDivElement, SectionMainProps>(
    (props, ref) => {
        return (
            <motion.div
                ref={ref}
                variants={C.varints}
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
            >
                <Main />
            </motion.div>
        );
    }
);
export default SectionMain;

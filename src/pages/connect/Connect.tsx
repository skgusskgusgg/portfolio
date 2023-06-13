import { motion } from "framer-motion";
import styled from "styled-components";

const GIT_URL = "https://github.com/skgusskgusgg?tab=repositories";
const Container = styled(motion.div)`
    height: 100vh;
    position: relative;
    padding: 30px;

    div {
        position: absolute;

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
        @media screen and (max-width: 992px) {
            font-size: 20px;
        }
        &:first-of-type {
            @media screen and (max-width: 992px) {
                font-size: 1.2em;
            }
        }
    }
`;
const Title = styled.div`
    font-family: ${(props) => props.theme["point-font"]};
    font-size: 1.5rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
const Email = styled.div`
    top: 30%;
    left: 50%;
    font-size: 30px;
    transform: translateX(-50%);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    a {
    }
`;
const Phone = styled.div`
    top: 50%;
    left: 50%;
    font-size: 30px;
    transform: translateX(-50%);
`;
const Git = styled.div`
    top: 70%;
    left: 50%;
    font-size: 30px;
    transform: translateX(-50%);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export default function Connect() {
    return (
        <Container className="div">
            <Title>CONTACT</Title>
            <Phone>010 4353 4244</Phone>
            <Email>
                <a href="mailto:rnjsskgus4244@gmail.com">
                    rnjsskgus4244@gmail.com
                </a>
            </Email>
            <Git onClick={() => window.open(GIT_URL)}>github</Git>
        </Container>
    );
}

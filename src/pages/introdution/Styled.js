import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    transition: all 0.5s ease-in-out;
    font-family: ${(props) => props.theme["point-font"]};
    font-weight: 300;
    p,
    span {
        &::selection {
            background: #fff;
            color: #000;
        }
    }
    &:hover {
        background-color: #fff;
    }
`;
export const MainTitle = styled.div`
    font-size: 1.5rem;
    padding-top: 10px;
    font-weight: 500;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    @media screen and (max-width: 992px) {
        font-size: 1.2rem;
    }
`;
export const Title = styled.div`
    margin: 20px 0;
    font-size: 1.2rem;

    @media screen and (max-width: 992px) {
        font-size: 1rem;
    }
`;
export const ContentBox = styled.div`
    font-size: 15px;
    p {
        margin: 5px 0;
    }
    @media screen and (max-width: 992px) {
        display: none;
    }
`;
export const Icon = styled.div`
    font-family: ${(props) => props.theme["main-font"]};
    font-size: 13px;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    @media screen and (max-width: 992px) {
        font-size: 11px;
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .iconBox {
        display: flex;
        align-items: center;
    }
    span:first-of-type {
        width: 150px;
        @media screen and (max-width: 992px) {
        }
    }
    span:last-of-type {
        @media screen and (max-width: 992px) {
            width: 60%;
            line-height: 15px;
        }
    }
    span {
        display: inline-block;
        margin: 5px 0;
        @media screen and (max-width: 992px) {
            margin: 8px 0;
        }
    }
    div:first-of-type {
        margin-top: 30px;
        @media screen and (max-width: 992px) {
            margin-top: 10px;
        }
    }
`;

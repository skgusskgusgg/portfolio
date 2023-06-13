import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.3rem;

    .top {
        margin-top: 90vh;
        @media screen and (max-width: 992px) {
            margin-top: 70vh;
        }
    }
    .my-part {
        margin-top: 5rem;
        margin-bottom: 3rem;
    }
    ul {
        width: 80%;
        li {
            margin: 8px 0;
            margin-top: 0;
        }
    }
`;
export const Title = styled.div`
    width: 90vw;
    background-color: black;
    height: 250px;
    padding: 10px;
    position: relative;
    color: #fff;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;
export const TitleName = styled.div`
    font-size: 2.2rem;
    padding-left: 20px;
    @media screen and (max-width: 992px) {
        margin: auto;
        padding: 0;
        font-size: 2rem;
    }
`;
export const TitleDetail = styled.div`
    position: absolute;
    right: 10px;
    bottom: 3rem;
    font-size: 0.8rem;
    width: 15rem;
    @media screen and (max-width: 992px) {
        display: none;
    }
`;

export const Detaile = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
`;
export const DetaileName = styled.div`
    width: 40%;
`;
export const DetaileContent = styled.div`
    width: 60%;
`;
export const Background = styled.img`
    width: 100%;
    height: 70vh;
    position: absolute;
    left: 0;
    bottom: -70vh;
    max-width: 100%;
    object-fit: cover;
    border-top: 1px solid #fff;
    @media screen and (max-width: 992px) {
        height: 60vh;
        bottom: -60vh;
    }
`;
export const ImageBox = styled.div`
    width: 60vw;
    height: 60vh;
    margin: 5rem 0;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 23px;
    overflow: hidden;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const CarouselContainer = styled(Slider)`
    height: 100%;
    width: 100%;
    border-radius: 20px;
    height: 93%;
    width: 97%;
    margin: 0;
    .slick-list {
        border-radius: 15px;
        height: 100%;
        object-fit: cover;
    }

    .slick-track {
        display: flex;
        align-items: center;
        height: 100%;

        div {
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .slick-prev {
        color: black;
        left: 1.5rem;
    }
    .slick-next {
        color: black;
        right: 2rem;
    }
    .slick-dots {
        bottom: 5px;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .slick-prev:before,
    .slick-next:before {
        opacity: 0.3;
        color: gray;
        font-size: 25px;
    }
    .slick-prev:hover:before,
    .slick-next:hover:before {
        opacity: 0.8;
        transition: 0.3s ease-in-out all;
    }
    button {
        z-index: 100;
    }
`;
export const CarouselImg = styled.img`
    object-fit: cover;
`;
export const SmallContainer = styled.div`
    margin: 5rem 0;
    width: 90vw;
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 17px;
    @media screen and (max-width: 992px) {
        margin: 3rem 0;
    }
`;
export const SmallTitle = styled.div`
    width: 40%;
    color: #999999;
    font-size: 1.7rem;
    font-weight: bold;
    @media screen and (max-width: 992px) {
        font-size: 1.2rem;
    }
`;
export const ContentBox = styled.div`
    width: 60%;
    text-align: left;
`;

export const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    text-align: left;
    @media screen and (max-width: 992px) {
        font-size: 0.9rem;
    }
`;
export const List = styled.div`
    margin: 30px 0;
    margin-top: 0;
    div {
        margin: 13px 0;
        margin-top: 0;
    }
    ul {
        list-style: disc;
    }
`;
export const Content = styled.div`
    margin: 10px 0;
    width: 80%;
    line-height: 1.2em;
    @media screen and (max-width: 992px) {
        font-size: 0.9rem;
    }

    img {
        margin: 5px;
        margin-top: 0;
    }
`;
export const Bold = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    width: 80%;
    @media screen and (max-width: 992px) {
        font-size: 1.1rem;
    }
`;
export const ReviewContainer = styled.ul`
    .bold {
        font-weight: bold;
        margin-bottom: 10px;
        @media screen and (max-width: 992px) {
            font-size: 1.1rem;
        }
    }
`;
export const ReviewList = styled.li`
    @media screen and (max-width: 992px) {
        font-size: 0.9rem;
    }
`;
export const Bottom = styled.div`
    width: 100%;

    background-color: #000;
    height: 12rem;
    margin-top: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        display: inline-block;
        background-color: #fff;
        color: #000;
        padding: 20px;
        border-radius: 30px;
        font-weight: bold;
        &:hover {
            background-color: rgba(255, 255, 255, 0.3);
            color: #fff;
        }
    }
    cursor: pointer;
`;

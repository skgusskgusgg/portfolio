import { Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import MyPart from "./components/MyPart";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Nav from "./nav/SideNav";
import * as C from "./style/Style";
import Category from "./components/Category";
interface PortfolioData {
    id: number;
    name: string;
    background: string;
    img: { id: number; img: string }[];
    category: string;

    day: string;
    person: string;

    bold: string;
    about: string;
    skill: { id: number; name: string; color: string }[];

    myPart: {
        id: number;
        name: string;
        content: { id: number; content: string }[];
    }[];

    review: { id: number; content: string }[];
}

interface ContainerProps {
    data: PortfolioData;
}
export default function Container({ data }: ContainerProps) {
    return (
        <>
            <Nav />
            <C.Container>
                <C.Title>
                    <Category data={data} />
                    <C.Background src={require(`${data.background}`)} />
                </C.Title>
                <C.SmallContainer className="top">
                    <C.SmallTitle>ABOUT</C.SmallTitle>
                    <C.ContentBox>
                        <C.Bold>{data.bold}</C.Bold>
                        <C.Content>{data.about}</C.Content>
                    </C.ContentBox>
                </C.SmallContainer>
                <C.SmallContainer>
                    <C.SmallTitle>SKILL</C.SmallTitle>
                    <Skill data={data} />
                </C.SmallContainer>
                <C.ImageBox>
                    <Carousel data={data} />
                </C.ImageBox>
                <C.SmallContainer className="my-part">
                    <C.SmallTitle>MY PART</C.SmallTitle>
                    <MyPart data={data} />
                </C.SmallContainer>
                <C.SmallContainer>
                    <C.SmallTitle>REVIEW</C.SmallTitle>
                    <C.ContentBox>
                        <Review data={data} />
                    </C.ContentBox>
                </C.SmallContainer>
            </C.Container>
            <C.Bottom>
                <Link to="/">go to portfolio</Link>
            </C.Bottom>
        </>
    );
}

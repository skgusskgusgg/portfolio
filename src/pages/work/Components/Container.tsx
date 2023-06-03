import { Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import MyPart from "./components/MyPart";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Nav from "./nav/SideNav";
import * as C from "./style/Style";

interface dataProps {
    id: number;
    name: string;
    background: string;
    img: [id: number, img: string];
    category: string;
    day: string;
    person: string;
    bold: string;
    about: string;
    skill: [id: number, name: string, color: string];
    myPart: [id: number, name: string, content: [id: number, content: string]];
    review: [id: number, content: string];
}

export default function Container({ data }: any) {
    return (
        <>
            <Nav />
            <C.Container>
                <C.Title>
                    <C.TitleName>{data.name}</C.TitleName>
                    <C.TitleDetail>
                        <C.Detaile>
                            <C.DetaileName>카테고리</C.DetaileName>
                            <C.DetaileContent>{data.category}</C.DetaileContent>
                        </C.Detaile>
                        <C.Detaile>
                            <C.DetaileName>기간</C.DetaileName>
                            <C.DetaileContent>{data.day}</C.DetaileContent>
                        </C.Detaile>
                        <C.Detaile>
                            <C.DetaileName>인원</C.DetaileName>
                            <C.DetaileContent>{data.person}</C.DetaileContent>
                        </C.Detaile>
                    </C.TitleDetail>
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

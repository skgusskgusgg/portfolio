import { motion } from "framer-motion";
import styled from "styled-components";
import IconBox from "./IconBox";

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    transition: all 0.5s ease-in-out;
    font-family: ${(props) => props.theme["point-font"]};
    font-weight: 300;
    &:hover {
        background-color: #fff;
    }
`;
const MainTitle = styled.div`
    font-size: 1.5rem;
    padding-top: 10px;
    font-weight: 500;
`;
const Title = styled.div`
    margin: 20px 0;
    font-size: 1.2rem;
`;
const ContentBox = styled.div`
    font-size: 15px;
    p {
        margin: 5px 0;
    }
`;
const Icon = styled.div`
    font-family: ${(props) => props.theme["main-font"]};
    font-size: 13px;
    .iconBox {
        display: flex;
        align-items: center;
    }
    span:first-of-type {
        width: 150px;
    }
    span {
        display: inline-block;
        margin: 5px 0;
    }
    span:last-of-type {
    }

    div:first-of-type {
        margin-top: 30px;
    }
`;

export default function Introdution() {
    const hover = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.backgroundColor = "black";
    };
    return (
        <Container className="div">
            <MainTitle>ABOUT ME.</MainTitle>
            <Title>안녕하세요, "프론트엔드 개발자"를 꿈꾸는 권나현입니다</Title>
            <ContentBox>
                {CONTENT.map((e) => {
                    return <p key={e.id}>{e.content}</p>;
                })}
            </ContentBox>
            <Icon>
                <IconBox />
            </Icon>
        </Container>
    );
}
const CONTENT = [
    { id: 1, content: "사용자가 필요로 하는 것이 무엇인지 고민하는 개발자." },
    { id: 2, content: "새로운 도전을 두려워하지 않는 개발자." },
    { id: 3, content: "함께 일하고 싶은 개발자." },
];

import * as I from "./Styled";
import IconBox from "./IconBox";

export default function Introdution() {
    const hover = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.backgroundColor = "black";
    };
    return (
        <I.Container className="div">
            <I.MainTitle>ABOUT ME.</I.MainTitle>
            <I.Title>
                안녕하세요, "프론트엔드 개발자"를 꿈꾸는 권나현입니다
            </I.Title>
            <I.ContentBox>
                {CONTENT.map((e) => {
                    return <p key={e.id}>{e.content}</p>;
                })}
            </I.ContentBox>
            <I.Icon>
                <IconBox />
            </I.Icon>
        </I.Container>
    );
}
const CONTENT = [
    { id: 1, content: "사용자가 필요로 하는 것이 무엇인지 고민하는 개발자." },
    { id: 2, content: "새로운 도전을 두려워하지 않는 개발자." },
    { id: 3, content: "함께 일하고 싶은 개발자." },
];

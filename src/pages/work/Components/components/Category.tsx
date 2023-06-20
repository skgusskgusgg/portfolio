import * as C from "../style/Style";

interface ProjectData {
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
interface CategoryProps {
    data: ProjectData;
}

export default function Category({ data }: CategoryProps) {
    return (
        <>
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
        </>
    );
}

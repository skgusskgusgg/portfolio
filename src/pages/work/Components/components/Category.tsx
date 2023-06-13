import * as C from "../style/Style";

export default function Category({ data }: any) {
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

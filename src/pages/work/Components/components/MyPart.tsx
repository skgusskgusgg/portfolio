import * as C from "../style/Style";

interface Content {
    id: number;
    content: string;
}

interface MyPartItem {
    id: number;
    name: string;
    content: Content[];
}

interface MyPartProps {
    data: {
        myPart: MyPartItem[];
    };
}

export default function MyPart({ data }: MyPartProps) {
    return (
        <C.ListBox>
            {data.myPart.map((e: MyPartItem) => {
                return (
                    <C.List key={e.id}>
                        <C.Bold>{e.name}</C.Bold>
                        <ul>
                            {e.content.map((a: Content, index: number) => {
                                return <li key={index}>{a.content}</li>;
                            })}
                        </ul>
                    </C.List>
                );
            })}
        </C.ListBox>
    );
}

import * as C from "../style/Style";

export default function MyPart({ data }: any) {
    return (
        <C.ListBox>
            {data.myPart.map((e: any) => {
                return (
                    <C.List key={e.id}>
                        <C.Bold>{e.name}</C.Bold>
                        <ul>
                            {e.content.map((a: any) => {
                                return <li key={a.id}>{a.content}</li>;
                            })}
                        </ul>
                    </C.List>
                );
            })}
        </C.ListBox>
    );
}

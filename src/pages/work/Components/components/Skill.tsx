import * as C from "../style/Style";

export default function Skill({ data }: any) {
    return (
        <C.ContentBox>
            <C.Content>
                {data.skill.map((e: any) => {
                    return (
                        <img
                            key={e.id}
                            src={`https://img.shields.io/badge/${e.name}-${e.color}?style=for-the-badge&logo=${e.name}&logoColor=white`}
                        />
                    );
                })}
            </C.Content>
        </C.ContentBox>
    );
}

import * as C from "../style/Style";

interface SkillData {
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
interface SkillProps {
    data: SkillData;
}

export default function Skill({ data }: SkillProps) {
    return (
        <C.ContentBox>
            <C.Content>
                {data.skill.map(
                    (e: { id: number; name: string; color: string }) => {
                        return (
                            <img
                                key={e.id}
                                src={`https://img.shields.io/badge/${e.name}-${e.color}?style=for-the-badge&logo=${e.name}&logoColor=white`}
                            />
                        );
                    }
                )}
            </C.Content>
        </C.ContentBox>
    );
}

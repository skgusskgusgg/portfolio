import * as C from "../style/Style";

interface ReviewData {
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
interface ReviewProps {
    data: ReviewData;
}

export default function Review({ data }: ReviewProps) {
    return (
        <C.ReviewContainer>
            {data.review.map(
                (e: { id: number; content: string }, index: number) => {
                    return (
                        <C.ReviewList
                            key={index}
                            className={e.id === 1 ? "bold" : ""}
                        >
                            {e.content}
                        </C.ReviewList>
                    );
                }
            )}
        </C.ReviewContainer>
    );
}

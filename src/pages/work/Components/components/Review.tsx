import * as C from "../style/Style";

export default function Review({ data }: any) {
    return (
        <C.ReviewContainer>
            {data.review.map((e: any) => {
                return (
                    <>
                        <C.ReviewList
                            key={e.id}
                            className={e.id === 1 ? "bold" : ""}
                        >
                            {e.content}
                        </C.ReviewList>
                    </>
                );
            })}
        </C.ReviewContainer>
    );
}

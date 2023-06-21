import { RefObject } from "react";
import * as N from "./Style";

interface NavProps {
    onMoveMain: () => void;
    onMoveWork: () => void;
    onMoveIntro: () => void;
    onMoveConnect: () => void;
}

export default function Nav({
    onMoveMain,
    onMoveWork,
    onMoveIntro,
    onMoveConnect,
}: NavProps) {
    const BTN = [
        {
            id: 1,
            name: "KWON NA HYUN",
            click: onMoveMain,
        },
        {
            id: 2,
            name: "ABOUT",
            click: onMoveIntro,
        },
        {
            id: 3,
            name: "WORK",
            click: onMoveWork,
        },
        {
            id: 4,
            name: "CONNECT",
            click: onMoveConnect,
        },
    ];

    return (
        <N.Container>
            <N.BtnBox>
                {BTN.map((e) => {
                    return (
                        <N.Btn key={e.id} onClick={e.click}>
                            {e.name}
                        </N.Btn>
                    );
                })}
            </N.BtnBox>
            <N.ScrollBox>
                <span></span>
                <span></span>
                <span></span>
            </N.ScrollBox>
        </N.Container>
    );
}

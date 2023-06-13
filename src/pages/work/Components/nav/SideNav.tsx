import { Link } from "react-router-dom";
import * as N from "./Style";

export default function SideNav() {
    return (
        <N.Container>
            <N.BtnBox>
                <N.Btn>
                    <Link to={"/"}>KWON NA HYUN</Link>
                </N.Btn>
            </N.BtnBox>
        </N.Container>
    );
}

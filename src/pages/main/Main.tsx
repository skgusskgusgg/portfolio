import * as M from "./Style";

const Main = () => {
    return (
        <M.Container>
            <M.Line height="100" stroke="#fff" strokeWidth="1" width="100%">
                <M.Text
                    x="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    y="50%"
                >
                    KwonNaHyun's
                </M.Text>
            </M.Line>
            <M.Line height="100" stroke="#fff" strokeWidth="1" width="100%">
                <M.Text
                    x="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    y="60%"
                >
                    Portfolio
                </M.Text>
            </M.Line>
        </M.Container>
    );
};
export default Main;

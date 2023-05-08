import styled from "styled-components";
import Container from "./components/Container";

const AppContainer = styled.div`
    font-family: ${(props) => props.theme["main-font"]};
`;
export default function App() {
    return (
        <AppContainer>
            <Container />;
        </AppContainer>
    );
}

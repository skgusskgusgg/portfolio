import Container from "./components/Container";

export default function App() {
    return (
        <>
            {[1, 2, 3, 4].map((e) => {
                return <Container id={e} />;
            })}
        </>
    );
}

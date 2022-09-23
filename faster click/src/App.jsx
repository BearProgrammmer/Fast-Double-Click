import Router from "./routes";
import styled from "styled-components";

const DivApp = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
`;

const App = () => (
    <DivApp>
        <Router />
    </DivApp>
);

export default App;

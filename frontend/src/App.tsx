import './App.css'
import {Container, Editor, Header, Participants} from "./components";


function App() {
    return (
        <>
            <Header>
                <Participants></Participants>
            </Header>
            <Container>
                <Editor></Editor>
            </Container>
        </>
    )
}

export default App

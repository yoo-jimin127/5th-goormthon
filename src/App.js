// 1. 레이아웃 설정
import {Container, Col, Row} from "@goorm-dev/gds-goormthon";
// 2. 

function App() {
    return (
        <Container>
            <Row>
                <Col lg={{offset: 1, size: 4}} xs={{size:12}} >박스 1</Col>
                <Col lg={{size: 6}} xs={{size:12}} >박스 2</Col>
            </Row>
        </Container>
    );
}

export default App;

// 1. 레이아웃 설정
import {Container, Col, Row, Form, FormGroup, Label, Input, Button} from "@goorm-dev/gds-goormthon";
// 2. 레이아웃으로 나뉘어진 영역에 컴포넌트를 배치

// 3. 유틸함수를 사용하여 컴포넌트 간격 조정
function App() {
    return (
        <Container style={{marginTop: "80px"}}>
            <Row>
                <Col lg={{offset: 1, size: 4}} xs={{size:12}} >
                    <h3 className="text-gray-950">예비 캡틴을 환영합니다!</h3>
                    <p className="text-gray-600 mb-4 mb-lg-0">캡틴의 필수 정보를 입력해주세요.<br />
                        수강생들이 캡틴에 대한 정보를 쉽게 알 수 <br />
                        있도록 설정해보세요.
                    </p>
                </Col>
                <Col lg={{size: 6}} xs={{size:12}} >
                    <Form>
                        <FormGroup>
                            <Label for="name">이름</Label>
                            <Input id="name" name="name" type="text" placeholder="이름을 입력해주세요." size="xl" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">연락처</Label>
                            <Input id="phone" name="phone" type="text" placeholder="연락처를 입력해주세요." size="xl" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="account">계정</Label>
                            <Input id="account" name="account" type="text" placeholder="ex. example@goorm.io" size="xl" />
                        </FormGroup>
                        <Button size="xl" block color="primary">신청하기</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default App;

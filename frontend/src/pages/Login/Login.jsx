import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import {
    Container,
    Wrapper,
    Title,
    Form,
    Input,
    Button,
    Link,
    Error
} from "./Login.styled";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user); 


    const handleLogin = (event) => {
        event.preventDefault();
        login(dispatch, { username, password });
    }
    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" onChange={(event) => {setUsername(event.target.value)}}></Input>
                <Input placeholder="password" type="password" onChange={(event) => {setPassword(event.target.value)}}></Input>
                <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>    
                {error && <Error>Something went wrong...</Error>}
                <Link>DON`T REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
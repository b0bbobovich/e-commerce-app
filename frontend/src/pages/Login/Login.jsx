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


    const handleSignin = (event) => {
        const login = event.target.login.value;
        const password = event.target.password.value;
        let isValid = false;

        if (login.includes("@")) {
            isValid = validateEmail(login);
        }
        else {
            isValid = validateUsername(login);
        }

        event.preventDefault();
        // dispatch(login({ login, password }));

    }

    const validateEmail = (login) => {
        // a character before the @ and something before and after the dot in the domain part
        return login.match(/^\S+@\S+\.\S+$/)
    };

    const validateUsername = (login) => {
        // only alphanumeric characters
        return login.match(/^[a-zA-Z0-9]+$/)
    };

    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form onSubmit={handleSignin}>
                <Input placeholder="username or email" name="login" required type="text"></Input>
                <Input placeholder="password" name="password" type="password"></Input>
                <Button type="submit" disabled={isFetching}>LOGIN</Button>    
                {error && <Error>Something went wrong...</Error>}
                <Link>DON`T REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
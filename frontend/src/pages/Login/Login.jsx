import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login as loginFunc }  from "../../redux/userSlice.js";
import {
    Container,
    Wrapper,
    Title,
    Form,
    InputContainer,
    Input,
    Label,
    Button,
    NavLink,
    Error,
    PreloaderContainer,
    Preloader
} from "./Login.styled";

const Login = () => {
    const [validationError, setValidationError] = useState(false);
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user); 

    const handleSignin = (event) => {
        const login = event.target.login.value;
        const password = event.target.password.value;
        let isValid = false; 
        login.includes("@") ? isValid = validateEmail(login) : isValid = validateUsername(login);
        isValid
            ?
            dispatch(loginFunc({ login, password }))
            :
            setValidationError(true);
            event.preventDefault();
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
                <InputContainer>
                    <Input placeholder="username or email" id="login" name="login" required type="text" onKeyUp={() => setValidationError(false)} />
                    <Label htmlFor="login">Username or Email</Label>
                </InputContainer>
                {validationError && <Error>Please use valid email or username!</Error>}    
                <InputContainer>
                    <Input id="password" placeholder="password" name="password" type="password" />
                    <Label htmlFor="password">Password</Label>
                </InputContainer>
                {isFetching
                    ?
                    <PreloaderContainer>
                        <Preloader src={process.env.PUBLIC_URL + "/preloaderLogo.svg"} />
                    </PreloaderContainer>
                    :
                    <Button type="submit" disabled={isFetching}>LOGIN</Button>    
                }
                {error.status && <Error>{error.message}</Error>}
                <NavLink>DON`T REMEMBER THE PASSWORD?</NavLink>
                <NavLink to="/register">CREATE A NEW ACCOUNT</NavLink>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
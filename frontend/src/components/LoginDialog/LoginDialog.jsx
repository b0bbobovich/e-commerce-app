import PropTypes from 'prop-types';
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login as loginFunc } from "../../redux/userSlice.js";
import { openRegisterDialog as showRegisterForm } from "../../redux/modalSlice.js";
import {
    Container,
    Wrapper,
    Content,
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
} from "./LoginDialog.styled";

const LoginDialog = (props) => {
    const { open, onClose } = props;
    const [validationError, setValidationError] = useState(false);
    const dispatch = useDispatch();
    const { isFetching } = useSelector((state) => state.user);
    const [error, setError] = useState("");


    const clearErrors = () => {
        setError("");
        setValidationError(false);
    };

    // const closeLoginDialog = () => {
    //     clearErrors();
    //     onClose();
    // };

    const handleSignIn = (event) => {
        event.preventDefault();
        const login = event.target.login.value;
        const password = event.target.password.value;
        let isValid = false;
        login.includes("@") ? isValid = validateEmail(login) : isValid = validateUsername(login);
        isValid
            ?
            dispatch(loginFunc({ login, password }))
                .then(res => {
                    if (res.type === "user/login/rejected") {
                        setError(res.payload);
                    }
                    else {
                        onClose();
                    }
                })
            :
            setValidationError(true);
        event.preventDefault();
    };


    const validateEmail = (login) => {
        // a character before the @ and something before and after the dot in the domain part
        return login.match(/^\S+@\S+\.\S+$/)
    };

    const validateUsername = (login) => {
        // only alphanumeric characters
        return login.match(/^[a-zA-Z0-9]+$/)
    };

    const openRegisterDialog = () => {
        dispatch(showRegisterForm());
    };

    return (
        <>
            <Container onClose={onClose} open={open} >
                <Wrapper>
                    <Content>
                        <Title>SIGN IN</Title>
                        <Form onSubmit={handleSignIn}>
                            <InputContainer>
                                    <Input placeholder="username or email" id="login" name="login" required type="text" onKeyUp={() => clearErrors()} />
                                <Label htmlFor="login">Username or Email</Label>
                            </InputContainer>
                            {validationError && <Error>Please use valid email or username!</Error>}    
                            <InputContainer>
                                <Input id="password" placeholder="password" name="password" type="password" onKeyUp={() => setError("")}/>
                                <Label htmlFor="password">Password</Label>
                            </InputContainer>
                            {error && <Error>{error}</Error>}
                            {isFetching
                                ?
                                <PreloaderContainer>
                                    <Preloader src={process.env.PUBLIC_URL + "/preloaderLogo.svg"} />
                                </PreloaderContainer>
                                :
                                <Button type="submit" disabled={isFetching}>LOGIN</Button>    
                            }
                            <NavLink>DON`T REMEMBER THE PASSWORD?</NavLink>
                            <NavLink onClick={openRegisterDialog}>CREATE A NEW ACCOUNT</NavLink>
                        </Form>
                    </Content>
        
                </Wrapper>
            </Container>
        </>
    )
};

LoginDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};
  
export default LoginDialog
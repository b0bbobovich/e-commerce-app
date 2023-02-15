import { Send } from "@material-ui/icons";
import React, {useState, forwardRef} from "react";
import {
    Container,
    Title,
    Description,
    Form,
    Input,
    Label,
    Button
} from "./Newsletter.styled";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Newsletter = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isOpenSnackbar, setIsOpenSnackbar] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // here can be additional email validation logic
        setIsSubscribed(true);
        setIsOpenSnackbar(true)
    };

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setIsOpenSnackbar(false);
      };

    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products</Description>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    id="email"
                    placeholder="Your email"
                />
                <Label id="label" htmlFor="email">Your email</Label>
                
                <Button type="submit" value="Submit">
                    <Send/>
                </Button>
            </Form>
            {
                isSubscribed && 
                <Snackbar
                        open={isOpenSnackbar}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        autoHideDuration={2000}
                        onClose={handleCloseSnackbar}
                    >
                    <Alert
                        onClose={handleCloseSnackbar}
                        severity="success"
                        sx={{ width: "100%" }}
                    >
                        Successfully subscribed!
                    </Alert>
                </Snackbar>
            }
        </Container>
    )
}

export default Newsletter
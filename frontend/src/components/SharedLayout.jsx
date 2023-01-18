import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Announcement from "./Announcement";
import Navbar from "./Navbar";

const Container = styled.div`

`;

const SharedLayout = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Outlet/>
        </Container>
    )
}

export default SharedLayout
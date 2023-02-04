import { Outlet } from "react-router-dom";
import Announcement from "../Announcement/Announcement";
import Navbar from "../Navbar/Navbar";
import { Container } from "./SharedLayout.styled";


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
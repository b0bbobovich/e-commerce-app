import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import { Outlet } from "react-router-dom";
import {
    MainContainer,
    ContentAndNavbarContainer,
    NavbarContainer,
    ContentContainer
} from "./SharedLayout.styled";

const SharedLayout = () => {
    return (
        <MainContainer>
            <Topbar />
            <ContentAndNavbarContainer>
                <NavbarContainer>
                    <Sidebar />
                </NavbarContainer>
                <ContentContainer>
                    <Outlet/>
                </ContentContainer>
            </ContentAndNavbarContainer>
        </MainContainer>
    )
}

export default SharedLayout;
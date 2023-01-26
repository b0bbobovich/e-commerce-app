import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import { Outlet } from "react-router-dom";
import { Menu } from "@material-ui/icons";

import {
    ComponentContainer,
    ToggleBtnContainer,
    ToggleLable,
    NavbarContainer,
    ContentContainer,
    HeaderContainer
} from "./SharedLayout.styled";

const SharedLayout = () => {
    const openSidebar = () => { 
        const sidebar = document.getElementById("navbar-container");
        sidebar.style.display = "block";
        sidebar.style.position = "absolute";
        sidebar.style.top = "0";
        sidebar.style.left = "0";
    };
    return (
        <ComponentContainer id="main-container">
            <HeaderContainer>
                <Topbar />
            </HeaderContainer>
            <NavbarContainer id="navbar-container">
                <Sidebar />
            </NavbarContainer>
            <ContentContainer>
                <ToggleBtnContainer onClick={openSidebar}>
                    <Menu style={{fontSize: "30px"}} />
                    <ToggleLable>Shop Manager</ToggleLable>
                </ToggleBtnContainer>
                <Outlet />
            </ContentContainer>
        </ComponentContainer>
    )
}

export default SharedLayout;
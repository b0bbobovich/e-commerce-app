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
    const handleToggle = () => { 
        
    };

    return (
        <ComponentContainer>
            <HeaderContainer>
                <Topbar />
            </HeaderContainer>
            <NavbarContainer id="navbar-container">
                <Sidebar />
            </NavbarContainer>
            <ContentContainer>
                <ToggleBtnContainer onClick={handleToggle}>
                    <Menu style={{fontSize: "30px"}} />
                    <ToggleLable>Shop Manager</ToggleLable>
                </ToggleBtnContainer>
                <Outlet />
            </ContentContainer>
        </ComponentContainer>
    )
}

export default SharedLayout;
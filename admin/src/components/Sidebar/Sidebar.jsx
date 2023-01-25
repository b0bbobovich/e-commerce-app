import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";

import {
    Container,
    Wrapper,
    CloseButton,
    SidebarMenu,
    SidebarTitle,
    SidebarList,
    NavLink,
    SidebarListItem,
    SidebarIcon
} from "./Sidebar.styled";
import { Close } from "@material-ui/icons";

const Sidebar = () => {

    const closeSidebar = () => { 
        const sidebarContainer = document.getElementById("sidebar-container");
        sidebarContainer.parentElement.style.display = "inherit";
        sidebarContainer.parentElement.style.position = "static";
    };

    return (
        <Container id="sidebar-container">
            <Wrapper>
                <CloseButton onClick={closeSidebar}>
                    <Close />
                </CloseButton>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                        <NavLink to="/">
                            <SidebarListItem>
                                <SidebarIcon>
                                    <LineStyle />
                                </SidebarIcon>
                                Home
                            </SidebarListItem>
                        </NavLink>
                        <SidebarListItem inactive>
                            <SidebarIcon>
                                <Timeline />
                            </SidebarIcon>
                            Analytics
                        </SidebarListItem>
                        <SidebarListItem inactive>
                            <SidebarIcon>
                                <TrendingUp />
                            </SidebarIcon>
                            Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Quick Menu</SidebarTitle>
                    <SidebarList>
                        <NavLink to="/users" >
                            <SidebarListItem>
                                <SidebarIcon>
                                    <PermIdentity />
                                </SidebarIcon>
                                Users
                            </SidebarListItem>
                        </NavLink>
                        <NavLink to="/products">
                            <SidebarListItem>
                                <SidebarIcon>
                                    <Storefront />
                                </SidebarIcon>
                                Products
                            </SidebarListItem>
                        </NavLink>
                        <SidebarListItem inactive>
                            <SidebarIcon>
                                <AttachMoney />
                            </SidebarIcon>
                            Transactions
                        </SidebarListItem>
                        <SidebarListItem inactive>
                            <SidebarIcon>
                                <BarChart />
                            </SidebarIcon>
                            Reports
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Notifications</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem inactive>
                            <SidebarIcon>
                                <MailOutline />
                            </SidebarIcon>
                            Mail
                        </SidebarListItem>
                        <SidebarListItem inactive>
                            <SidebarIcon>
                                <DynamicFeed />
                            </SidebarIcon>
                            Feedback
                        </SidebarListItem>
                        <SidebarListItem inactive>
                            <SidebarIcon>
                                <ChatBubbleOutline />
                            </SidebarIcon>
                            Messages
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Staff</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem inactive>
                            <SidebarIcon>
                                <WorkOutline />
                            </SidebarIcon>
                            Manage
                        </SidebarListItem>
                        <SidebarListItem inactive>
                            <SidebarIcon>
                                <Timeline />
                            </SidebarIcon>
                            Analytics
                        </SidebarListItem>
                        <SidebarListItem inactive>
                            <SidebarIcon>
                                <Report />
                            </SidebarIcon>
                            Reports
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </Wrapper>
        </Container>
    );
}

export default Sidebar
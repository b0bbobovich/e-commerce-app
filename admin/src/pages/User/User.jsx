import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
    Section,
    TitleContainer,
    AddButton,
    UserContainer,
    UserInfoContainer,
    TopContainer,
    UserImg,
    TopInfoContainer,
    Username,
    UserTitle,
    BottomContainer,
    InfoTitle,
    InfoContainer,
    InfoIcon,
    UserInfo,
    UpdatingInfoContainer,
    UpdateContainerTitle,
    UpdateForm,
    LeftContainer,
    RightContainer,
    UpdatingItem,
    UpdatingItemTitle,
    UpdatingItemInput,
    UploadContainer,
    CurrentUserImg,
    UploadIcon,
    UpdateButton
} from "./User.styled";


const User = () => {

    const handleImgUpload = (event) => {
        const userImg = document.getElementById("userImg");
        userImg.src = URL.createObjectURL(event.target.files[0]);
        userImg.onload = () => {
            URL.revokeObjectURL(userImg.src);
        }
    }
    return (
        <Section>
            <TitleContainer>
                <h1>Edit User</h1>
                <Link to="/newUser">
                  <AddButton>Create</AddButton>
                </Link>
            </TitleContainer>

            <UserContainer>

              <UserInfoContainer>
                <TopContainer>
                  <UserImg
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <TopInfoContainer>
                    <Username>Anna Becker</Username>
                    <UserTitle>Software Engineer</UserTitle>
                  </TopInfoContainer>
                </TopContainer>
                <BottomContainer>
                    <InfoTitle>Account Details</InfoTitle>
                    <InfoContainer>
                        <InfoIcon>
                            <PermIdentity/>
                        </InfoIcon>      
                        <UserInfo>annabeck99</UserInfo>
                    </InfoContainer>
                    <InfoContainer>
                        <InfoIcon>
                            <CalendarToday/>   
                        </InfoIcon>            
                        <UserInfo>10.12.1999</UserInfo>
                    </InfoContainer>
                  <InfoTitle>Contact Details</InfoTitle>
                    <InfoContainer>
                        <InfoIcon>
                            <PhoneAndroid/>        
                        </InfoIcon>
                        <UserInfo>+1 123 456 67</UserInfo>
                    </InfoContainer>
                    <InfoContainer>
                        <InfoIcon>
                           <MailOutline/>             
                        </InfoIcon>
                        <UserInfo>annabeck99@gmail.com</UserInfo>
                    </InfoContainer>
                    <InfoContainer>
                        <InfoIcon>
                            <LocationSearching/>
                        </InfoIcon>
                        <UserInfo>New York | USA</UserInfo>        
                    </InfoContainer>
                </BottomContainer>
                </UserInfoContainer>

                <UpdatingInfoContainer>
                    <UpdateContainerTitle>Edit</UpdateContainerTitle>
                    <UpdateForm>
                        <LeftContainer>
                            <UpdatingItem>
                                <UpdatingItemTitle>Username</UpdatingItemTitle>
                                <UpdatingItemInput
                                  type="text"
                                  placeholder="annabeck99"
                                />
                            </UpdatingItem>
                            <UpdatingItem>
                                <UpdatingItemTitle>Full Name</UpdatingItemTitle>
                                <UpdatingItemInput
                                  type="text"
                                  placeholder="Anna Becker"
                                />
                            </UpdatingItem>
                            <UpdatingItem>
                                <UpdatingItemTitle>Email</UpdatingItemTitle>
                                <UpdatingItemInput
                                  type="text"
                                  placeholder="annabeck99@gmail.com"
                                />
                            </UpdatingItem>
                            <UpdatingItem>
                                <UpdatingItemTitle>Phone</UpdatingItemTitle>
                                <UpdatingItemInput
                                  type="text"
                                  placeholder="+1 123 456 67"
                                />
                            </UpdatingItem>
                            <UpdatingItem>
                                <UpdatingItemTitle>Address</UpdatingItemTitle>
                                <UpdatingItemInput
                                  type="text"
                                  placeholder="New York | USA"
                                />
                            </UpdatingItem>
                        </LeftContainer>
                        <RightContainer>
                            <UploadContainer>
                                <CurrentUserImg
                                    id="userImg"
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <UploadIcon>
                                        <Publish/>   
                                    </UploadIcon>
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} onChange={handleImgUpload}/>
                            </UploadContainer>
                            <UpdateButton>Update</UpdateButton>
                        </RightContainer>
                    </UpdateForm>
                </UpdatingInfoContainer>
            </UserContainer>
      </Section>
    );
  }

export default User;
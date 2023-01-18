import {
  Container,
  UserForm,
  UserFeatureContainer,
  FeatureTitle,
  FeatureInput,
  GenderFeatureContainer,
  GenderInput,
  GenderTitle,
  AddUserButton
} from "./NewUser.styled";

const NewUser = () => {
  return (
    <Container>
      <h1>New User</h1>
      <UserForm>
        <UserFeatureContainer>
          <FeatureTitle>Username</FeatureTitle>
          <FeatureInput type="text" placeholder="john" autocomplete="username"/>
        </UserFeatureContainer>
        <UserFeatureContainer>
          <FeatureTitle>Full Name</FeatureTitle>
          <FeatureInput type="text" placeholder="John Smith" autocomplete="off"/>
        </UserFeatureContainer>
        <UserFeatureContainer>
          <FeatureTitle>Email</FeatureTitle>
          <FeatureInput type="email" placeholder="john@gmail.com" autocomplete="email"/>
        </UserFeatureContainer>
        <UserFeatureContainer>
          <FeatureTitle>Password</FeatureTitle>
          <FeatureInput type="password" placeholder="password" autocomplete="new-password"/>
        </UserFeatureContainer>
        <UserFeatureContainer>
          <FeatureTitle>Phone</FeatureTitle>
          <FeatureInput type="text" placeholder="+1 123 456 78" autocomplete="tel"/>
        </UserFeatureContainer>
        <UserFeatureContainer>
          <FeatureTitle>Address</FeatureTitle>
          <FeatureInput type="text" placeholder="New York | USA" autocomplete="off"/>
        </UserFeatureContainer>
        <UserFeatureContainer>
          <FeatureTitle>Gender</FeatureTitle>
          <GenderFeatureContainer>
            <GenderInput type="radio" name="gender" id="male" value="male" />
            <GenderTitle htmlFor="male">Male</GenderTitle>
            <GenderInput type="radio" name="gender" id="female" value="female" />
            <GenderTitle htmlFor="female">Female</GenderTitle>
            <GenderInput type="radio" name="gender" id="other" value="other" />
            <GenderTitle htmlFor="other">Other</GenderTitle>
          </GenderFeatureContainer>
        </UserFeatureContainer>
        <UserFeatureContainer>
          <FeatureTitle>Active</FeatureTitle>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </UserFeatureContainer>
        <AddUserButton>Create</AddUserButton>
      </UserForm>
    </Container>
  );
}

export default NewUser;
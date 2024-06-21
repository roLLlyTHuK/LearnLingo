import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  LoginBox,
  LogoLink,
  Navigation,
  NavigationLink,
  SignupBtn,
  UserBox,
} from './Header.styled';
import Logo from '../../assets/ukraine.png';
import { FiLogIn } from 'react-icons/fi';

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoLink to="/home">
        <img src={Logo} alt="Logo" width={28} height={28} />
        <span>LearnLingo</span>
      </LogoLink>
      <Navigation>
        <NavigationLink to="/home">Home</NavigationLink>
        <NavigationLink to="/teachers">Teachers</NavigationLink>
      </Navigation>
      <UserBox>
        <LoginBox>
          <FiLogIn size={20} color={'#f4c550'} />
          <Link to="/login">Log In</Link>
        </LoginBox>
        <SignupBtn>Registration</SignupBtn>
      </UserBox>
    </HeaderContainer>
  );
};

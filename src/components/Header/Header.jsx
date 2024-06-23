import { useLocation } from 'react-router-dom';
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
import { FiLogOut } from 'react-icons/fi';
import { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { useAuth } from '../../context/AuthContext';

export const Header = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const location = useLocation();
  const { currentUser, logout } = useAuth();

  const openLoginForm = () => {
    setIsLoginFormOpen(true);
  };

  const closeLoginForm = () => {
    setIsLoginFormOpen(false);
  };

  const openSignUpForm = () => {
    setIsSignUpFormOpen(true);
  };

  const closeSignUpForm = () => {
    setIsSignUpFormOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer>
      <LogoLink to="/home">
        <img src={Logo} alt="Logo" width={28} height={28} />
        <span>LearnLingo</span>
      </LogoLink>
      <Navigation>
        <NavigationLink
          to="/home"
          className={isActive('/home') ? 'active' : ''}
        >
          Home
        </NavigationLink>
        <NavigationLink
          to="/teachers"
          className={isActive('/teachers') ? 'active' : ''}
        >
          Teachers
        </NavigationLink>
        {currentUser && (
          <NavigationLink
            to="/favorites"
            className={isActive('/favorites') ? 'active' : ''}
          >
            Favorites
          </NavigationLink>
        )}
      </Navigation>
      <UserBox>
        {currentUser ? (
          <LoginBox onClick={logout}>
            {currentUser.email}
            <FiLogOut size={20} color={'#f4c550'} />
          </LoginBox>
        ) : (
          <>
            <LoginBox onClick={openLoginForm}>
              <FiLogIn size={20} color={'#f4c550'} />
              <span>Login</span>
            </LoginBox>
            {isLoginFormOpen && (
              <LoginForm
                isModalOpen={isLoginFormOpen}
                closeModal={closeLoginForm}
              />
            )}

            <SignupBtn onClick={openSignUpForm}>Registration</SignupBtn>

            {isSignUpFormOpen && (
              <RegistrationForm
                isModalOpen={isSignUpFormOpen}
                closeModal={closeSignUpForm}
              />
            )}
          </>
        )}
      </UserBox>
    </HeaderContainer>
  );
};

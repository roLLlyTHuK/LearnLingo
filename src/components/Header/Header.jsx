import { useLocation, useNavigate } from 'react-router-dom';
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
import { useAuth } from '../../context/AuthContext';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

export const Header = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <img src={Logo} alt="Logo" width={28} height={28} />
        <span>LearnLingo</span>
      </LogoLink>
      <Navigation>
        <NavigationLink to="/" className={isActive('/') ? 'active' : ''}>
          Home
        </NavigationLink>
        <NavigationLink
          to="/teachers"
          className={isActive('/teachers') ? 'active' : ''}
        >
          Teachers
        </NavigationLink>
        {currentUser ? (
          <NavigationLink
            to="/favorites"
            className={isActive('/favorites') ? 'active' : ''}
          >
            Favorites
          </NavigationLink>
        ) : (
          <NavigationLink
            to="/favorites"
            style={{
              pointerEvents: 'none',
              cursor: 'default',
              color: 'var(--subtitle-text-color)',
            }}
          >
            Favorites
          </NavigationLink>
        )}
      </Navigation>
      <UserBox>
        {currentUser ? (
          <>
            <span>
              {currentUser.displayName
                ? currentUser.displayName
                : currentUser.email}
            </span>
            <LoginBox onClick={handleLogout}>
              <FiLogOut size={20} color={'#f4c550'} />
            </LoginBox>
          </>
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

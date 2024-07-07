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
  const [isOpen, setIsOpen] = useState({ login: false, signUp: false });
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleToggleForm = (formType) => {
    setIsOpen((prevOpen) => ({ ...prevOpen, [formType]: !prevOpen[formType] }));
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
            <LoginBox onClick={() => handleToggleForm('login')}>
              <FiLogIn size={20} color={'#f4c550'} />
              <span>Login</span>
            </LoginBox>
            {isOpen.login && (
              <LoginForm
                isModalOpen={isOpen.login}
                closeModal={() => handleToggleForm('login')}
              />
            )}

            <SignupBtn onClick={() => handleToggleForm('signUp')}>
              Registration
            </SignupBtn>

            {isOpen.signUp && (
              <RegistrationForm
                isModalOpen={isOpen.signUp}
                closeModal={() => handleToggleForm('signUp')}
              />
            )}
          </>
        )}
      </UserBox>
    </HeaderContainer>
  );
};

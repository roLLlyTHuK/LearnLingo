import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: var(--primary-text-color);
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const NavigationLink = styled(Link)`
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: var(--primary-text-color);
  text-decoration: none;
  padding: 8px 12px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--btn-color);
    font-weight: 700;
  }

  &.active {
    border-color: var(--btn-color);
    font-weight: 700;
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const LoginBox = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;

  &:hover,
  &:focus {
    color: var(--btn-color);
  }
`;

export const SignupBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 39px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0em;
  color: #fff;
  background-color: var(--primary-text-color);
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--btn-color);
  }
`;

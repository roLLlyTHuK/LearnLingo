import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-color: var(--btn-color);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--btn-hover-color);
  }

  &:focus {
    outline: none;
  }
`;

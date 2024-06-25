import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  background-color: #fff;
  border-radius: 30px;
  padding: 64px;
  margin: 0;
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 20px;
  padding: 0;
  margin: 0;

  h2 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -0.02em;
    margin: 0;
  }

  p {
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  width: 100%;
  padding: 8px 0;
  margin: 0;
  overflow-y: auto;
`;

export const Field = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
  width: 100%;
  padding: 0;
  margin: 0;

  label {
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
    font-size: 16px;
    line-height: 22px;
    color: var(--primary-text-color);

    padding: 0 4px;
    margin: 0;
    pointer-events: none;
    transition: top 0.2s ease;
  }

  input {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    font-size: 16px;
    line-height: 22px;
    width: 100%;
    padding: 16px 18px;
    margin: 0;
    outline: none;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: 0;
      color: var(--btn-color);
      background-color: #eee;
    }

    &:focus {
      border: 1px solid var(--btn-color);
    }

    &.error + label {
      color: red;
    }

    &.error {
      border-color: red;
    }
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--primary-text-color);
  border: none;
  background-color: var(--btn-color);
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-color);
  }
`;

export const ShowBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 17px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:hover {
    color: var(--btn-color);
  }
`;

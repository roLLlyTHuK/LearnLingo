import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 64px;
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 88px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--primary-text-color);
  background-color: var(--btn-color);
  border: none;
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;
  margin: 32px auto;

  &:hover {
    background-color: var(--btn-hover-color);
  }
`;

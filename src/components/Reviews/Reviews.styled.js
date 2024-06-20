import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 32px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 6px;
  padding: 0;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 12px;
  padding: 0;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`;
export const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0;

  p {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0em;
    color: var(--subtitle-text-color);
    padding: 0;
    margin: 0;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 8px;
  padding: 0;
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
`;

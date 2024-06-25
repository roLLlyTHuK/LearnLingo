import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 48px;
  padding: 24px;
  width: 1184px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 96px;
  height: 96px;
`;

export const TeacherInfo = styled.div`
  width: 968px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;

  span {
    font-family: 'Roboto-Medium', sans-serif;
    color: var(--primary-text-color);
  }
`;

export const TopLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 0;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 64px;

    li {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 8px;
      padding: 1px 16px;

      margin: 0;

      p {
        padding: 0;
        margin: 0;
      }

      span {
        color: #38cd3e;
      }
    }

    li:not(:last-child) {
      border-right: 1px solid rgba(12, 14, 17, 0.2);
    }
  }
`;

export const SubTitle = styled.p`
  color: var(--subtitle-text-color);
  padding: 0;
  margin: 0;
`;

export const MoreLink = styled(Link)`
  text-decoration: underline;
  font-style: 16px;
  line-height: 24px;
  margin: 8px 0 24px 0;
`;

export const LevelsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin-bottom: 24px;

  li {
    padding: 8px 12px;
    margin: 0;
    border-radius: 35px;
  }
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 4px;
  margin: 16px 0;
`;

export const PopupBtn = styled.button`
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

export const HeartBtn = styled.button`
  border: none;
  padding: 0;
  margin: 0;
`;

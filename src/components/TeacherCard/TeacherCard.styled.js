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

export const Name = styled.h3`
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: var(--primary-text-color);
`;

export const SubTitle = styled.p`
  color: var(--subtitle-text-color);
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
    gap: 32px;
    padding: 0;
    margin-right: 64px;

    li {
      padding: 1px;
      margin: 0;
    }
  }
`;

export const LevelsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;

  li {
    padding: 8px 12px;
    margin: 0;
    border-radius: 35px;
    border: 1px solid rgba(18, 20, 23, 0.2);
  }
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 4px;
`;

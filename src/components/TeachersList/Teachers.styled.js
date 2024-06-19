import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const TeacherCard = styled.div`
  border: 1.5px dashed #f4c550;
  border-radius: 30px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const TeacherInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeacherName = styled.h3`
  margin: 0;
  font-size: 24px;
`;

export const TeacherDetail = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgba(18, 20, 23, 0.7);
`;

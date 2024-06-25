import styled from 'styled-components';

export const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;

  label {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: var(--subtitle-text-color);
  }

  select {
    border: none;
    padding: 14px 18px;
    border-radius: 8px;
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 18px;
    line-height: 20px;
    text-align: left;
    color: var(--primary-text-color);
  }

  select:focus {
    outline: none;
  }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 98px 64px;
  gap: 32px;
  width: 720px;

  h1 {
    font-size: 48px;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #121417;

    span {
      background-color: #fbe9ba;
      font-style: italic;
      font-weight: 400;
    }
  }

  p {
    width: 471px;
  }
`;

export const BtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 88px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #121417;
  background-color: #f4c550;
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: #ffdc86;
  }
`;

export const HeroImageBox = styled.div`
  display: block;
  position: relative;
  background-color: yellow;
  width: 568px;
  height: 530px;
  border-radius: 30px;
  overflow: hidden;

  img {
    position: absolute;
  }

  img:nth-child(1) {
    top: 80px;
    left: 114px;
  }

  img:nth-child(2) {
    top: 354px;
    left: 103.64px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 40px 123px;
  margin: 0 auto;
  position: relative; /* для позиционирования псевдоэлементов */
  border-radius: 30px;

  &::before,
  &::after,
  & > li::before,
  & > li::after {
    content: '';
    position: absolute;
    background-size: 25px 1.5px; /* длина линии 15px + пробел 15px, толщина линии 1.5px */
    background-repeat: repeat;
    background-color: transparent;
  }

  &::before,
  &::after {
    width: calc(100% - 30px); /* вычитаем радиус для корректного отображения */
    height: 1.5px;
  }

  &::before {
    top: 0;
    left: 15px;
    background-image: linear-gradient(to right, #f4c550 15px, transparent 15px);
  }

  &::after {
    bottom: 0;
    left: 15px;
    background-image: linear-gradient(to right, #f4c550 15px, transparent 15px);
  }

  & > li::before,
  & > li::after {
    width: 1.5px;
    height: calc(100% - 30px); /* вычитаем радиус для корректного отображения */
  }

  & > li::before {
    left: 0;
    top: 15px;
    background-image: linear-gradient(
      to bottom,
      #f4c550 15px,
      transparent 15px
    );
  }

  & > li::after {
    right: 0;
    top: 15px;
    background-image: linear-gradient(
      to bottom,
      #f4c550 15px,
      transparent 15px
    );
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px;
    gap: 16px;
  }

  h3 {
    font-family: Roboto;
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #121417;
    padding: 0;
    margin: 0;
  }

  p {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(18, 20, 23, 0.7);
    padding: 0;
    margin: 0;
  }
`;

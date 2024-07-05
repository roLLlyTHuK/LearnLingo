import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 0;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
  }
`;

export const HeroContent = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;

  h1 {
    width: 100%;
    font-family: 'Roboto-Medium';
    font-size: 36px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--primary-text-color);

    span {
      position: relative;
      font-family: 'Roboto-Regular', sans-serif;
      font-weight: 400;
      font-style: italic;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: var(--bg-secondary-color);
        z-index: -1;
        animation: backgroundFill 2s ease-in-out forwards;
      }
    }

    @keyframes backgroundFill {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  }

  p {
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    align-items: start;
    gap: 32px;
    width: 720px;
    padding: 98px 64px;

    h1 {
      font-size: 36px;
      line-height: 40px;
    }

    p {
      width: 471px;
    }
  }
`;

export const BtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 88px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--primary-text-color);
  background-color: var(--btn-color);
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-color);
  }
`;

export const HeroImageBox = styled.div`
  display: block;
  position: relative;
  background-color: var(--bg-secondary-color);
  width: 320px;
  height: 320px;
  border-radius: 30px;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
  }

  img:nth-child(1) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes greeting {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  img:nth-child(2) {
    top: 70%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  @media screen and (min-width: 1280px) {
    width: 568px;
    height: 530px;
    img {
      position: absolute;
    }

    img:nth-child(1) {
      width: 339px;
      height: 339px;
      top: 80px;
      left: 114px;
      transform: translate(0, 0);
      animation: greeting 1.5s ease-in-out;
    }

    @keyframes greeting {
      0% {
        transform: translateY(50%);
      }
      100% {
        transform: translateX(0);
      }
    }

    img:nth-child(2) {
      width: 360px;
      height: 247px;
      top: 354px;
      left: 103.64px;
      transform: translate(0, 0);
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 40px 123px;
  margin: 0 auto;
  border: 1.5px dashed var(--btn-color);
  border-radius: 30px;

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px;
    gap: 16px;
  }

  h3 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: left;
    color: var(--primary-text-color);
    padding: 0;
    margin: 0;
  }

  p {
    width: 74px;
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(18, 20, 23, 0.7);
    padding: 0;
    margin: 0;
  }
`;

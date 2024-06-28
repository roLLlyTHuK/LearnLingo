import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ButtonWrapper } from './ScrollToTopButton.styled';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <>
      {isVisible && (
        <ButtonWrapper onClick={scrollToTop}>
          <FaArrowUp />
        </ButtonWrapper>
      )}
    </>
  );
};

export default ScrollToTopButton;

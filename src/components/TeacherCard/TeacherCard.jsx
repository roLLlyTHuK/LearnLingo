import { useState } from 'react';
import {
  Avatar,
  Container,
  LevelsList,
  TeacherInfo,
  SubTitle,
  AddInfo,
  TopLine,
  PopupBtn,
  MoreLink,
} from './TeacherCard.styled';
import { FaStar } from 'react-icons/fa';
import Reviews from '../Reviews/Reviews';
import Popup from '../Popup/Popup';

import FavButton from '../FavButton/FavButton';

const TeacherCard = ({ teacher }) => {
  const languagesList = teacher.languages.reduce((acc, langue, index) => {
    if (index < teacher.languages.length - 1) {
      return [...acc, <span key={index}>{langue}</span>, ', '];
    } else {
      return [...acc, <span key={index}>{langue}</span>];
    }
  }, []);

  const [showAddInfo, setShowAddInfo] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleShowAddInfo = () => {
    setShowAddInfo(!showAddInfo);
  };

  return (
    <Container>
      <Avatar src={teacher.avatar_url} alt={teacher.name} />

      <TeacherInfo>
        <TopLine>
          <SubTitle style={{ marginRight: '192px' }}>Languages</SubTitle>
          <ul>
            <li>
              <p>Lessons online</p>
            </li>
            <li>
              <p>Lessons done: {teacher.lessons_done}</p>
            </li>
            <li>
              <FaStar size={16} color="#FFC531" />
              <p>Rating: {teacher.rating}</p>
            </li>
            <li>
              <p>
                Price/1 hour: <span>${teacher.price_per_hour}</span>
              </p>
            </li>
          </ul>
          <FavButton teacher={teacher} />
        </TopLine>
        <h3>
          {teacher.name} {teacher.surname}
        </h3>
        <SubTitle>
          Speaks: <span>{languagesList}</span>
        </SubTitle>
        <SubTitle>
          Lesson Info: <span> {teacher.lesson_info}</span>
        </SubTitle>
        <SubTitle>
          Conditions: <span>{teacher.conditions}</span>
        </SubTitle>

        {!showAddInfo && (
          <MoreLink onClick={handleShowAddInfo}>Read more</MoreLink>
        )}
        {showAddInfo && (
          <AddInfo>
            <p>{teacher.experience}</p>
            <Reviews reviews={teacher.reviews} />
          </AddInfo>
        )}
        <LevelsList>
          {teacher.levels.map((level, index) => (
            <li key={index}>#{level}</li>
          ))}
        </LevelsList>
        {showAddInfo && (
          <PopupBtn onClick={openPopup}>Book trial lesson</PopupBtn>
        )}
        {isPopupOpen && (
          <Popup
            isModalOpen={isPopupOpen}
            closeModal={closePopup}
            teacher={teacher}
          />
        )}
      </TeacherInfo>
    </Container>
  );
};

export default TeacherCard;

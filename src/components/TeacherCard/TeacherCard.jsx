import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Avatar,
  Container,
  LevelsList,
  TeacherInfo,
  SubTitle,
  AddInfo,
  TopLine,
} from './TeacherCard.styled';
import Reviews from '../Reviews/Reviews';

const TeacherCard = ({ teacher }) => {
  const languagesList = teacher.languages.reduce((acc, langue, index) => {
    if (index < teacher.languages.length - 1) {
      return [...acc, <span key={index}>{langue}</span>, ', '];
    } else {
      return [...acc, <span key={index}>{langue}</span>];
    }
  }, []);

  const [showAddInfo, setShowAddInfo] = useState(false);

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
              <p>Rating: {teacher.rating}</p>
            </li>
            <li>
              <p>Price/1 hour: ${teacher.price_per_hour}</p>
            </li>
          </ul>
          <div>Heart</div>
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

        {!showAddInfo && <Link onClick={handleShowAddInfo}>Read more</Link>}
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
      </TeacherInfo>
    </Container>
  );
};

export default TeacherCard;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Container,
  LevelsList,
  TeacherInfo,
  TopLine,
} from './TeacherCard.styled';

const TeacherCard = ({ teacher }) => {
  return (
    <Container>
      <Avatar src={teacher.avatar_url} alt={teacher.name} />

      <TeacherInfo>
        <TopLine>
          <div className="name">
            <p>Languages</p>
            <h3>
              {teacher.name} {teacher.surname}
            </h3>
          </div>
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
        <p>Speaks: {teacher.languages}</p>
        <p>Lesson Info: {teacher.lesson_info} </p>
        <p>Conditions: {teacher.conditions} </p>
        <Link to={`/teachers/${teacher.id}`}>Read more</Link>
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

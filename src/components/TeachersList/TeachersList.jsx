import { useState } from 'react';
import { teachers } from '../../DB/teachers';
import TeacherCard from '../TeacherCard/TeacherCard';
import { LoadMoreBtn } from './TeachersList.styled';

const TeacherList = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      {teachers.slice(0, visibleCount).map((teacher, index) => (
        <TeacherCard key={index} teacher={teacher} />
      ))}
      {visibleCount < teachers.length && (
        <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
      )}
    </>
  );
};

export default TeacherList;

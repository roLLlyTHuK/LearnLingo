import { useEffect, useState } from 'react';
// import { teachers } from '../../DB/teachers';
import TeacherCard from '../TeacherCard/TeacherCard';
import { LoadMoreBtn } from './TeachersList.styled';
import { db } from '../../firebase';
import { onValue, ref } from 'firebase/database';

const TeacherList = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const teachersRef = ref(db, 'teachers');
    onValue(teachersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTeachers(Object.values(data));
      }
    });
  }, []);
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

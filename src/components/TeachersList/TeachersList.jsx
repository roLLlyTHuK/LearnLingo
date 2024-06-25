// TeacherList.jsx
import { useEffect, useState } from 'react';
import TeacherCard from '../TeacherCard/TeacherCard';
import Filters from '../Filters/Filters';
import { LoadMoreBtn } from './TeachersList.styled';
import { db } from '../../firebase';
import { onValue, ref } from 'firebase/database';

const TeacherList = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('');

  useEffect(() => {
    const teachersRef = ref(db, 'teachers');
    onValue(teachersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const teachersArray = Object.values(data);
        setTeachers(teachersArray);
        setFilteredTeachers(teachersArray);
      }
    });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const handleFilterChange = (filters) => {
    const { language, level, price } = filters;
    let filtered = teachers;

    if (language) {
      filtered = filtered.filter((teacher) =>
        teacher.languages.includes(language)
      );
    }

    if (level) {
      filtered = filtered.filter((teacher) => teacher.levels.includes(level));
    }

    if (price) {
      filtered = filtered.filter(
        (teacher) => teacher.price_per_hour === Number(price)
      );
    }
    setSelectedLevel(level);
    setFilteredTeachers(filtered);
    setVisibleCount(4);
  };

  return (
    <>
      <Filters teachers={teachers} onFilterChange={handleFilterChange} />
      {filteredTeachers.slice(0, visibleCount).map((teacher, index) => (
        <TeacherCard
          key={index}
          teacher={teacher}
          selectedLevel={selectedLevel}
        />
      ))}
      {visibleCount < filteredTeachers.length && (
        <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
      )}
    </>
  );
};

export default TeacherList;

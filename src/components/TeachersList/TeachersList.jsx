import { teachers } from '../../DB/teachers';
import TeacherCard from '../TeacherCard/TeacherCard';

const TeacherList = () => {
  return (
    <div>
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} teacher={teacher} />
      ))}
    </div>
  );
};

export default TeacherList;

import { useEffect, useState } from 'react';
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
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import Reviews from '../Reviews/Reviews';
import Popup from '../Popup/Popup';
import { getAuth } from 'firebase/auth';
import { firestore } from '../../firebase';
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

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
  const [isFavorite, setIsFavorite] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleShowAddInfo = () => {
    setShowAddInfo(!showAddInfo);
  };

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      if (user) {
        const userRef = doc(firestore, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setIsFavorite(
            userData.favorites.some((fav) => fav.id === teacher.id)
          );
        }
      }
    };

    checkFavoriteStatus();
  }, [user, teacher.id]);

  const toggleFavorite = async () => {
    if (!user) return;

    const userRef = doc(firestore, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      const favorites = userData.favorites || [];

      const favoriteTeacherIndex = favorites.findIndex(
        (fav) => fav.id === teacher.id
      );

      if (favoriteTeacherIndex !== -1) {
        const updatedFavorites = favorites.filter(
          (fav) => fav.id !== teacher.id
        );
        await updateDoc(userRef, {
          favorites: updatedFavorites,
        });
        setIsFavorite(false);
      } else {
        await updateDoc(userRef, {
          favorites: arrayUnion(teacher),
        });
        setIsFavorite(true);
      }
    }
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
          {isFavorite ? (
            <FaHeart size={22} onClick={toggleFavorite} />
          ) : (
            <FaRegHeart size={22} onClick={toggleFavorite} />
          )}
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

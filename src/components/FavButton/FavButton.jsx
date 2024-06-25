import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { firestore } from '../../firebase';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { FaHeart, FaRegHeart, FaTrash } from 'react-icons/fa6';
import { HeartBtn } from './FavButton.styled';
import { useLocation } from 'react-router-dom';

const FavButton = ({ teacher }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;
  const location = useLocation();

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

  if (location.pathname === '/teachers') {
    return (
      <HeartBtn onClick={toggleFavorite}>
        {isFavorite ? (
          <FaHeart size={22} style={{ color: 'var(--btn-color)' }} />
        ) : (
          <FaRegHeart size={22} style={{ color: 'var(--btn-color)' }} />
        )}
      </HeartBtn>
    );
  } else {
    return (
      <HeartBtn onClick={toggleFavorite}>
        <FaTrash size={22} style={{ color: 'var(--btn-color)' }} />
      </HeartBtn>
    );
  }
};

export default FavButton;

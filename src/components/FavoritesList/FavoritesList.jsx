import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '../../firebase';
import TeacherCard from '../TeacherCard/TeacherCard';

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    let unsubscribe;

    const handleAuthStateChanged = (user) => {
      if (user) {
        const ref = doc(firestore, 'users', user.uid);

        // Listen for real-time updates to the user's favorites
        unsubscribe = onSnapshot(
          ref,
          (snap) => {
            if (snap.exists()) {
              const fav = snap.data().favorites || [];
              setFavorites(fav);
            } else {
              setError('No favorites found');
              setFavorites([]);
            }
            setLoading(false);
          },
          (error) => {
            console.error('Error fetching favorites:', error);
            setError('Failed to fetch favorites');
            setLoading(false);
          }
        );
      } else {
        setLoading(false);
        setError('User not authenticated');
      }
    };

    const unsubscribeAuth = onAuthStateChanged(auth, handleAuthStateChanged);

    return () => {
      if (unsubscribe) unsubscribe();
      unsubscribeAuth();
    };
  }, [auth]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Favorites List [{favorites.length}]</h2>
      <ul>
        {favorites.map((fav, index) => (
          <li key={index}>
            <TeacherCard teacher={fav} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;

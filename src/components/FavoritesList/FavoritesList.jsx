import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const ref = doc(firestore, 'users', user.uid);
          const snap = await getDoc(ref);

          if (snap.exists()) {
            const fav = snap.data().favorites || [];
            setFavorites(fav);
          } else {
            setError('No favorites found');
          }
        } catch (error) {
          console.error('Error fetching favorites:', error);
          setError('Failed to fetch favorites');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        setError('User not authenticated');
      }
    });

    return () => unsubscribe();
  }, [favorites.length]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Favorites List [{favorites.length}]</h2>
      <ul>
        {favorites.map((fav, index) => (
          <li key={index}>{fav}</li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;

import { Item, List, NameBlock, Rating, UserBox } from './Reviews.styled';
import { FaCircleUser } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

const Reviews = ({ reviews }) => {
  return (
    <List>
      {reviews.map((review, index) => (
        <Item key={index}>
          <UserBox>
            {review.reviewer_avatar ? (
              <img src={review.reviewer_avatar} alt="Reviewer Avatar" />
            ) : (
              <FaCircleUser size={44} />
            )}
            <NameBlock>
              <p>{review.reviewer_name}</p>
              <Rating>
                <FaStar size={16} color="#FFC531" />
                <p>{review.reviewer_rating}</p>
              </Rating>
            </NameBlock>
          </UserBox>
          <p>{review.comment}</p>
        </Item>
      ))}
    </List>
  );
};

export default Reviews;

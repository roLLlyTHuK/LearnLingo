import FaceImg from '../../assets/face_x1.png';
import MacImg from '../../assets/iMac.png';
import {
  BtnLink,
  HeroContent,
  HeroImageBox,
  List,
  TopWrapper,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <TopWrapper>
        <HeroContent>
          <h1>
            Unlock your potential with the best <span>language</span> tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <BtnLink to="/teachers">Get started</BtnLink>
        </HeroContent>
        <HeroImageBox>
          <img src={FaceImg} width={339} height={339} alt="" />
          <img src={MacImg} width={360} height={247} alt="" />
        </HeroImageBox>
      </TopWrapper>
      <List>
        <li>
          <h3>32,000 +</h3>
          <p>Experienced tutors</p>
        </li>
        <li>
          <h3>300,000 +</h3>
          <p>5-star tutor reviews</p>
        </li>
        <li>
          <h3>120 +</h3>
          <p>Subjects taught</p>
        </li>
        <li>
          <h3>200 +</h3>
          <p>Tutor nationalities</p>
        </li>
      </List>
    </>
  );
};

export default HomePage;

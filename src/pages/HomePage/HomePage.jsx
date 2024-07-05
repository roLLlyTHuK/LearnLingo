import FaceImg from '../../assets/face_x1.png';
import MacImg from '../../assets/iMac.png';
import {
  BtnLink,
  Container,
  HeroContent,
  HeroImageBox,
  List,
  TopWrapper,
} from './HomePage.styled';
import CountUp from 'react-countup';

const HomePage = () => {
  const data = [
    { value: 32000, text: 'Experienced tutors' },
    { value: 300000, text: '5-star tutor reviews' },
    { value: 120, text: 'Subjects taught' },
    { value: 200, text: 'Tutor nationalities' },
  ];
  return (
    <Container>
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
        <HeroImageBox id="hero">
          <img src={FaceImg} alt="" />
          <img src={MacImg} alt="" />
        </HeroImageBox>
      </TopWrapper>
      <List>
        {data.map((item, index) => (
          <li key={index}>
            <h3>
              <CountUp
                start={0}
                end={item.value}
                duration={2.75}
                separator=","
              />
              {' +'}
            </h3>
            <p>{item.text}</p>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default HomePage;

import Banner from '../components/Banner';
import Instructors from '../components/Instructors';
import Partner from '../components/Partner';
import PopularCourses from '../components/PopularCourses';

const Home = () => {
  return (
    <>
      <Banner />
      <PopularCourses />
      <Instructors />
      <Partner />
    </>
  );
};
export default Home;

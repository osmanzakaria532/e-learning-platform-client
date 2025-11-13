import { useLoaderData } from 'react-router';
import Courses from '../components/Courses';
import Container from '../components/shered_ui/Container';

const AllCourses = () => {
  const courseData = useLoaderData();

  // console.log(courseData);

  return (
    <div className="py-10">
      <Container>
        <h2 className="text-2xl font-bold">All Courses</h2>

        <div>
          <Courses courseData={courseData} />
        </div>
      </Container>
    </div>
  );
};

export default AllCourses;

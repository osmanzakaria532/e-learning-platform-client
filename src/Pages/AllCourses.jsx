import { useLoaderData, useNavigation } from 'react-router';
import Courses from '../components/Courses';
import Container from '../components/shared_ui/Container';

const AllCourses = () => {
  const courseData = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  console.log(isLoading);

  return (
    <div className="py-10">
      <Container>
        <h2 className="text-2xl font-bold">All Courses</h2>
        {!courseData || isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse border rounded-lg p-4 space-y-3">
                <div className="h-40 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-8 bg-gray-200 rounded w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <Courses courseData={courseData} />
        )}
      </Container>
    </div>
  );
};

export default AllCourses;

import CourseCard from './shered_ui/CourseCard';

const Courses = ({ courseData }) => {
  //   console.log(courseData);

  return (
    <div className="py-10">
      {/* <Container>
        <h2 className="text-center">All Courses</h2>
      </Container> */}

      <div className="grid grid-cols-3 gap-6">
        {courseData?.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;

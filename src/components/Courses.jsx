import CourseCard from './shared_ui/CourseCard';

const Courses = ({ courseData }) => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-3 gap-6">
        {courseData?.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;

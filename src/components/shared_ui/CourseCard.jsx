import { PiFilesDuotone, PiStudentFill } from 'react-icons/pi';
import { useNavigate } from 'react-router';

const CourseCard = ({ course }) => {
  const courseData = course;

  const navigate = useNavigate();

  const handlecourseDataDetails = (courseId) => {
    console.log('course Details Click', courseId);
    navigate(`/course-details/${courseId}`);
  };

  return (
    <div>
      <div className="overflow-hidden rounded-t-md border border-b-0 relative">
        <div className="absolute top-3 z-40 w-full flex justify-between px-3.5 text-xs">
          <p className="bg-[#2da973] text-white py-1 px-2 rounded-full">{courseData.category}</p>
          <p className="bg-[#2da973] text-white py-1 px-2 rounded-full">{courseData.level}</p>
        </div>
        <div className="relative">
          <img
            src={courseData.thumbnail_url}
            alt=""
            className="w-full h-[175px] bg-top object-cover"
          />
          {/* Shadow Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
      <div className="border border-t-0 py-3 h-52 flex flex-col justify-between">
        <div className="px-3 mb-5 ">
          <div className="mb-6 flex items-center gap-3.5">
            <p className="flex items-center gap-2.5">
              <PiStudentFill />
              <span>Students {courseData.total_enrolled_students}</span>
            </p>
            <p className="flex items-center gap-2.5">
              <PiFilesDuotone />
              <span>Students {courseData.total_lessons}</span>
            </p>
          </div>
          <h2 className="text-xl font-bold">{courseData.title}</h2>
          <p>{courseData.short_description}</p>
        </div>
        <div className="px-1 flex justify-center items-center gap-3.5">
          <div className="w-full">
            <button
              onClick={() => handlecourseDataDetails(courseData._id)}
              className="btn bg-[#2da973] text-white w-full"
            >
              View Details
            </button>
          </div>
          <button
            // onClick={() => handlecourseDataDetails(courseData._id)}
            className="btn border border-[#2da973] hover:border-transparent hover:bg-[#2da973] hover:text-white"
          >
            Enrolled Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

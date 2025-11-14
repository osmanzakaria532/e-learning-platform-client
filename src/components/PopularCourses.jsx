import { useEffect, useState } from 'react';
import { PiFilesDuotone, PiStudentFill } from 'react-icons/pi';
import { useNavigate } from 'react-router';
import Container from './shared_ui/Container';

const PopularCourses = () => {
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/popular-courses')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourse(data);
      });
  }, []);

  const handlecourseDataDetails = (courseId) => {
    console.log('course Details Click', courseId);
    navigate(`/course-details/${courseId}`);
  };
  return (
    <div>
      <Container>
        <h2 className="text-2xl font-bold mb-5">Popular Courses {course.length}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {course.map((item) => (
            <div key={item._id} className="p-4 border rounded-lg shadow" data-aos="fade">
              <div className="overflow-hidden rounded-t-md border border-b-0 relative">
                <div className="absolute top-3 z-40 w-full flex justify-between px-3.5 text-xs">
                  <p className="bg-[#2da973] text-white py-1 px-2 rounded-full">{item.category}</p>
                  <p className="bg-[#2da973] text-white py-1 px-2 rounded-full">{item.level}</p>
                </div>
                <div className="relative">
                  <img
                    src={item.thumbnail_url}
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
                      <span>Students {item.total_enrolled_students}</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <PiFilesDuotone />
                      <span>Students {item.total_lessons}</span>
                    </p>
                  </div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p>{item.short_description}</p>
                </div>
                <div className="px-1 flex justify-center items-center gap-3.5">
                  <div className="w-full">
                    <button
                      onClick={() => handlecourseDataDetails(item._id)}
                      className="btn bg-[#2da973] text-white w-full"
                    >
                      View Details
                    </button>
                  </div>
                  <button
                    // onClick={() => handlecourseDataDetails(item._id)}
                    className="btn border border-[#2da973] hover:border-transparent hover:bg-[#2da973] hover:text-white"
                  >
                    Enrolled Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularCourses;

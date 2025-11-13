import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from './shared_ui/Container';

const CourseDetails = () => {
  //   const courseDetails = useLoaderData();
  const [course, setCourse] = useState();
  const { courseId } = useParams();

  console.log(courseId);

  useEffect(() => {
    fetch(`http://localhost:5000/course-details/${courseId}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [courseId]);

  if (!course) {
    return (
      <Container>
        <div>Loading...</div>
      </Container>
    );
  }

  return (
    <div className="py-10 bg-[#E5E5E5]">
      <Container>
        <p className="text-2xl font-semibold mb-5">{`Course Id ${course._id}`}</p>
        <div className="flex gap-6 bg-[#EFEBF5] rounded-lg py-10 px-8">
          <div>
            <div className="">
              <img src={course.thumbnail_url} alt="" className="h-[450px] " />
            </div>
            <h2 className="mt-6 text-xl font-bold">
              <span>Course Name</span> : {course.title}
            </h2>
          </div>
          <div className="">s</div>
        </div>

        <div className="mt-10">
          <h3 className="mb-10">Course Details</h3>
          <div className="flex gap-6">
            {/* Left */}
            <p className="w-10/12">{course.long_description}</p>

            {/* Right */}
            <div className="w-2/12 bg-white shadow rounded-lg py-5 px-3">
              <p className="flex justify-between">
                <span>Price</span> <span className="text-red-700">${course.price}</span>
              </p>
              <p className="flex justify-between">
                <span>Ratings</span> <span className="">${course.rating}</span>
              </p>
              <p className="flex justify-between">
                <span>Review</span> <span className="">${course.total_reviews}</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CourseDetails;

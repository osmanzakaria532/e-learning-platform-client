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
          <h3 className="mb-5 text-xl font-medium">Course Details</h3>
          <div className="flex gap-6">
            {/* Left */}
            <p className="w-9/12">
              <div>{course.long_description}</div>
              <div>
                <h3 className="my-5 text-xl font-medium ">Course Details</h3>
                <p>
                  “This certification represents a significant step in my professional development.
                  It not only validates my skills but also enhances my confidence in applying them
                  effectively in real-world situations. By earning this credential, I am better
                  prepared to take on new responsibilities and pursue greater opportunities in my
                  career.”
                </p>
              </div>
              <div>
                <h3 className="my-5 text-xl font-medium ">Who this course is for</h3>
                <p>
                  “This course is designed for students, professionals, and aspiring learners who
                  want to strengthen their skills and gain practical, industry-ready knowledge.
                  Whether you are beginning your learning journey or looking to enhance existing
                  expertise, this course provides clear guidance, hands-on practice, and valuable
                  resources to support your growth.”
                </p>
              </div>
            </p>

            {/* Right */}
            <div className="w-3/12">
              <div className="bg-white shadow rounded-lg py-5 px-3">
                <div className="space-y-1">
                  <p className="flex justify-between">
                    <span className="text-[#5D5A6F] font-semibold">Price</span>{' '}
                    <span className="text-red-700">${course.price}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#5D5A6F] font-semibold">Ratings</span>{' '}
                    <span className="">{course.rating}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#5D5A6F] font-semibold">Review</span>{' '}
                    <span className="">{course.total_reviews}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#5D5A6F] font-semibold">Durations</span>{' '}
                    <span className="">{course.duration}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#5D5A6F] font-semibold">Lessons</span>{' '}
                    <span className="">{course.total_lessons}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#5D5A6F] font-semibold">Quizzes</span>{' '}
                    <span className="">10</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#5D5A6F] font-semibold">Certificate</span>{' '}
                    <span className="">Yes</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#5D5A6F] font-semibold">Language</span>{' '}
                    <span className="">{course.language}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#5D5A6F] font-semibold">Access</span>{' '}
                    <span className="">LifeTime</span>
                  </p>
                </div>
                <div className="mt-5">
                  <button className="btn bg-[#2da973] text-white w-full">Enroll Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CourseDetails;

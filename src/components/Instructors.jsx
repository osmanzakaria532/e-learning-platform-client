import { useEffect, useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router';
import Container from './shared_ui/Container';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('https://e-learning-platform-server-osmanzakaria.vercel.app/top-instructors')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInstructors(data);
      });
  }, []);
  return (
    <div className="py-20">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold ">Top Instructors</h2>
          <div>
            <Link to="/instructors" className="btn border border-[#2da973] ">
              See more
            </Link>
          </div>
        </div>
        <div className="mt-10 grid lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <div key={instructor._id} className="border rounded-t-lg ">
              <div className="overflow-hidden">
                <div className="relative group rounded-lg">
                  <img
                    src={instructor.teacher_image_url}
                    alt={instructor.teacher_name}
                    className="w-full h-[300px] object-cover rounded-t-lg"
                  />

                  <div className="absolute inset-0 bg-[#2da973]/50 flex justify-center items-center opacity-0  -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all  duration-500 rounded-t-lg">
                    <div className="flex gap-3 text-white">
                      <FaLinkedin className="cursor-pointer text-2xl" />
                      <FaFacebook className="cursor-pointer text-2xl" />
                      <FaTwitterSquare className="cursor-pointer text-2xl" />
                    </div>
                  </div>
                </div>

                <div className="p-4 text-center">
                  <h4 className="text-2xl">{instructor.teacher_name}</h4>
                  <p className="">{instructor.teacher_bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Instructors;

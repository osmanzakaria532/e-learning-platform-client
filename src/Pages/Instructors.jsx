import { useEffect, useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Container from '../components/shared_ui/Container';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/instructors')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setInstructors(data);
      });
  }, []);
  return (
    <div className="py-10">
      <Container>
        <h2 className="text-2xl font-bold ">Instructors</h2>
        <div className="mt-5 grid lg:grid-cols-4 gap-6">
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

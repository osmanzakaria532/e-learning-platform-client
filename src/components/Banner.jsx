import { IoSearchOutline } from 'react-icons/io5';
import bannerImg from '../../src/assets/banner-img.png';
import Container from './shared_ui/Container';

const Banner = () => {
  return (
    <div>
      <div className="mt-10">
        <Container className="flex items-center">
          <div className="">
            <p className="bg-[rgba(45,169,115,.08)] inline-block rounded-full py-1 pr-3 mb-5">
              <span className="bg-[#2da973] text-white rounded-full py-1 px-3">Online!</span> Global
              learning platform
            </p>
            <div className="font-bold">
              <h2 className="text-6xl text-[#2da973] ">Master Mind</h2>
              <p className="text-5xl my-3">E-Learning Platform</p>
              <p className="text-4xl">Easy to Manage</p>
            </div>
            <div className="mt-5 leading-6 w-1/2">
              <p className="text-gray-400">
                During this era, online learning unexpectedly increased. The single person relay on
                the internet to learning somethings!
              </p>
            </div>
            <div className="join mt-4">
              <div className="w-92">
                <label className="input join-item focus:border-none focus:outline-none w-full">
                  <input
                    type="search"
                    placeholder="Search For anything"
                    required
                    className="focus:outline-none focus:border-none "
                  />
                </label>
              </div>
              <button className="btn bg-[#2da973] join-item text-white">
                <IoSearchOutline /> Search
              </button>
            </div>
            <div className="flex items-center gap-1.5 mt-4">
              <p className="text-xl">Courses :</p>
              <p className="flex gap-2">
                <span className="bg-[rgba(45,169,115,.08)] py-1 px-3 rounded-full text-sm">
                  Machine learning
                </span>
                <span className="bg-[rgba(45,169,115,.08)] py-1 px-3 rounded-full text-sm">
                  Digital Marketing
                </span>
                <span className="bg-[rgba(45,169,115,.08)] py-1 px-3 rounded-full text-sm">
                  Web Development
                </span>
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <img src={bannerImg} alt="" className="w-full h-[500px] object-contain" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;

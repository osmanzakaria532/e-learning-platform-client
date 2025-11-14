import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <>
      <footer className="bg-base-200 text-base-content p-10 ">
        <div className="flex items-center">
          <div className="footer sm:footer-horizontal ">
            <nav>
              <h6 className="footer-title">Courses</h6>
              <Link href="#" className="link link-hover">
                Classroom courses
              </Link>
              <Link href="#" className="link link-hover">
                Virtual classroom courses
              </Link>
              <Link href="#" className="link link-hover">
                E-learning courses
              </Link>
              <Link href="#" className="link link-hover">
                AdvertiVideo Coursessement
              </Link>
              <Link href="#" className="link link-hover">
                Offline Courses
              </Link>
            </nav>
            <nav>
              <h6 className="footer-title">Community</h6>
              <Link href="#" className="link link-hover">
                Learners
              </Link>
              <Link href="#" className="link link-hover">
                Parteners
              </Link>
              <Link href="#" className="link link-hover">
                Developers
              </Link>
              <Link href="#" className="link link-hover">
                Transactions
              </Link>
              <Link href="#" className="link link-hover">
                Blog
              </Link>
              <Link href="#" className="link link-hover">
                Teaching Center
              </Link>
            </nav>

            <nav>
              <h6 className="footer-title">Quick links</h6>
              <Link to="#" className="link link-hover">
                Home
              </Link>
              <Link href="#" className="link link-hover">
                Professional Education
              </Link>
              <Link href="#" className="link link-hover">
                Courses
              </Link>
              <Link href="#" className="link link-hover">
                Admissions
              </Link>
              <Link href="#" className="link link-hover">
                Testimonial
              </Link>
              <Link href="#" className="link link-hover">
                Programs
              </Link>
            </nav>

            <nav>
              <h6 className="footer-title">More</h6>
              <Link to="#" className="link link-hover">
                Press
              </Link>
              <Link href="#" className="link link-hover">
                Investors
              </Link>
              <Link href="#" className="link link-hover">
                Help
              </Link>
              <Link href="#" className="link link-hover">
                Testimonial
              </Link>
              <Link href="#" className="link link-hover">
                Contact
              </Link>
            </nav>

            <nav>
              <h6 className="footer-title">Servises</h6>
              <Link href="#" className="link link-hover">
                Branding
              </Link>
              <Link href="#" className="link link-hover">
                Design
              </Link>
              <Link href="#" className="link link-hover">
                Marketing
              </Link>
              <Link href="#" className="link link-hover">
                Advertisement
              </Link>
            </nav>
          </div>

          <div className="">
            <div className="mb-3">
              <h6 className="footer-title">Social Links</h6>
              <div className="flex gap-5">
                <FaLinkedin className="cursor-pointer text-2xl" />
                <FaFacebook className="cursor-pointer text-2xl" />
                <FaTwitterSquare className="cursor-pointer text-2xl" />
              </div>
            </div>
            <form>
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="w-80">
                <label>Enter your email address</label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item"
                  />
                  <button className="btn btn-primary join-item">Subscribe</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="mt-10 flex justify-between">
          <p>copy right</p>
          <nav className="flex justify-end gap-2.5 ">
            <Link href="#" className="link link-hover">
              Terms of use
            </Link>
            <Link href="#" className="link link-hover">
              Privacy policy
            </Link>
            <Link href="#" className="link link-hover">
              Cookie policy
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;

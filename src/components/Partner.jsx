/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';

import instructor from '../../src/assets/become-instructor.jpg';

const Partner = () => {
  return (
    <section className="bg-white text-gray-900 py-10">
      <div className="min-h-[70vh] w-full grid md:grid-cols-2 overflow-hidden shadow-sm">
        <div className="relative px-8 py-14 md:py-20 flex items-center">
          <div className="absolute inset-0 bg-linear-to-br from-rose-500 via-rose-500 to-rose-600" />
          <svg
            className="absolute inset-0 h-full w-full opacity-25 mix-blend-overlay"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="waves" width="120" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M0 30 Q 30 0 60 30 T 120 30"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.5"
                />
                <path
                  d="M0 60 Q 30 30 60 60 T 120 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.35"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
              Become an Instructor
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-rose-50/90 max-w-2xl">
              Choose from hundreds of free courses, or get a degree or certificate at a breakthrough
              price. Learn at your own pace.
            </p>

            <div className="mt-10">
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-base font-semibold text-gray-900 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.4)] ring-1 ring-black/5 hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.5)] transition-all"
              >
                <PlusCircle className="h-6 w-6" />
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Image panel */}
        <div className="relative min-h-[40vh] md:min-h-[70vh]">
          <img
            src={instructor}
            alt="Person typing on a laptop"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* Soft fade at seam (optional) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white/0 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Partner;

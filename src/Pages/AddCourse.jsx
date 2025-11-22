// src/Pages/AddCourse.jsx
import { useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AddCourse = () => {
  const [form, setForm] = useState({
    title: '',
    slug: '',
    price: '',
    discount_price: '',
    is_discounted: false,
    short_description: '',
    long_description: '',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '',
    language: 'English',
    thumbnail_url: '',
    video_intro_url: '',
    teacher_name: '',
    teacher_bio: '',
    teacher_image_url: '',
    total_lessons: '',
    tags: '',
    learning_outcomes: '',
    requirements: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleTitleBlur = () => {
    if (!form.slug && form.title) {
      setForm((prev) => ({
        ...prev,
        // slug: generateSlug(prev.title),
      }));
    }
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      title: form.title,
      slug: form.slug,

      price: form.price ? Number(form.price) : 0,
      discount_price: form.discount_price ? Number(form.discount_price) : 0,
      is_discounted: form.is_discounted,

      short_description: form.short_description,
      long_description: form.long_description,

      category: form.category,
      level: form.level,
      duration: form.duration,
      language: form.language,

      thumbnail_url: form.thumbnail_url,
      video_intro_url: form.video_intro_url,

      teacher_name: form.teacher_name,
      teacher_bio: form.teacher_bio,
      teacher_image_url: form.teacher_image_url,

      total_lessons: form.total_lessons ? Number(form.total_lessons) : 0,
    };

    try {
      const res = await fetch(
        'https://e-learning-platform-server-osmanzakaria.vercel.app/add-course',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || 'Something went wrong');
      }

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '✅ Course created successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
      console.log('Created course:', data);

      // form reset
      setForm({
        title: '',
        slug: '',
        price: '',
        discount_price: '',
        is_discounted: false,
        short_description: '',
        long_description: '',
        category: 'Web Development',
        level: 'Intermediate',
        duration: '',
        language: 'English',
        thumbnail_url: '',
        video_intro_url: '',
        teacher_name: '',
        teacher_bio: '',
        teacher_image_url: '',
        total_lessons: '',
        tags: '',
        learning_outcomes: '',
        requirements: '',
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Failed to create course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleAddCourse}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-slate-900 mb-2">Add New Course</h2>

        {/* Title */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Course Title *</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              onBlur={handleTitleBlur}
              required
              placeholder="Full Stack Web Development"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Slug</label>
            <input
              type="text"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              placeholder="full-stack-web-development"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Short & Long Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Short Description</label>
          <input
            type="text"
            name="short_description"
            value={form.short_description}
            onChange={handleChange}
            placeholder="Learn MERN stack from scratch."
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Long Description</label>
          <textarea
            name="long_description"
            value={form.long_description}
            onChange={handleChange}
            rows={4}
            placeholder="Write detailed description of the course..."
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Category, Level, Duration, Language */}
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Level</label>
            <select
              name="level"
              value={form.level}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Duration</label>
            <input
              type="text"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              placeholder="25h 40m"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Language</label>
            <input
              type="text"
              name="language"
              value={form.language}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Price Info */}
        <div className="grid md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="99"
              min="0"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Discount Price</label>
            <input
              type="number"
              name="discount_price"
              value={form.discount_price}
              onChange={handleChange}
              placeholder="79"
              min="0"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="is_discounted"
              checked={form.is_discounted}
              onChange={handleChange}
            />
            <span className="text-sm text-slate-700">Discount active?</span>
          </div>
        </div>

        {/* Media URLs */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Thumbnail URL</label>
            <input
              type="text"
              name="thumbnail_url"
              value={form.thumbnail_url}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Intro Video URL</label>
            <input
              type="text"
              name="video_intro_url"
              value={form.video_intro_url}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Teacher Info */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Teacher Name</label>
            <input
              type="text"
              name="teacher_name"
              value={form.teacher_name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Teacher Bio</label>
            <input
              type="text"
              name="teacher_bio"
              value={form.teacher_bio}
              onChange={handleChange}
              placeholder="Senior Developer with 10+ years..."
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Teacher Image URL</label>
          <input
            type="text"
            name="teacher_image_url"
            value={form.teacher_image_url}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Total Lessons & Tags */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Total Lessons</label>
            <input
              type="number"
              name="total_lessons"
              value={form.total_lessons}
              onChange={handleChange}
              placeholder="45"
              min="0"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Tags (comma or newline)
            </label>
            <textarea
              name="tags"
              value={form.tags}
              onChange={handleChange}
              rows={2}
              placeholder="MERN, Full Stack, JavaScript"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Learning Outcomes & Requirements */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Learning Outcomes (one per line)
            </label>
            <textarea
              name="learning_outcomes"
              value={form.learning_outcomes}
              onChange={handleChange}
              rows={3}
              placeholder={`Build full-stack applications\nUse MongoDB, Express, React, and Node.js effectively`}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Requirements (one per line)
            </label>
            <textarea
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              rows={3}
              placeholder={`Basic JavaScript\nHTML/CSS knowledge`}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-slate-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-slate-800 disabled:opacity-60"
        >
          {loading ? 'Saving...' : 'Save Course'}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;

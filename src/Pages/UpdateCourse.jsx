// src/UpdateCourse.jsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const UpdateCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    slug: '',
    price: '',
    short_description: '',
    long_description: '',
    category: '',
    level: 'Intermediate',
    duration: '',
    language: 'English',
  });
  const [original, setOriginal] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(
          `https://e-learning-platform-server-osmanzakaria.vercel.app/all-courses/${id}`,
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.message || 'Failed to load course');
        }

        const mapped = {
          title: data.title || '',
          slug: data.slug || '',
          price: data.price ?? '',
          short_description: data.short_description || '',
          long_description: data.long_description || '',
          category: data.category || '',
          level: data.level || 'Intermediate',
          duration: data.duration || '',
          language: data.language || 'English',
        };

        setForm(mapped);
        setOriginal(mapped);
        setLoading(false);
      } catch (err) {
        console.error(err);
        toast.error(err.message || 'Something went wrong loading course');
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!original) return;

    if (value.trim() === '') {
      setForm((prev) => ({
        ...prev,
        [name]: original[name] || '',
      }));
      return;
    }
  };

  // ---------- 4. submit / update ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const payload = {
      title: form.title,
      slug: form.slug,
      price: form.price ? Number(form.price) : 0,
      short_description: form.short_description,
      long_description: form.long_description,
      category: form.category,
      level: form.level,
      duration: form.duration,
      language: form.language,
    };

    try {
      const res = await fetch(
        `https://e-learning-platform-server-osmanzakaria.vercel.app/update-course/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || 'Failed to update course');
      }

      toast.success('✅ Course updated successfully!');
      navigate('/all-courses');
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Failed to update course');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-sm text-slate-700">Loading course...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-slate-900 mb-2">Update Course</h2>

        {/* Title & Slug */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Course Title *</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              onBlur={handleBlur}
              required
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
              onBlur={handleBlur}
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
            onBlur={handleBlur}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Long Description</label>
          <textarea
            name="long_description"
            value={form.long_description}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={4}
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
              onBlur={handleBlur}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Level</label>
            <select
              name="level"
              value={form.level}
              onChange={handleChange}
              onBlur={handleBlur}
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
              onBlur={handleBlur}
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
              onBlur={handleBlur}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            onBlur={handleBlur}
            min="0"
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={saving}
          className="w-full bg-slate-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-slate-800 disabled:opacity-60"
        >
          {saving ? 'Updating...' : 'Update Course'}
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;

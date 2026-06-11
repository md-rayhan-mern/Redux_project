import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image, Type, FolderOpen, Send, Eye, X } from "lucide-react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  // ইমেজ সিলেক্ট করলে প্রিভিউ দেখানোর ফাংশন
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // ইমেজ রিমুভ করার ফাংশন
  const removeImage = () => {
    setImagePreview(null);
  };

  // ফর্ম সাবমিট হ্যান্ডলার (পরবর্তীতে রিডাক্স ও মঙ্গোডিবি যুক্ত হবে)
  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = { title, category, content, image: imagePreview };
    console.log("নতুন ব্লগের ডাটা:", blogData);
    alert("ব্লগ সাবমিট হয়েছে! (ডাটা কনসোলে দেখুন)");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 max-w-4xl"
    >
      {/* ১. হেডার */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          নতুন ব্লগ পোস্ট তৈরি করুন
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          আপনার ব্লগের জন্য চমৎকার একটি কন্টেন্ট এবং আকর্ষণীয় টাইটেল লিখুন।
        </p>
      </div>

      {/* ২. মূল ফর্ম */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6"
      >
        {/* কভার ইমেজ আপলোড সেকশন */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            কভার ইমেজ
          </label>

          {!imagePreview ? (
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50/50 hover:border-indigo-400 transition-all group">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-slate-400 group-hover:text-indigo-500 transition-colors">
                <Image size={36} className="mb-2" />
                <p className="text-sm font-medium">
                  এখানে ক্লিক করে ইমেজ আপলোড করুন
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  PNG, JPG, JPEG (Max 2MB)
                </p>
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
                required
              />
            </label>
          ) : (
            <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-100">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-3 right-3 p-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 shadow-md transition-all"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>

        {/* টাইটেল এবং ক্যাটাগরি গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* টাইটেল ইনপুট */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 mb-2">
              <Type size={16} className="text-slate-400" /> ব্লগের শিরোনাম
              (Title)
            </label>
            <input
              type="text"
              placeholder="যেমন: রিয়্যাক্ট ও রিডাক্স শেখার সহজ উপায়"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-sm"
              required
            />
          </div>

          {/* ক্যাটাগরি ড্রপডাউন */}
          <div>
            <label className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 mb-2">
              <FolderOpen size={16} className="text-slate-400" /> ক্যাটাগরি
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-sm cursor-pointer"
              required
            >
              <option value="" disabled>
                বাছাই করুন
              </option>
              <option value="web-dev">ওয়েব ডেভেলপমেন্ট</option>
              <option value="programming">প্রোগ্রামিং</option>
              <option value="tech">টেকনোলজি</option>
              <option value="lifestyle">লাইফস্টাইল</option>
            </select>
          </div>
        </div>

        {/* ব্লগ কন্টেন্ট/ডেসক্রিপশন */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            মূল কন্টেন্ট (Content)
          </label>
          <textarea
            rows="8"
            placeholder="আপনার ব্লগের বিস্তারিত তথ্য এখানে লিখুন..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-sm resize-none"
            required
          />
        </div>

        {/* বাটন গ্রুপ */}
        <div className="flex justify-end gap-4 pt-2">
          <button
            type="button"
            className="px-5 py-3 bg-slate-100 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors flex items-center gap-2"
          >
            <Eye size={16} /> প্রিভিউ দেখুন
          </button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20 flex items-center gap-2"
          >
            <Send size={16} /> পাবলিশ করুন
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default CreateBlog;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileEdit,
  Trash2,
  Eye,
  Search,
  Filter,
  AlertCircle,
} from "lucide-react";

const ManageBlogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // ডামি ব্লগ ডেটা (পরবর্তীতে মঙ্গোডিবি ডেটাবেজ থেকে আসবে)
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "রিয়্যাক্ট এবং রিডাক্স দিয়ে কিভাবে প্রজেক্ট সাজাবেন",
      category: "ওয়েব ডেভেলপメント",
      date: "৮ জুন, ২০২৬",
      status: "Published",
      views: "১,২৪০",
    },
    {
      id: 2,
      title: "মঙ্গোডিবি ডেটাবেজ ডিজাইনের সেরা ৫টি নিয়ম",
      category: "প্রোগ্রামিং",
      date: "৬ জুন, ২০২৬",
      status: "Published",
      views: "৮৯০",
    },
    {
      id: 3,
      title: "টেইলউইন্ড সিএসএস এর দারুণ কিছু টিপস ও ট্রিকস",
      category: "ওয়েব空間",
      date: "৪ জুন, ২০২৬",
      status: "Draft",
      views: "০",
    },
    {
      id: 4,
      title: "২০২৬ সালে জাভাস্ক্রিপ্ট শেখার রোডম্যাপ",
      category: "টেকনোলজি",
      date: "১ জুন, ২০২৬",
      status: "Published",
      views: "২,১৫০",
    },
  ]);

  // ব্লগ ডিলিট করার ফাংশন
  const handleDelete = (id) => {
    if (window.confirm("আপনি কি নিশ্চিত যে এই ব্লগটি ডিলিট করতে চান?")) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };

  // সার্চ এবং ফিল্টারিং লজিক
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      statusFilter === "all" || blog.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* ১. হেডার সেকশন */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            সব ব্লগ পোস্ট ম্যানেজ করুন
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            আপনার পাবলিশ হওয়া এবং ড্রাফট ব্লগের তালিকা দেখুন, এডিট বা ডিলিট
            করুন।
          </p>
        </div>
      </div>

      {/* ২. সার্চ এবং ফিল্টার বার */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        {/* সার্চ ইনপুট */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-3.5 text-slate-400"
          />
          <input
            type="text"
            placeholder="ব্লগের শিরোনাম দিয়ে সার্চ করুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-sm"
          />
        </div>
        {/* ফিল্টার ড্রপডাউন */}
        <div className="relative min-w-[160px]">
          <Filter
            size={16}
            className="absolute left-4 top-4 text-slate-400 pointer-events-none"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all cursor-pointer appearance-none"
          >
            <option value="all">সব স্ট্যাটাস</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>

      {/* ৩. ডেটা টেবিল */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-400 uppercase text-xs font-bold tracking-wider border-b border-slate-100">
                <th className="py-4 px-6 text-right">ব্লগের শিরোনাম</th>
                <th className="py-4 px-6 text-right">ক্যাটাগরি</th>
                <th className="py-4 px-6 text-right">তারিখ</th>
                <th className="py-4 px-6 text-center">ভিউ</th>
                <th className="py-4 px-6 text-center">স্ট্যাটাস</th>
                <th className="py-4 px-6 text-center">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <AnimatePresence>
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <motion.tr
                      key={blog.id}
                      layout
                      exit={{
                        opacity: 0,
                        x: -20,
                        transition: { duration: 0.2 },
                      }}
                      className="hover:bg-slate-50/50 transition-colors text-sm text-slate-600"
                    >
                      {/* শিরোনাম */}
                      <td className="py-4 px-6 font-semibold text-slate-700 max-w-xs md:max-w-md truncate text-right">
                        {blog.title}
                      </td>
                      {/* ক্যাটাগরি */}
                      <td className="py-4 px-6 text-right">{blog.category}</td>
                      {/* তারিখ */}
                      <td className="py-4 px-6 text-right text-slate-400 text-xs">
                        {blog.date}
                      </td>
                      {/* ভিউ */}
                      <td className="py-4 px-6 text-center font-medium flex items-center justify-center gap-1">
                        <Eye size={14} className="text-slate-400" />{" "}
                        {blog.views}
                      </td>
                      {/* স্ট্যাটাস ট্যাগ */}
                      <td className="py-4 px-6 text-center">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                            blog.status === "Published"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {blog.status}
                        </span>
                      </td>
                      {/* অ্যাকশন বাটনসমূহ */}
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                            title="এডিট করুন"
                          >
                            <FileEdit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(blog.id)}
                            className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                            title="ডিলিট করুন"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="py-12 text-center text-slate-400"
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <AlertCircle size={32} className="text-slate-300" />
                        <p className="text-sm font-medium">
                          কোনো ব্লগ পোস্ট পাওয়া যায়নি!
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default ManageBlogs;

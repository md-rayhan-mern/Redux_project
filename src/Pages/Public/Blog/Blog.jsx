import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Share2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const BlogPage = () => {
  // ৯টি রিয়েল-ওয়ার্ল্ড ডামি ব্লগের ডেটা
  const blogs = [
    {
      id: 1,
      title: "২০২৬ সালে রিয়্যাক্ট ডেভেলপমেন্টের ভবিষ্যৎ",
      excerpt:
        "রিয়্যাক্ট ১৯ এর নতুন ফিচার এবং সার্ভার কম্পোনেন্ট কিভাবে ওয়েব ডেভেলপমেন্টের দুনিয়া বদলে দিচ্ছে তা জানুন...",
      image: "https://unsplash.com",
      likes: 142,
      comments: 28,
      shares: 15,
    },
    {
      id: 2,
      title: "মঙ্গোডিবি ডেটাবেজ ডিজাইনের সেরা ৫টি নিয়ম",
      excerpt:
        "বড় প্রজেক্টের জন্য মঙ্গোডিবি স্কিমা ডিজাইন করার সময় যে ভুলগুলো এড়িয়ে চলবেন এবং পারফরম্যান্স বাড়াবেন...",
      image: "https://unsplash.com",
      likes: 98,
      comments: 14,
      shares: 7,
    },
    {
      id: 3,
      title: "টেইলউইন্ড সিএসএস এর মডার্ন ট্রিকস",
      excerpt:
        "কম কোড লিখে কিভাবে জটিল এবং আকর্ষণীয় রেসপনসিভ ইউজার ইন্টারফেস তৈরি করবেন তার প্রফেশনাল গাইড...",
      image: "https://unsplash.com",
      likes: 215,
      comments: 42,
      shares: 31,
    },
    {
      id: 4,
      title: "রিডাক্স টুলকিট বনাম কনটেক্সট এপিআই",
      excerpt:
        "আপনার প্রজেক্টের জন্য কোনটি সেরা? গ্লোবাল স্টেট ম্যানেজমেন্টের সহজ এবং কার্যকরী তুলনামূলক বিশ্লেষণ...",
      image: "https://unsplash.com",
      likes: 110,
      comments: 19,
      shares: 9,
    },
    {
      id: 5,
      title: "জাভাস্ক্রিপ্ট অ্যাসিনক্রোনাস প্রোগ্রামিং",
      excerpt:
        "প্রমিজ, অ্যাসিঙ্ক-অ্যাওয়েট এবং ইভেন্ট লুপের ভেতরের মেকানিজম একদম সহজ ভাষায় কোড উদাহরণসহ বুঝুন...",
      image: "https://unsplash.com",
      likes: 185,
      comments: 33,
      shares: 22,
    },
    {
      id: 6,
      title: "ফুল-স্ট্যাক প্রজেক্ট সিকিউরিটি গাইডলাইন",
      excerpt:
        "জেডাব্লুটি (JWT) অথেনটিকেশন এবং ক্রিপ্টোগ্রাফি ব্যবহার করে আপনার রিয়্যাক্ট ও নোড অ্যাপ সুরক্ষিত রাখুন...",
      image: "https://unsplash.com",
      likes: 167,
      comments: 25,
      shares: 18,
    },
    {
      id: 7,
      title: "নোভিস থেকে প্রো: ফ্রন্টএন্ড রোডম্যাপ",
      excerpt:
        "কোডিং শুরু করা থেকে প্রফেশনাল জুনিয়র ডেভেলপার হিসেবে প্রথম চাকরি পাওয়ার কমপ্লিট জার্নি গাইড...",
      image: "https://unsplash.com",
      likes: 312,
      comments: 56,
      shares: 45,
    },
    {
      id: 8,
      title: "ইউজার এক্সপেরিয়েন্স (UX) কেন জরুরি?",
      excerpt:
        "আপনার কোড যতই ভালো হোক না কেন, ইন্টারফেস সুন্দর না হলে ইউজার কেন আপনার সাইট ব্যবহার করবে না...",
      image: "https://unsplash.com",
      likes: 89,
      comments: 12,
      shares: 5,
    },
    {
      id: 9,
      title: "ক্লাউড কম্পিউটিং এবং এডাব্লুএস বেসিক",
      excerpt:
        "অ্যামাজন ওয়েব সার্ভিস (AWS) এ আপনার রিয়্যাক্ট ফ্রন্টএন্ড এবং ব্যাকএন্ড ডিপ্লয় করার সহজ নিয়ম...",
      image: "https://unsplash.com",
      likes: 134,
      comments: 21,
      shares: 14,
    },
  ];

  // পুরো পেজ ও গ্রিডের কন্টেইনার অ্যানিমেশন
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }, // প্রতিটা কার্ড ০.১৫ সেকেন্ড পর পর আসবে
    },
  };

  // প্রতিটি ব্লগ কার্ডের এন্ট্রি অ্যানিমেশন
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      {/* ১. পেজ হেডার সেকশন */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold border border-indigo-100"
        >
          <Sparkles size={12} /> আমাদের ব্লগ সাইট
        </motion.span>
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight"
        >
          জ্ঞান ও প্রযুক্তির{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-rose-500 bg-clip-text text-transparent">
            নতুন দিগন্ত
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-sm md:text-base font-medium"
        >
          প্রোগ্রামিং, টেকনোলজি এবং আধুনিক ওয়েব ডেভেলপমেন্টের সেরা আর্টিকেলগুলো
          পড়ুন এক জায়গায়।
        </motion.p>
      </div>

      {/* ২. ৩টি কলামের ৯টি ব্লগ কার্ড গ্রিড (Staggered Animation) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6"
      >
        {blogs.map((blog) => (
          <motion.article
            key={blog.id}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col h-full transition-shadow duration-300 group"
          >
            {/* কভার ইমেজ এবং জুম ইফেক্ট */}
            <div className="relative h-52 overflow-hidden bg-slate-100">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
            </div>

            {/* কার্ড বডি বা মেটা এরিয়া */}
            <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
              <div className="space-y-2.5">
                {/* টাইটেল */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2 leading-snug">
                  {blog.title}
                </h3>
                {/* এক্সসার্প্ট (ছোট বিবরণ) */}
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              {/* লাইক, কমেন্ট, শেয়ার ও রিড বাটন এরিয়া */}
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between gap-2">
                {/* সোশ্যাল কাউন্টারসমূহ */}
                <div className="flex items-center gap-4 text-slate-400 text-xs font-semibold">
                  <span className="flex items-center gap-1 hover:text-rose-500 transition-colors cursor-pointer">
                    <Heart size={15} /> {blog.likes}
                  </span>
                  <span className="flex items-center gap-1 hover:text-indigo-500 transition-colors cursor-pointer">
                    <MessageCircle size={15} /> {blog.comments}
                  </span>
                  <span className="flex items-center gap-1 hover:text-emerald-500 transition-colors cursor-pointer">
                    <Share2 size={15} /> {blog.shares}
                  </span>
                </div>

                {/* গর্জিয়াস রিড বাটন */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-xs font-bold px-3 py-2 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-inner"
                >
                  পড়ুন{" "}
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogPage;

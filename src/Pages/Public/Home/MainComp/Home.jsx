import React, { useState } from "react";
import Subscribers from "../../../Common/Buttons/Subscribes/Subscribers";
import Email from "../../../Common/Inputes/EmailInput/Email";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Sparkles,
  Flame,
  Eye,
  Heart,
  Calendar,
} from "lucide-react";

const Home = () => {
  const [search, setSearch] = useState("");

  // হিরো সেকশনের জন্য এন্ট্রি অ্যানিমেশন
  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, delay: 0.1 },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 space-y-24 pb-20">
      {/* ১. গর্জিয়াস হিরো সেকশন (গ্লোবাল সার্চসহ) */}
      <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white py-24 px-4 md:px-8 overflow-hidden rounded-b-[40px] md:rounded-b-[60px] shadow-2xl">
        {/* ব্যাকগ্রাউন্ড নিয়ন গ্লো */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-[100px] -ml-20 -mb-20"></div>

        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight md:leading-none">
            আপনার আইডিয়াকপ ওপেন করুন <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
              প্রযুক্তির সাথে তাল মিলিয়ে
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            এখানে পাবেন আধুনিক কোডিং টিপস, ইন্ডাস্ট্রি লেভেল প্রজেক্ট গাইডলাইন
            এবং ফ্রন্টএন্ড থেকে ব্যাকএন্ডের খুঁটিনাটি একদম সহজ বাংলা ভাষায়।
          </p>

          {/* অ্যানিমেটেড ইন্টারেক্টিভ সার্চ বার */}
          <div className="max-w-xl mx-auto relative group">
            <Search
              size={20}
              className="absolute left-4 top-4 text-slate-400 group-focus-within:text-indigo-400 transition-colors"
            />
            <input
              type="text"
              placeholder="কি শিখতে চান আজকে? (যেমন: রিয়্যাক্ট, রিডাক্স...)"
              value={search}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-32 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-medium placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-slate-900/50 transition-all shadow-2xl backdrop-blur-md text-sm"
            />
            <button className="absolute right-2 top-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs transition-colors shadow-md shadow-indigo-600/30">
              খুঁজুন
            </button>
          </div>
        </motion.div>
      </section>

      {/* ২. ট্রেন্ডিং বা ফিচার্ড পোস্ট সেকশন */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <div className="p-2 bg-rose-50 text-rose-500 rounded-xl">
            <Flame size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900">
              আজকের সেরা আকর্ষণ (Featured)
            </h2>
            <p className="text-slate-400 text-xs font-semibold mt-0.5">
              সবচেয়ে জনপ্রিয় এবং তথ্যবহুল আর্টিকেলের মেগা রিভিউ
            </p>
          </div>
        </div>

        {/* মডার্ন মেগা কার্ড ডিজাইন */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 group"
        >
          {/* মেগা ইমেজ */}
          <div className="lg:col-span-7 h-64 md:h-96 rounded-2xl overflow-hidden bg-slate-100 relative">
            <img
              src="https://unsplash.com"
              alt="Featured Post"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <span className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 text-white font-bold text-xs rounded-lg shadow-md">
              জনপ্রিয়
            </span>
          </div>

          {/* মেগা ডিটেইলস */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2 space-y-6">
            <div className="space-y-4">
              <span className="text-indigo-600 text-xs font-bold bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
                ওয়েব ডেভেলপমেন্ট
              </span>
              <h3 className="text-xl md:text-3xl font-black text-slate-950 leading-tight group-hover:text-indigo-600 transition-colors">
                রিয়্যাক্ট এবং রিডাক্স টুলকিট দিয়ে কিভাবে প্রোডাকশন লেভেল
                আর্কিটেকচার বানাবেন
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                আপনার অ্যাপ্লিকেশন বড় হওয়ার সাথে সাথে কোড ম্যানেজ করা কঠিন হয়ে
                পড়ে? এই আর্কিটেকচার গাইডে আমরা দেখব কিভাবে লেয়ার-বেসড মেথড
                ব্যবহার করে স্কেলেবল ফোল্ডার স্ট্রাকচার সাজানো যায়...
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50">
              <div className="flex items-center gap-4 text-slate-400 text-xs font-bold">
                <span className="flex items-center gap-1">
                  <Eye size={14} /> ৪.৫কে ভিউ
                </span>
                <span className="flex items-center gap-1">
                  <Heart size={14} className="text-rose-500 fill-rose-500" />{" "}
                  ৪২০ লাইক
                </span>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-indigo-600 group-hover:text-indigo-700">
                সম্পূর্ণ পড়ুন{" "}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ৩. গর্জিয়াস গ্লাস-মরফিজম নিউজলেটার বক্স */}
      <section className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-tr from-indigo-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-500/20 text-center space-y-6 overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"></div>

          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <h2 className="text-2xl md:text-3xl font-black">
              নতুন আর্টিকেল মিস করতে না চাইলে
            </h2>
            <p className="text-indigo-200 text-xs md:text-sm font-medium">
              আমাদের সাপ্তাহিক নিউজলেটারে সাবস্ক্রাইব করুন। কোনো স্প্যাম নেই,
              শুধু প্রফেশনাল কোডিং গাইড সরাসরি আপনার ইনবক্সে চলে যাবে।
            </p>
          </div>

          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 relative z-10 pt-2">
            <Email />
            <Subscribers />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

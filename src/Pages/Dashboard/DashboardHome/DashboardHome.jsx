import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Eye,
  MessageSquare,
  Users,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

const DashboardHome = () => {
  // ডামি অ্যানালিটিক্স ডেটা (পরবর্তীতে মঙ্গোডিবি থেকে আসবে)
  const stats = [
    {
      id: 1,
      name: "মোট ব্লগ পোস্ট",
      value: "১২৪",
      icon: FileText,
      change: "+১২%",
      color: "bg-blue-500",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      name: "মোট ভিউ",
      value: "৪৫,২৩০",
      icon: Eye,
      change: "+২৪%",
      color: "bg-emerald-500",
      textColor: "text-emerald-600",
    },
    {
      id: 3,
      name: "মোট মন্তব্য",
      value: "১,৮৯০",
      icon: MessageSquare,
      change: "+৮%",
      color: "bg-amber-500",
      textColor: "text-amber-600",
    },
    {
      id: 4,
      name: "মোট সাবস্ক্রাইবার",
      value: "৩,৪২০",
      icon: Users,
      change: "+১৫%",
      color: "bg-indigo-500",
      textColor: "text-indigo-600",
    },
  ];

  // অ্যানিমেশন কনফিগারেশন (কন্টেইনারের জন্য)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }, // প্রতিটি কার্ড একটির পর একটি আসবে
    },
  };

  // প্রতিটি সিঙ্গেল কার্ডের অ্যানিমেশন
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="space-y-8">
      {/* ১. হেডার সেকশন */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          ড্যাশবোর্ড ওভারভিউ
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          আপনার ব্লগ সাইটের বর্তমান অবস্থা এবং পারফরম্যান্স ট্র্যাকিং।
        </p>
      </div>

      {/* ২. অ্যানালিটিক্স কার্ড সেকশন (Framer Motion Staggered Animation) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div
                  className={`p-3 rounded-xl text-white ${stat.color} shadow-lg shadow-slate-200`}
                >
                  <Icon size={24} />
                </div>
                <span
                  className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-slate-50 ${stat.textColor}`}
                >
                  <TrendingUp size={14} />
                  {stat.change}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-bold text-slate-800">
                  {stat.value}
                </h3>
                <p className="text-slate-400 text-sm mt-1 font-medium">
                  {stat.name}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ৩. সাম্প্রতিক অ্যাক্টিভিটি এবং শর্টকাট (রিয়েল-ওয়ার্ল্ড লুক দেওয়ার জন্য) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* বামের বড় বক্স: সাম্প্রতিক পোস্টসমূহ */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-800">
              সাম্প্রতিক ব্লগ পোস্ট
            </h3>
            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
              সব দেখুন <ArrowUpRight size={16} />
            </button>
          </div>

          {/* ডামি টেবিল/লিস্ট */}
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">
                    BLOG
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700">
                      রিয়্যাক্ট এবং রিডাক্স দিয়ে কিভাবে প্রজেক্ট সাজাবেন
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      তারিখ: ৮ জুন, ২০২৬ • ক্যাটাগরি: ওয়েব ডেভেলপমেন্ট
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full">
                  Published
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ডানের ছোট বক্স: কুইক অ্যাকশন বা নোটিফিকেশন */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              কুইক অ্যাকশন
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              এখান থেকে সরাসরি নতুন কন্টেন্ট বা সেটিংস পরিবর্তন করতে পারেন।
            </p>

            <div className="space-y-3">
              <button className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium text-sm transition-colors shadow-lg shadow-indigo-600/20">
                নতুন ব্লগ পোস্ট লিখুন
              </button>
              <button className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-medium text-sm transition-colors">
                ক্যাটাগরি ম্যানেজ করুন
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
            সর্বশেষ আপডেট: এইমাত্র
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

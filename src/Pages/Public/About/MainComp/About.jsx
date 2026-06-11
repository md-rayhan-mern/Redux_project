import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Users2,
  Trophy,
  CheckCircle2,
} from "lucide-react";

const AboutUs = () => {
  const achievements = [
    {
      id: 1,
      count: "৫০০+",
      label: "মোট নিবন্ধ বা ব্লগ",
      icon: Trophy,
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 2,
      count: "৫০কে+",
      label: "মাসিক একটিভ রিডার",
      icon: Users2,
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: 3,
      count: "১০০%",
      label: "সঠিক ও ভেরিফাইড তথ্য",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const team = [
    {
      name: "আশরাফুল ইসলাম",
      role: "প্রতিষ্ঠাতা ও প্রধান লেখক",
      image: "https://unsplash.com",
      github: "#",
      linkedin: "#",
    },
    {
      name: "মাহমুদ হাসান",
      role: "টেকনিক্যাল এডিটর",
      image: "https://unsplash.com",
      github: "#",
      linkedin: "#",
    },
    {
      name: "নাসরিন সুলতানা",
      role: "ইউআই/ইউএক্স ডিজাইনার",
      image: "https://unsplash.com",
      github: "#",
      linkedin: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center lg:text-left"
        >
          <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold border border-indigo-100 inline-block">
            আমাদের গল্প
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-950 leading-tight">
            আমরা শেয়ার করি <br />
            <span className="bg-gradient-to-r from-indigo-600 to-rose-500 bg-clip-text text-transparent">
              ভবিষ্যতের প্রযুক্তি ও জ্ঞান
            </span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
            আমাদের লক্ষ্য হলো বাংলা ভাষায় ওয়েব ডেভেলপমেন্ট ও টেকনোলজির জটিল
            বিষয়গুলোকে সহজভাবে সবার সামনে তুলে ধরা।
          </p>
          <div className="space-y-3 max-w-md mx-auto lg:mx-0 text-left">
            {[
              "মানসম্মত ও প্রফেশনাল গাইডলাইন",
              "রিসোর্স ও সোর্স কোড শেয়ারিং",
              "সহজ ও আকর্ষণীয় লার্নিং মেথড",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-semibold text-slate-600"
              >
                <CheckCircle2
                  size={18}
                  className="text-indigo-600 flex-shrink-0"
                />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white p-2 bg-gradient-to-tr from-indigo-500/10 to-rose-500/10"
        >
          <img
            src="https://unsplash.com"
            alt="Team"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5 group"
            >
              <div
                className={`p-4 rounded-xl text-white bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform`}
              >
                <Icon size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900">
                  {item.count}
                </h3>
                <p className="text-slate-400 text-xs font-bold mt-0.5 uppercase">
                  {item.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-4">
            <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl w-fit">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold">আমাদের ভিশন (Vision)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              বাংলা ভাষাভাষী প্রত্যেকটি প্রযুক্তিপ্রেমী মানুষের জন্য একটি
              বিশ্বস্ত নলেজ হাব তৈরি করা।
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-rose-500/20 text-rose-400 rounded-xl w-fit">
              <Users2 size={24} />
            </div>
            <h3 className="text-xl font-bold">আমাদের মিশন (Mission)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              সরাসরি প্র্যাক্টিক্যাল কোড উদাহরণ ও নিয়মিত আপডেটেড আর্টিকেলের
              মাধ্যমে মজবুত কমিউনিটি তৈরি করা।
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950">
            আমাদের পেছনের{" "}
            <span className="text-indigo-600">মাস্টারমাইন্ডস</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            যারা প্রতিদিন অক্লান্ত পরিশ্রম করে আপনার জন্য এই তথ্যগুলো গুছিয়ে
            নিয়ে আসেন।
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all p-6 flex flex-col items-center text-center group"
            >
              <div className="w-28 h-28 rounded-2xl p-0.5 bg-gradient-to-tr from-indigo-500 to-rose-500 shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs text-slate-400 font-semibold">
                  {member.role}
                </p>
              </div>
              <div className="flex gap-3 mt-5 text-slate-400">
                <a
                  href={member.github}
                  className="p-2 bg-slate-50 rounded-xl hover:bg-slate-900 hover:text-white transition-all"
                >
                  <svg
                    xmlns="http://w3.org"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href={member.linkedin}
                  className="p-2 bg-slate-50 rounded-xl hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <svg
                    xmlns="http://w3.org"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

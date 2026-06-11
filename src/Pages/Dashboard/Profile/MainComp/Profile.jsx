import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Shield,
  Camera,
  Save,
  Key,
  Calendar,
  Layers,
} from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [profileData, setProfileData] = useState({
    name: "আশরাফুল ইসলাম",
    email: "admin@blogsite.com",
    role: "Super Admin",
    joined: "জানুয়ারি ২০২৬",
    totalBlogs: "৪২টি",
    avatar: null,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({ ...profileData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated:", profileData);
    alert("প্রোফাইল তথ্য সফলভাবে আপডেট হয়েছে!");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Password Updated:", passwordData);
    alert("পাসওয়ার্ড সফলভাবে পরিবর্তিত হয়েছে!");
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl overflow-hidden p-6 md:p-8 shadow-2xl border border-indigo-500/10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
        <div className="relative flex flex-col md:flex-row items-center gap-6 z-10">
          <div className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-gradient-to-tr from-indigo-500 to-rose-500 p-1 shadow-xl relative overflow-hidden"
            >
              <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center text-white font-black text-5xl overflow-hidden border border-slate-800">
                {profileData.avatar ? (
                  <img
                    src={profileData.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  profileData.name.charAt(0)
                )}
              </div>
            </motion.div>
            <label className="absolute bottom-2 right-2 p-2 bg-indigo-600 text-white rounded-xl shadow-lg cursor-pointer hover:bg-indigo-700 transition-transform hover:scale-110 border border-indigo-400/30">
              <Camera size={16} />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
          </div>
          <div className="text-center md:text-left space-y-2 flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                {profileData.name}
              </h2>
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-xs font-bold border border-indigo-500/20 inline-flex items-center gap-1 w-fit mx-auto md:mx-0">
                <Shield size={12} /> {profileData.role}
              </span>
            </div>
            <p className="text-slate-400 text-sm flex items-center justify-center md:justify-start gap-1.5">
              <Mail size={14} /> {profileData.email}
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mt-4 pt-4 border-t border-slate-800/60">
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <Calendar size={14} className="text-indigo-400" />
                <span>যোগদান: {profileData.joined}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <Layers size={14} className="text-rose-400" />
                <span>মোট কন্টেন্ট: {profileData.totalBlogs}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 border-b border-slate-200 pb-1">
        <button
          onClick={() => setActiveTab("personal")}
          className={`px-5 py-3 text-sm font-bold rounded-t-xl transition-all flex items-center gap-2 relative ${activeTab === "personal" ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"}`}
        >
          <User size={16} /> व्यक्तिगत तथ्य
          {activeTab === "personal" && (
            <motion.div
              layoutId="activeTabBorder"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={`px-5 py-3 text-sm font-bold rounded-t-xl transition-all flex items-center gap-2 relative ${activeTab === "security" ? "text-indigo-600" : "text-slate-400 hover:text-slate-600"}`}
        >
          <Key size={16} /> পাসওয়ার্ড ও নিরাপত্তা
          {activeTab === "security" && (
            <motion.div
              layoutId="activeTabBorder"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
            />
          )}
        </button>
      </div>
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === "personal" ? (
            <motion.form
              key="personal"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleProfileSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    আপনার পুরো নাম
                  </label>
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-sm shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    ইমেইল অ্যাড্রেস
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-sm shadow-inner"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-4 border-t border-slate-50">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2"
                >
                  <Save size={16} /> প্রোফাইল আপডেট করুন
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.form
              key="security"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              onSubmit={handlePasswordSubmit}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  বর্তমান পাসওয়ার্ড
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      currentPassword: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-sm"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    নতুন পাসওয়ার্ড
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        newPassword: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    নতুন পাসওয়ার্ড নিশ্চিত করুন
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      setPasswordData({
                        ...passwordData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-4 border-t border-slate-50">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
                >
                  <Key size={16} /> সিকিউরিটি আপডেট করুন
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Profile;

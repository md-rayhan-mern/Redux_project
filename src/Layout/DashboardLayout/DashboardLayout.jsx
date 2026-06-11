import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  SquarePlus,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  // সাইডবারের মেনু আইটেম লিস্ট
  const menuItems = [
    { name: "ড্যাশবোর্ড", path: "/dashboard", icon: LayoutDashboard },
    { name: "সব ব্লগ", path: "/dashboard/manage", icon: FileText },
    { name: "নতুন ব্লগ", path: "/dashboard/create", icon: SquarePlus },
    { name: "প্রোফাইল", path: "/dashboard/profile", icon: User },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans">
      {/* ১. সাইডবার অংশ (Framer Motion দিয়ে অ্যানিমেটেড) */}
      <motion.aside
        animate={{ width: isOpen ? "260px" : "78px" }}
        className="h-full bg-slate-900 text-white flex flex-col justify-between p-4 shadow-xl border-r border-slate-800"
      >
        <div>
          {/* সাইডবার হেডার ও টগল বাটন */}
          <div className="flex items-center justify-between mb-8 px-2">
            {isOpen && (
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-bold tracking-wide text-indigo-400"
              >
                অ্যাডমিন প্যানেল
              </motion.h1>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* মেনু লিংকসমূহ */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={isActive ? "text-white" : "text-slate-400"}
                    />
                    {isOpen && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-medium text-sm"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* লগআউট বাটন (সাইডবারের নিচে) */}
        <button className="flex items-center gap-4 p-3 rounded-xl text-rose-400 hover:bg-rose-500/10 transition-colors w-full">
          <LogOut size={22} />
          {isOpen && <span className="font-medium text-sm">লগআউট</span>}
        </button>
      </motion.aside>

      {/* ২. মেইন কন্টেন্ট এরিয়া */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* টপবার */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-end px-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-700">শুভ সকাল!</p>
              <p className="text-xs text-slate-400">অ্যাডমিন</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold border border-indigo-200">
              A
            </div>
          </div>
        </header>

        {/* পেজ চেঞ্জ হওয়ার জায়গা (React Router Outlet) */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8 bg-slate-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

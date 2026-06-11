import React from "react";
import { Send } from "lucide-react";

const Subscribers = () => {
  return (
    <button className="px-6 py-3 bg-white text-indigo-900 hover:bg-slate-100 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg">
      <Send size={16} /> সাবস্ক্রাইব
    </button>
  );
};

export default Subscribers;

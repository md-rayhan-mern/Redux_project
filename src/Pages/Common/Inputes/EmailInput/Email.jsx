import React from "react";

const Email = () => {
  return (
    <>
      <input
        type="email"
        placeholder="আপনার ইমেইল অ্যাড্রেস..."
        className="flex-1 px-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 transition-all text-sm"
        required
      />
    </>
  );
};

export default Email;

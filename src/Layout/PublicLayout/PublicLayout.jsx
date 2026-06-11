import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../../Routes/ScorollToTop/ScrollToTop.jsx";

const PublicRoutrs = () => {
  return (
    <div className="flex flex-col main-wrapper">
      <Navbar className="main-wrappe" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-20 flex-1 main-wrapper min-h-screen px-4 sm:px-6 lg:px-8"
      >
        <ScrollToTop />
        <Outlet />
      </motion.div>
    </div>
  );
};

export default PublicRoutrs;

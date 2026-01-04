import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

export const Home = () => {
  return (
    // bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20
    <div className="flex sm:w-[950px] md:w-[1000px] sm:h-[650px] md:[650px] bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20 overflow-hidden">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

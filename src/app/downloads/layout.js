import React from "react";

import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

const DownloadLayout = ({ children }) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DownloadLayout;
